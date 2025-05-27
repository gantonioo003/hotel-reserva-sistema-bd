import { useState } from "react";
import { hospedeService } from "../api/services";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { FaUsers, FaEdit, FaTrash } from "react-icons/fa";
import HospedeForm from "../components/HospedeForm";
import HospedeList from "../components/HospedeList";

function HospedesPage() {
  const [refresh, setRefresh] = useState(false);

  function atualizar() {
    setRefresh(!refresh);
  }

  return (
    <Layout>
      <div className="page-card">
        <h1>Gestão de Hóspedes</h1>
        <HospedeForm onHospedeCriado={atualizar} />
        <HospedeList key={refresh} />
      </div>
    </Layout>
  );
}

export default HospedesPage;
