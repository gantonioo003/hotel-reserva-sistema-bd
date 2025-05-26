import { useEffect, useState } from "react";
import { quartoService } from "../api/services";
import { toast } from "react-toastify";

function QuartoList() {
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);
      const response = await quartoService.getAll();
      setQuartos(response.data);
    } catch (error) {
      toast.error("Erro ao carregar quartos: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h3>Lista de Quartos</h3>
      {quartos.length === 0 ? (
        <p>Nenhum quarto cadastrado.</p>
      ) : (
        <ul>
          {quartos.map((q) => (
            <li key={q.idQuarto} className="card">
              <strong>Quarto {q.numero}</strong> — Tipo: {q.tipo} — Capacidade: {q.capacidade} pessoas
              <br />
              <em>Valor da diária: R${q.valorDiaria.toFixed(2)}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QuartoList;
