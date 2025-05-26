import { useState } from "react";
import ReservaForm from "../components/ReservaForm";
import ReservaList from "../components/ReservaList";

function ReservasPage() {
  const [refresh, setRefresh] = useState(false);

  function atualizar() {
    setRefresh(!refresh);
  }

  return (
    <div className="container">
      <h1>Reservas</h1>
      <ReservaForm onReservaCriada={atualizar} />
      <ReservaList key={refresh} />
    </div>
  );
}

export default ReservasPage;
