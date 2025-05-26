import { useEffect, useState } from "react";
import { hospedeService } from "../api/services";
import PessoaEditForm from "./PessoaEditForm";
import { toast } from "react-toastify";

function HospedeList() {
  const [hospedes, setHospedes] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);
      const response = await hospedeService.getAll();
      setHospedes(response.data);
    } catch (error) {
      toast.error("Erro ao carregar hóspedes: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  async function remover(id) {
    if (!window.confirm("Tem certeza que deseja remover este hóspede?")) {
      return;
    }

    try {
      setLoading(true);
      await hospedeService.delete(id);
      toast.success("Hóspede removido com sucesso!");
      carregar();
    } catch (error) {
      toast.error("Erro ao remover hóspede: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h3>Hóspedes Cadastrados</h3>
      {hospedes.length === 0 ? (
        <p>Nenhum hóspede cadastrado.</p>
      ) : (
        <ul className="list">
          {hospedes.map((h) => (
            <li key={h.idPessoa} className="card">
              <div className="card-content">
                <div>
                  <strong>Nome:</strong> {h.nome}
                </div>
                <div>
                  <strong>CPF:</strong> {h.cpf}
                </div>
                <div>
                  <strong>Email:</strong> {h.email}
                </div>
                <div>
                  <strong>Telefone:</strong> {h.telefone}
                </div>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => remover(h.idPessoa)}
                  className="btn-danger"
                >
                  Remover
                </button>
                <button
                  onClick={() => setEditandoId(h.idPessoa)}
                  className="btn-secondary"
                >
                  Editar
                </button>
              </div>
              {editandoId === h.idPessoa && (
                <PessoaEditForm
                  pessoa={h}
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

export default HospedeList;
