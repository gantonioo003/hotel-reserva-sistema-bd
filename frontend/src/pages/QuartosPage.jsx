import { useState } from "react";
import { quartoService } from "../api/services";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { FaBed, FaEdit, FaTrash } from "react-icons/fa";
import QuartoForm from "../components/QuartoForm";
import QuartoList from "../components/QuartoList";

function QuartosPage() {
  const [atualizar, setAtualizar] = useState(0);

  function handleQuartoCriado() {
    setAtualizar(prev => prev + 1);
  }

  return (
    <Layout>
      <div className="page-card">
        <h1>Gestão de Quartos</h1>
        <QuartoForm onQuartoCriado={handleQuartoCriado} />
        <QuartoList key={atualizar} />
      </div>
    </Layout>
  );
}

export default QuartosPage;
