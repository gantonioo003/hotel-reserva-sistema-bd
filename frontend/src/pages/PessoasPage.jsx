import PessoaForm from "../components/PessoaForm";
import PessoaList from "../components/PessoaList";

function PessoasPage() {
  return (
    <div className="container">
      <h1>Gestão de Pessoas</h1>
      <PessoaForm />
      <PessoaList />
    </div>
  );
}

export default PessoasPage;
