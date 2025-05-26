import { useState } from "react";
import { createQuarto } from "../api/fakeApi";
import { toast } from "react-toastify";

function QuartoForm({ onQuartoCriado }) {
  const [form, setForm] = useState({
    numero: "",
    tipo: "",
    capacidade: 1,
    valorDiaria: "",
    status: "Disponível"
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createQuarto(form).then(() => {
      onQuartoCriado();
      setForm({ numero: "", tipo: "", capacidade: 1, valorDiaria: "", status: "Disponível" });
      toast.success("✅ Quarto cadastrado com sucesso!");
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <input name="numero" placeholder="Número" value={form.numero} onChange={handleChange} required />
      <input name="tipo" placeholder="Tipo" value={form.tipo} onChange={handleChange} required />
      <input type="number" name="capacidade" placeholder="Capacidade" value={form.capacidade} onChange={handleChange} required />
      <input type="number" name="valorDiaria" placeholder="Valor da Diária" value={form.valorDiaria} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Disponível</option>
        <option>Ocupado</option>
        <option>Manutenção</option>
      </select>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default QuartoForm;
