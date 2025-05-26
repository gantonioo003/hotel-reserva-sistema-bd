import { useEffect, useState } from "react";
import { pessoaService } from "../api/services";
import PessoaEditForm from "./PessoaEditForm";
import { toast } from "react-toastify";

function PessoaList() {
  const [pessoas, setPessoas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    carregar();
  }, []);

  async function remover(id) {
    try {
      await pessoaService.delete(id);
      toast.success("Pessoa removida com sucesso!");
      carregar();
    } catch (error) {
      toast.error("Erro ao remover pessoa: " + error.message);
    }
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h3>Lista de Pessoas</h3>
      {pessoas.length === 0 ? (
        <p>Nenhuma pessoa cadastrada.</p>
      ) : (
        pessoas.map((p) => (
          <div key={p.idPessoa} className="card">
            <strong>{p.nome}</strong> — CPF: {p.cpf} — Endereço: {p.endereco}
            <button onClick={() => remover(p.idPessoa)} style={{ marginLeft: "1rem" }}>
              Remover
            </button>
            <button onClick={() => setEditandoId(p.idPessoa)} style={{ marginLeft: "0.5rem" }}>
              Editar
            </button>
            {editandoId === p.idPessoa && (
              <PessoaEditForm
                pessoa={p}
                onCancel={() => setEditandoId(null)}
                onSave={() => {
                  setEditandoId(null);
                  carregar();
                }}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default PessoaList;
