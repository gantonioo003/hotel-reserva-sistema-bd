import { useEffect, useState } from "react";
import { getQuartos } from "../api/fakeApi";

function QuartoList() {
  const [quartos, setQuartos] = useState([]);

  useEffect(() => {
    getQuartos().then(setQuartos);
  }, []);

  return (
    <div>
      <h3>Lista de Quartos</h3>
      <ul>
        {quartos.map((q) => (
          <li key={q.idQuarto}>
            Quarto {q.numero} — {q.tipo} — Capacidade: {q.capacidade} — R${q.valorDiaria} — Status: {q.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuartoList;
