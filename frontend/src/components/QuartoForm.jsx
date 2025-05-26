import { useState } from "react";
import { quartoService } from "../api/services";
import { toast } from "react-toastify";

function QuartoForm({ onQuartoCriado }) {
  const [form, setForm] = useState({
    numero: "",
    tipo: "",
    capacidade: "",
    valorDiaria: ""
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
      await quartoService.create({
        ...form,
        capacidade: parseInt(form.capacidade),
        valorDiaria: parseFloat(form.valorDiaria)
      });
      onQuartoCriado();
      setForm({ numero: "", tipo: "", capacidade: "", valorDiaria: "" });
      toast.success("✅ Quarto cadastrado com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar quarto: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="numero"
        value={form.numero}
        onChange={handleChange}
        placeholder="Número do quarto"
        required
        disabled={loading}
      />
      <select
        name="tipo"
        value={form.tipo}
        onChange={handleChange}
        required
        disabled={loading}
      >
        <option value="">Selecione o tipo</option>
        <option value="Simples">Simples</option>
        <option value="Duplo">Duplo</option>
        <option value="Suíte">Suíte</option>
        <option value="Luxo">Luxo</option>
      </select>
      <input
        type="number"
        name="capacidade"
        value={form.capacidade}
        onChange={handleChange}
        placeholder="Capacidade"
        required
        min="1"
        disabled={loading}
      />
      <input
        type="number"
        name="valorDiaria"
        value={form.valorDiaria}
        onChange={handleChange}
        placeholder="Valor da diária"
        required
        min="0"
        step="0.01"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
}

export default QuartoForm;
