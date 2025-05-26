import { useEffect, useState } from "react";
import { getManutencoes, getExecutas, getFuncionarios, getQuartos } from "../api/fakeApi";

function ManutencaoList() {
  const [manutencoes, setManutencoes] = useState([]);
  const [executas, setExecutas] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);
  const [quartos, setQuartos] = useState([]);

  useEffect(() => {
    Promise.all([
      getManutencoes(),
      getExecutas(),
      getFuncionarios(),
      getQuartos()
    ]).then(([m, e, f, q]) => {
      setManutencoes(m);
      setExecutas(e);
      setFuncionarios(f);
      setQuartos(q);
    });
  }, []);

  function getExecutores(idManutencao) {
    return executas
      .filter((e) => e.idManutencao === idManutencao)
      .map((e) => {
        const funcionario = funcionarios.find((f) => f.idPessoa === e.idFuncionario);
        const quarto = quartos.find((q) => q.idQuarto === e.idQuarto);
        return `${funcionario?.nome || "?"} → Quarto ${quarto?.numero || "?"}`;
      });
  }

  return (
    <div>
      <h3>Histórico de Manutenções</h3>
      <ul>
        {manutencoes.map((m) => (
          <li key={m.id_manutencao}>
            <strong>{m.data}</strong> — {m.tipo_servico} — R${m.custo}
            <br />
            <em>{m.descricao}</em>
            <br />
            <strong>Executado por:</strong> {getExecutores(m.id_manutencao).join(" | ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManutencaoList;
