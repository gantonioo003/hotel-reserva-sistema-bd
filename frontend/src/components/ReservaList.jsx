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
    return hospedes.find((h) => h.idPessoa === id)?.nome || "—";
  }

  function quartoInfo(id) {
    const q = quartos.find((q) => q.idQuarto === id);
    return q ? `${q.numero} - ${q.tipo}` : "—";
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
                <strong>Hóspede:</strong> {nomeHospede(r.idHospede)}
              </div>
              <div>
                <strong>Quarto:</strong> {quartoInfo(r.idQuarto)}
              </div>
              <div>
                <strong>Check-in:</strong> {new Date(r.dataEntrada).toLocaleDateString("pt-BR")}
              </div>
              <div>
                <strong>Check-out:</strong> {new Date(r.dataSaida).toLocaleDateString("pt-BR")}
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
