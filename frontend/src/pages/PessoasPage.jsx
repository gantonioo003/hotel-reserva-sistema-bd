import { useState } from "react";
import PessoaForm from "../components/PessoaForm";
import PessoaList from "../components/PessoaList";

function PessoasPage() {
  const [atualizar, setAtualizar] = useState(0);

  function handlePessoaCriada() {
    setAtualizar(prev => prev + 1);
  }

  return (
    <div className="container">
      <h1>Gestão de Pessoas</h1>
      <PessoaForm onPessoaCriada={handlePessoaCriada} />
      <PessoaList key={atualizar} />
    </div>
  );
}

export default PessoasPage;
