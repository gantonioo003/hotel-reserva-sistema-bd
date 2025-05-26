import { useState } from "react";
import { pessoaService } from "../api/services";
import { toast } from "react-toastify";

function PessoaEditForm({ pessoa, onCancel, onSave }) {
  const [form, setForm] = useState({ ...pessoa });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await pessoaService.update(pessoa.idPessoa, form);
      toast.success("Pessoa atualizada com sucesso!");
      onSave();
    } catch (error) {
      toast.error("Erro ao atualizar pessoa: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <input
        name="cpf"
        value={form.cpf}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <input
        name="dataNascimento"
        type="date"
        value={form.dataNascimento}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <input
        name="endereco"
        value={form.endereco}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </button>
      <button
        type="button"
        onClick={onCancel}
        style={{ marginLeft: "1rem" }}
        disabled={loading}
      >
        Cancelar
      </button>
    </form>
  );
}

export default PessoaEditForm;
