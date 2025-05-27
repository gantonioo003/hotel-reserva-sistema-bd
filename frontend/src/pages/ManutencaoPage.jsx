import { useState } from "react";
import { manutencaoService } from "../api/services";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { FaTools, FaEdit, FaTrash } from "react-icons/fa";
import ManutencaoForm from "../components/ManutencaoForm";
import ManutencaoList from "../components/ManutencaoList";

function ManutencaoPage() {
  const [atualizar, setAtualizar] = useState(0);

  function handleManutencaoCriada() {
    setAtualizar(prev => prev + 1);
  }

  return (
    <Layout>
      <div className="page-card">
        <h1>Gestão de Manutenções</h1>
        <ManutencaoForm onManutencaoCriada={handleManutencaoCriada} />
        <ManutencaoList key={atualizar} />
      </div>
    </Layout>
  );
}

export default ManutencaoPage;
