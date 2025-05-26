import { useState } from "react";
import ManutencaoForm from "../components/ManutencaoForm";
import ManutencaoList from "../components/ManutencaoList";

function ManutencaoPage() {
  const [refresh, setRefresh] = useState(false);

  function atualizar() {
    setRefresh(!refresh);
  }

  return (
    <div className="container">
      <h1>Manutenções</h1>
      <ManutencaoForm onManutencaoCriada={atualizar} />
      <ManutencaoList key={refresh} />
    </div>
  );
}

export default ManutencaoPage;
