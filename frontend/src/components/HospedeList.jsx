import { useEffect, useState } from "react";
import { getHospedes, deleteHospede } from "../api/fakeApi";
import PessoaEditForm from "./PessoaEditForm";

function HospedeList() {
  const [hospedes, setHospedes] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  function carregar() {
    getHospedes().then(setHospedes);
  }

  useEffect(() => {
    carregar();
  }, []);

  function remover(id) {
    deleteHospede(id).then(() => carregar());
  }

  return (
    <div>
      <ul>
        {hospedes.map((h) => (
          <li key={h.idPessoa}>
            <strong>{h.nome}</strong> — CPF: {h.cpf}
            <button onClick={() => remover(h.idPessoa)} style={{ marginLeft: "1rem" }}>Remover</button>
            <button onClick={() => setEditandoId(h.idPessoa)} style={{ marginLeft: "0.5rem" }}>Editar</button>
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
    </div>
  );
}

export default HospedeList;
