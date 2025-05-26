import { useState } from "react";
import PagamentoList from "../components/PagamentoList";

function PagamentosPage() {
  const [atualizar, setAtualizar] = useState(0);

  return (
    <div className="container">
      <h1>Gestão de Pagamentos</h1>
      <PagamentoList key={atualizar} />
    </div>
  );
}

export default PagamentosPage;
