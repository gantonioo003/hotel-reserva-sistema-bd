import { useEffect, useState } from "react";
import { getPessoas, createFuncionario } from "../api/fakeApi";

function FuncionarioForm({ onFuncionarioCriado }) {
  const [pessoas, setPessoas] = useState([]);
  const [selecionado, setSelecionado] = useState("");

  useEffect(() => {
    getPessoas().then(setPessoas);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (selecionado) {
      createFuncionario(parseInt(selecionado)).then(() => {
        onFuncionarioCriado();
        setSelecionado("");
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Vincular Pessoa como Funcionário</h3>
      <select value={selecionado} onChange={(e) => setSelecionado(e.target.value)} required>
        <option value="">Selecione uma pessoa</option>
        {pessoas.map((p) => (
          <option key={p.idPessoa} value={p.idPessoa}>
            {p.nome} — {p.cpf}
          </option>
        ))}
      </select>
      <button type="submit">Cadastrar como Funcionário</button>
    </form>
  );
}

export default FuncionarioForm;
