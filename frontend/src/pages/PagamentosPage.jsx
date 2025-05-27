import { useState } from "react";
import { pagamentoService } from "../api/services";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { FaMoneyBillWave, FaEdit, FaTrash } from "react-icons/fa";
import PagamentoList from "../components/PagamentoList";

function PagamentosPage() {
  const [atualizar, setAtualizar] = useState(0);

  return (
    <Layout>
      <div className="page-card">
        <h1>Gestão de Pagamentos</h1>
        <PagamentoList key={atualizar} />
      </div>
    </Layout>
  );
}

export default PagamentosPage;
