import { useEffect, useState } from "react";
import { getPessoas, createHospede } from "../api/fakeApi";

function HospedeForm({ onHospedeCriado }) {
  const [pessoas, setPessoas] = useState([]);
  const [selecionado, setSelecionado] = useState("");

  useEffect(() => {
    getPessoas().then(setPessoas);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (selecionado) {
      createHospede(parseInt(selecionado)).then(() => {
        onHospedeCriado();
        setSelecionado("");
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Vincular Pessoa como Hóspede</h3>
      <select value={selecionado} onChange={(e) => setSelecionado(e.target.value)} required>
        <option value="">Selecione uma pessoa</option>
        {pessoas.map((p) => (
          <option key={p.idPessoa} value={p.idPessoa}>
            {p.nome} — {p.cpf}
          </option>
        ))}
      </select>
      <button type="submit">Cadastrar como Hóspede</button>
    </form>
  );
}

export default HospedeForm;
