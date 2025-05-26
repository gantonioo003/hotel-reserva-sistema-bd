import { useEffect, useState } from "react";
import { getPagamentos } from "../api/fakeApi";

function PagamentoList() {
  const [pagamentos, setPagamentos] = useState([]);

  useEffect(() => {
    getPagamentos().then(setPagamentos);
  }, []);

  return (
    <div>
      <h3>Pagamentos Realizados</h3>
      <ul>
        {pagamentos.map((p) => (
          <li key={p.idPagamento}>
            <strong>ID:</strong> {p.idPagamento} | <strong>Valor:</strong> R$ {p.valor.toFixed(2)} | <strong>Forma:</strong> {p.forma} | <strong>Status:</strong> {p.status} | <strong>Data:</strong> {p.data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PagamentoList;
