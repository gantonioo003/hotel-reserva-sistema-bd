import { useState } from "react";
import QuartoForm from "../components/QuartoForm";
import QuartoList from "../components/QuartoList";

function QuartosPage() {
  const [refresh, setRefresh] = useState(false);

  function atualizar() {
    setRefresh(!refresh);
  }

  return (
    <div className="container">
      <h1>Gestão de Quartos</h1>
      <QuartoForm onQuartoCriado={atualizar} />
      <QuartoList key={refresh} />
    </div>
  );
}

export default QuartosPage;
