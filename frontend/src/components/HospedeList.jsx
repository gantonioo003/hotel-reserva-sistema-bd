import { useEffect, useState } from "react";
import { hospedeService, pessoaService } from "../api/services";
import PessoaEditForm from "./PessoaEditForm";
import { toast } from "react-toastify";

function HospedeList() {
  const [hospedes, setHospedes] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [loading, setLoading] = useState(false);

  async function carregar() {
    try {
      setLoading(true);
      const [hospedesRes, pessoasRes] = await Promise.all([
        hospedeService.getAll(),
        pessoaService.getAll(),
      ]);
      setHospedes(hospedesRes.data);
      setPessoas(pessoasRes.data);
    } catch (error) {
      toast.error("Erro ao carregar hóspedes: " + error.message);
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
    if (!window.confirm("Tem certeza que deseja remover este hóspede?")) return;

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

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h3>Hóspedes Cadastrados</h3>
      {hospedes.length === 0 ? (
        <p>Nenhum hóspede cadastrado.</p>
      ) : (
        <ul className="list">
          {hospedes.map((h) => {
            const pessoa = getPessoa(h.idPessoa);
            return (
              <li key={h.idPessoa} className="card">
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

export default HospedeList;