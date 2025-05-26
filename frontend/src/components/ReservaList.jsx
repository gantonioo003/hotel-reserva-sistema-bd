import { useEffect, useState } from "react";
import { getReservas, getHospedes, getQuartos } from "../api/fakeApi";

function ReservaList() {
  const [reservas, setReservas] = useState([]);
  const [hospedes, setHospedes] = useState([]);
  const [quartos, setQuartos] = useState([]);

  useEffect(() => {
    Promise.all([getReservas(), getHospedes(), getQuartos()]).then(
      ([r, h, q]) => {
        setReservas(r);
        setHospedes(h);
        setQuartos(q);
      }
    );
  }, []);

  function nomeHospede(id) {
    return hospedes.find((h) => h.idPessoa === id)?.nome || "—";
  }

  function quartoInfo(id) {
    const q = quartos.find((q) => q.idQuarto === id);
    return q ? `${q.numero} - ${q.tipo}` : "—";
  }

  return (
    <div>
      <h3>Reservas Realizadas</h3>
      <ul>
        {reservas.map((r) => (
          <li key={r.idReserva}>
            Hóspede: {nomeHospede(r.idHospede)} | Quarto: {quartoInfo(r.idQuarto)} | {r.dataEntrada} → {r.dataSaida} | {r.qtdPessoas} pessoas
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservaList;
