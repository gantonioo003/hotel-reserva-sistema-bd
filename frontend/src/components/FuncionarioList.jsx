import { useEffect, useState } from "react";
import { funcionarioService, pessoaService } from "../api/services";
import PessoaEditForm from "./PessoaEditForm";
import { toast } from "react-toastify";

function FuncionarioList() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);
      const [funcionariosRes, pessoasRes] = await Promise.all([
        funcionarioService.getAll(),
        pessoaService.getAll(),
      ]);
      setFuncionarios(funcionariosRes.data);
      setPessoas(pessoasRes.data);
    } catch (error) {
      toast.error("Erro ao carregar funcionários: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  function getPessoa(idPessoa) {
    return pessoas.find((p) => p.idPessoa === idPessoa) || {};
  }

  async function remover(id) {
    if (!window.confirm("Tem certeza que deseja remover este funcionário?")) return;

    try {
      setLoading(true);
      await funcionarioService.delete(id);
      toast.success("Funcionário removido com sucesso!");
      carregar();
    } catch (error) {
      toast.error("Erro ao remover funcionário: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h3>Funcionários Cadastrados</h3>
      {funcionarios.length === 0 ? (
        <p>Nenhum funcionário cadastrado.</p>
      ) : (
        <ul className="list">
          {funcionarios.map((f) => {
            const pessoa = getPessoa(f.idPessoa);
            return (
              <li key={f.idPessoa} className="card">
                <div className="card-content">
                  <div>
                    <strong>Nome:</strong> {pessoa.nome}
                  </div>
                  <div>
                    <strong>CPF:</strong> {pessoa.cpf}
                  </div>
                </div>
                <div className="card-actions">
                  <button
                    onClick={() => remover(f.idPessoa)}
                    className="btn-danger"
                  >
                    Remover
                  </button>
                  <button
                    onClick={() => setEditandoId(f.idPessoa)}
                    className="btn-secondary"
                  >
                    Editar
                  </button>
                </div>
                {editandoId === f.idPessoa && (
                  <PessoaEditForm
                    pessoa={pessoa}
                    onCancel={() => setEditandoId(null)}
                    onSave={() => {
                      setEditandoId(null);
                      carregar();
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default FuncionarioList;