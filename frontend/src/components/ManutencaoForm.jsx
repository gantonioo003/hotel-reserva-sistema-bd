import { useState } from "react";
import { manutencaoService } from "../api/services";
import { toast } from "react-toastify";

function ManutencaoForm({ onManutencaoCriada }) {
  const [form, setForm] = useState({
    data: "",
    tipo_servico: "",
    descricao: "",
    custo: ""
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
      await manutencaoService.create({
        ...form,
        custo: parseFloat(form.custo)
      });
      onManutencaoCriada();
      setForm({ data: "", tipo_servico: "", descricao: "", custo: "" });
      toast.success("✅ Manutenção registrada com sucesso!");
    } catch (error) {
      toast.error("Erro ao registrar manutenção: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="data"
        value={form.data}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <select
        name="tipo_servico"
        value={form.tipo_servico}
        onChange={handleChange}
        required
        disabled={loading}
      >
        <option value="">Selecione o tipo de serviço</option>
        <option value="Limpeza">Limpeza</option>
        <option value="Elétrica">Elétrica</option>
        <option value="Hidráulica">Hidráulica</option>
        <option value="Pintura">Pintura</option>
        <option value="Troca de Móveis">Troca de Móveis</option>
        <option value="Outros">Outros</option>
      </select>
      <input
        name="descricao"
        placeholder="Descrição"
        value={form.descricao}
        onChange={handleChange}
        required
        disabled={loading}
      />
      <input
        type="number"
        name="custo"
        placeholder="Custo"
        value={form.custo}
        onChange={handleChange}
        required
        min="0"
        step="0.01"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrar"}
      </button>
    </form>
  );
}

export default ManutencaoForm;