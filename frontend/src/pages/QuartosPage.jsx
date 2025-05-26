import { useState } from "react";
import QuartoForm from "../components/QuartoForm";
import QuartoList from "../components/QuartoList";

function QuartosPage() {
  const [atualizar, setAtualizar] = useState(0);

  function handleQuartoCriado() {
    setAtualizar(prev => prev + 1);
  }

  return (
    <div className="container">
      <h1>Gestão de Quartos</h1>
      <QuartoForm onQuartoCriado={handleQuartoCriado} />
      <QuartoList key={atualizar} />
    </div>
  );
}

export default QuartosPage;
