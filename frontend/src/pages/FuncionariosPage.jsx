import { useState, useEffect } from "react";
import { funcionarioService } from "../api/services";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { FaUserTie, FaEdit, FaTrash } from "react-icons/fa";
import FuncionarioForm from "../components/FuncionarioForm";
import FuncionarioList from "../components/FuncionarioList";

function FuncionariosPage() {
  const [refresh, setRefresh] = useState(false);

  function atualizar() {
    setRefresh(!refresh);
  }

  return (
    <Layout>
      <div className="page-card">
        <h1>Gestão de Funcionários</h1>
        <FuncionarioForm onFuncionarioCriado={atualizar} />
        <FuncionarioList key={refresh} />
      </div>
    </Layout>
  );
}

export default FuncionariosPage;
