import { useEffect, useState } from "react";
import { manutencaoService } from "../api/services";
import { toast } from "react-toastify";

function ManutencaoList() {
  const [manutencoes, setManutencoes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregarDados() {
    try {
      setLoading(true);
      const manutencoesRes = await manutencaoService.getAll();
      setManutencoes(manutencoesRes.data);
    } catch (error) {
      toast.error("Erro ao carregar manutenções: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

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
              <strong>{new Date(m.data + "T00:00:00").toLocaleDateString("pt-BR")}</strong> — {m.tipo_servico} — R${m.custo.toFixed(2)}
              <br />
              <em>{m.descricao}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ManutencaoList;