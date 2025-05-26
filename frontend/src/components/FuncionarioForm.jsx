import { useEffect, useState } from "react";
import { pessoaService, funcionarioService } from "../api/services";
import { toast } from "react-toastify";

function FuncionarioForm({ onFuncionarioCriado }) {
  const [pessoas, setPessoas] = useState([]);
  const [selecionado, setSelecionado] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);
        const response = await pessoaService.getAll();
        setPessoas(response.data);
      } catch (error) {
        toast.error("Erro ao carregar pessoas: " + error.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selecionado) return;

    try {
      setLoading(true);
      await funcionarioService.create(parseInt(selecionado));
      onFuncionarioCriado();
      setSelecionado("");
      toast.success("Funcionário cadastrado com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar funcionário: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3>Vincular Pessoa como Funcionário</h3>
      <div className="form-group">
        <label>Selecione uma pessoa:</label>
        <select 
          value={selecionado} 
          onChange={(e) => setSelecionado(e.target.value)} 
          required
        >
          <option value="">Selecione uma pessoa</option>
          {pessoas.map((p) => (
            <option key={p.idPessoa} value={p.idPessoa}>
              {p.nome} — {p.cpf}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn-primary">
        Cadastrar como Funcionário
      </button>
    </form>
  );
}

export default FuncionarioForm;
