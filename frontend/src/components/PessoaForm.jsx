import { useState } from "react";
import { pessoaService } from "../api/services";
import { toast } from "react-toastify";

function PessoaForm({ onPessoaCriada }) {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    endereco: ""
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await pessoaService.create(form);
      onPessoaCriada();
      setForm({ nome: "", cpf: "", dataNascimento: "", endereco: "" });
      toast.success("✅ Pessoa cadastrada com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar pessoa: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Nome"
        required
        disabled={loading}
      />
      <input
        name="cpf"
        value={form.cpf}
        onChange={handleChange}
        placeholder="CPF"
        required
        disabled={loading}
      />
      <input
        type="date"
        name="dataNascimento"
        value={form.dataNascimento}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <input
        name="endereco"
        value={form.endereco}
        onChange={handleChange}
        placeholder="Endereço"
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
}

export default PessoaForm;
