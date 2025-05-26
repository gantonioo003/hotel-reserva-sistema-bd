import { useState } from "react";
import { createPessoa } from "../api/fakeApi";
import { toast } from "react-toastify";

function PessoaForm({ onPessoaCriada }) {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    endereco: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createPessoa(form).then(() => {
      onPessoaCriada();
      setForm({ nome: "", cpf: "", dataNascimento: "", endereco: "" });
      toast.success("✅ Pessoa cadastrada com sucesso!");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome" required />
      <input name="cpf" value={form.cpf} onChange={handleChange} placeholder="CPF" required />
      <input type="date" name="dataNascimento" value={form.dataNascimento} onChange={handleChange} required />
      <input name="endereco" value={form.endereco} onChange={handleChange} placeholder="Endereço" required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default PessoaForm;
