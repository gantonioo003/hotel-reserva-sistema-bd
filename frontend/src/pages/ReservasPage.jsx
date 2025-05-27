import { useState } from "react";
import { reservaService } from "../api/services";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa";
import ReservaForm from "../components/ReservaForm";
import ReservaList from "../components/ReservaList";

function ReservasPage() {
  const [atualizar, setAtualizar] = useState(0);

  const handleReservaCriada = () => {
    setAtualizar((prev) => prev + 1); // força re-render da lista
  };

  return (
    <Layout>
      <div className="page-card">
        <h1>Gestão de Reservas</h1>
        <ReservaForm onReservaCriada={handleReservaCriada} />
        <ReservaList key={atualizar} />
      </div>
    </Layout>
  );
}

export default ReservasPage;