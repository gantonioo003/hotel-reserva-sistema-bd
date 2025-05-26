import { useState } from "react";
import ReservaForm from "../components/ReservaForm";
import ReservaList from "../components/ReservaList";

function ReservasPage() {
  const [atualizar, setAtualizar] = useState(0);

  return (
    <div className="container">
      <h1>Gestão de Reservas</h1>
      <ReservaForm />
      <ReservaList key={atualizar} />
    </div>
  );
}

export default ReservasPage;
