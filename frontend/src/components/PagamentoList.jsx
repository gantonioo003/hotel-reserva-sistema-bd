import { useEffect, useState } from "react";
import { pagamentoService } from "../api/services";
import { toast } from "react-toastify";

function PagamentoList() {
  const [pagamentos, setPagamentos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);
      const response = await pagamentoService.getAll();
      setPagamentos(response.data);
    } catch (error) {
      toast.error("Erro ao carregar pagamentos: " + error.message);
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
      <h3>Pagamentos Realizados</h3>
      {pagamentos.length === 0 ? (
        <p>Nenhum pagamento registrado.</p>
      ) : (
        <ul>
          {pagamentos.map((p) => (
            <li key={p.idPagamento} className="card">
              <div>
                <strong>ID:</strong> {p.idPagamento}
              </div>
              <div>
                <strong>Valor:</strong> R$ {p.valor.toFixed(2)}
              </div>
              <div>
                <strong>Forma:</strong> {p.forma}
              </div>
              <div>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color:
                      p.status === "Pago"
                        ? "green"
                        : p.status === "Pendente"
                          ? "orange"
                          : "red",
                  }}
                >
                  {p.status}
                </span>
              </div>
              <div>
                <strong>Data:</strong>{" "}
                {new Date(p.data).toLocaleDateString("pt-BR")}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PagamentoList;
