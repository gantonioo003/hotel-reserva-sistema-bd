import { useState } from "react";
import { updatePessoa } from "../api/fakeApi";

function PessoaEditForm({ pessoa, onCancel, onSave }) {
  const [form, setForm] = useState({ ...pessoa });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updatePessoa(pessoa.idPessoa, form).then(() => onSave());
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
      <input name="nome" value={form.nome} onChange={handleChange} required />
      <input name="cpf" value={form.cpf} onChange={handleChange} required />
      <input name="dataNascimento" type="date" value={form.dataNascimento} onChange={handleChange} required />
      <input name="endereco" value={form.endereco} onChange={handleChange} required />
      <button type="submit">Salvar</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: "1rem" }}>Cancelar</button>
    </form>
  );
}

export default PessoaEditForm;
