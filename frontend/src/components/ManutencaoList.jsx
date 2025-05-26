import { useEffect, useState } from "react";
import { manutencaoService, funcionarioService, quartoService } from "../api/services";
import { toast } from "react-toastify";

function ManutencaoList() {
  const [manutencoes, setManutencoes] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregarDados() {
    try {
      setLoading(true);
      const [manutencoesRes, funcionariosRes, quartosRes] = await Promise.all([
        manutencaoService.getAll(),
        funcionarioService.getAll(),
        quartoService.getAll()
      ]);

      setManutencoes(manutencoesRes.data);
      setFuncionarios(funcionariosRes.data);
      setQuartos(quartosRes.data);
    } catch (error) {
      toast.error("Erro ao carregar dados: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  function getExecutores(idManutencao) {
    const manutencao = manutencoes.find(m => m.id_manutencao === idManutencao);
    if (!manutencao) return [];

    const funcionario = funcionarios.find(f => f.idPessoa === manutencao.idFuncionario);
    const quarto = quartos.find(q => q.idQuarto === manutencao.idQuarto);

    return [`${funcionario?.nome || "?"} → Quarto ${quarto?.numero || "?"}`];
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h3>Histórico de Manutenções</h3>
      {manutencoes.length === 0 ? (
        <p>Nenhuma manutenção registrada.</p>
      ) : (
        <ul>
          {manutencoes.map((m) => (
            <li key={m.id_manutencao} className="card">
              <strong>{new Date(m.data).toLocaleDateString()}</strong> — {m.tipo_servico} — R${m.custo.toFixed(2)}
              <br />
              <em>{m.descricao}</em>
              <br />
              <strong>Executado por:</strong> {getExecutores(m.id_manutencao).join(" | ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ManutencaoList;
