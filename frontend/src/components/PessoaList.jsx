import { useEffect, useState } from "react";
import { getPessoas, deletePessoa } from "../api/fakeApi";
import PessoaEditForm from "./PessoaEditForm";

function PessoaList() {
  const [pessoas, setPessoas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function carregar() {
    getPessoas().then(setPessoas);
  }

  useEffect(() => {
    carregar();
  }, []);

  function remover(id) {
    deletePessoa(id).then(() => carregar());
  }

  return (
    <div>
      <h3>Lista de Pessoas</h3>
      {pessoas.map((p) => (
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
      ))}
    </div>
  );
}

export default PessoaList;
