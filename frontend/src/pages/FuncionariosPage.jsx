import { useState } from "react";
import FuncionarioForm from "../components/FuncionarioForm";
import FuncionarioList from "../components/FuncionarioList";

function FuncionariosPage() {
  const [refresh, setRefresh] = useState(false);

  function atualizar() {
    setRefresh(!refresh);
  }

  return (
    <div className="container">
      <h1>Gestão de Funcionários</h1>
      <FuncionarioForm onFuncionarioCriado={atualizar} />
      <FuncionarioList key={refresh} />
    </div>
  );
}

export default FuncionariosPage;
