import { useEffect, useState } from "react";
import { getFuncionarios, deleteFuncionario } from "../api/fakeApi";
import PessoaEditForm from "./PessoaEditForm";

function FuncionarioList() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function carregar() {
    getFuncionarios().then(setFuncionarios);
  }

  useEffect(() => {
    carregar();
  }, []);

  function remover(id) {
    deleteFuncionario(id).then(() => carregar());
  }

  return (
    <div>
      <h3>Lista de Funcionários</h3>
      <ul>
        {funcionarios.map((f) => (
          <li key={f.idPessoa}>
            <strong>{f.nome}</strong> — CPF: {f.cpf}
            <button onClick={() => remover(f.idPessoa)} style={{ marginLeft: "1rem" }}>
              Remover
            </button>
            <button onClick={() => setEditandoId(f.idPessoa)} style={{ marginLeft: "0.5rem" }}>
              Editar
            </button>
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
    </div>
  );
}

export default FuncionarioList;
