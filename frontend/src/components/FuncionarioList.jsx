import { useEffect, useState } from "react";
import { funcionarioService } from "../api/services";
import PessoaEditForm from "./PessoaEditForm";
import { toast } from "react-toastify";

function FuncionarioList() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);
      const response = await funcionarioService.getAll();
      setFuncionarios(response.data);
    } catch (error) {
      toast.error("Erro ao carregar funcionários: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  async function remover(id) {
    if (!window.confirm("Tem certeza que deseja remover este funcionário?")) {
      return;
    }

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

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h3>Funcionários Cadastrados</h3>
      {funcionarios.length === 0 ? (
        <p>Nenhum funcionário cadastrado.</p>
      ) : (
        <ul className="list">
          {funcionarios.map((f) => (
            <li key={f.idPessoa} className="card">
              <div className="card-content">
                <div>
                  <strong>Nome:</strong> {f.nome}
                </div>
                <div>
                  <strong>CPF:</strong> {f.cpf}
                </div>
                <div>
                  <strong>Email:</strong> {f.email}
                </div>
                <div>
                  <strong>Telefone:</strong> {f.telefone}
                </div>
                <div>
                  <strong>Cargo:</strong> {f.cargo}
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
                  pessoa={f}
                  onCancel={() => setEditandoId(null)}
                  onSave={() => {
                    setEditandoId(null);
                    carregar();
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FuncionarioList;
