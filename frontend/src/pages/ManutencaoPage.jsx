import { useState } from "react";
import ManutencaoForm from "../components/ManutencaoForm";
import ManutencaoList from "../components/ManutencaoList";

function ManutencaoPage() {
  const [atualizar, setAtualizar] = useState(0);

  function handleManutencaoCriada() {
    setAtualizar(prev => prev + 1);
  }

  return (
    <div className="container">
      <h1>Gestão de Manutenções</h1>
      <ManutencaoForm onManutencaoCriada={handleManutencaoCriada} />
      <ManutencaoList key={atualizar} />
    </div>
  );
}

export default ManutencaoPage;
