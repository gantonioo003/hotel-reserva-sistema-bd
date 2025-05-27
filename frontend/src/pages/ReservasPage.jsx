import { useState } from "react";
import ReservaForm from "../components/ReservaForm";
import ReservaList from "../components/ReservaList";

function ReservasPage() {
  const [atualizar, setAtualizar] = useState(0);

  const handleReservaCriada = () => {
    setAtualizar((prev) => prev + 1); // força re-render da lista
  };

  return (
    <div className="container">
      <h1>Gestão de Reservas</h1>
      <ReservaForm onReservaCriada={handleReservaCriada} />
      <ReservaList key={atualizar} />
    </div>
  );
}

export default ReservasPage;