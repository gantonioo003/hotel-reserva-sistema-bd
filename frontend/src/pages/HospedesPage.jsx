import { useState } from "react";
import HospedeForm from "../components/HospedeForm";
import HospedeList from "../components/HospedeList";

function HospedesPage() {
  const [refresh, setRefresh] = useState(false);

  function atualizar() {
    setRefresh(!refresh);
  }

  return (
    <div className="container">
      <h1>Gestão de Hóspedes</h1>
      <HospedeForm onHospedeCriado={atualizar} />
      <HospedeList key={refresh} />
    </div>
  );
}

export default HospedesPage;
