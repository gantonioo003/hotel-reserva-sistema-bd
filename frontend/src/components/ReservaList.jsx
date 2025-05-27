import { useEffect, useState } from "react";
import { reservaService, hospedeService, quartoService } from "../api/services";
import { toast } from "react-toastify";

function ReservaList() {
  const [reservas, setReservas] = useState([]);
  const [hospedes, setHospedes] = useState([]);
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);
      const [reservasRes, hospedesRes, quartosRes] = await Promise.all([
        reservaService.getAll(),
        hospedeService.getAll(),
        quartoService.getAll()
      ]);

      setReservas(reservasRes.data);
      setHospedes(hospedesRes.data);
      setQuartos(quartosRes.data);
    } catch (error) {
      toast.error("Erro ao carregar dados: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  function nomeHospede(id) {
    const idNum = parseInt(id);
    const hospede = hospedes.find((h) => parseInt(h.idPessoa) === idNum);
    return hospede ? hospede.nome : "—";
  }

  function quartoInfo(id) {
    const q = quartos.find((q) => q.idQuarto === id);
    return q ? q.numero + " - " + q.tipo : "—";
  }

  function formatarDataLocal(data) {
    return new Date(data + "T00:00:00").toLocaleDateString("pt-BR");
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h3>Reservas Realizadas</h3>
      {reservas.length === 0 ? (
        <p>Nenhuma reserva registrada.</p>
      ) : (
        <ul>
          {reservas.map((r) => (
            <li key={r.idReserva} className="card">
              <div>
                <strong>Quarto:</strong> {quartoInfo(r.idQuarto)}
              </div>
              <div>
                <strong>Check-in:</strong> {formatarDataLocal(r.dataEntrada)}
              </div>
              <div>
                <strong>Check-out:</strong> {formatarDataLocal(r.dataSaida)}
              </div>
              <div>
                <strong>Hóspedes:</strong> {r.qtdPessoas}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReservaList;