import { useState, useEffect } from "react";
import { manutencaoService, funcionarioService, quartoService } from "../api/services";
import { toast } from "react-toastify";

function ManutencaoForm({ onManutencaoCriada }) {
  const [form, setForm] = useState({
    data: "",
    tipo_servico: "",
    descricao: "",
    custo: "",
    idFuncionario: "",
    idQuarto: ""
  });

  const [funcionarios, setFuncionarios] = useState([]);
  const [quartos, setQuartos] = useState([]);
  const [loading, setLoading] = useState(false);

  async function carregarDados() {
    try {
      setLoading(true);
      const [funcionariosRes, quartosRes] = await Promise.all([
        funcionarioService.getAll(),
        quartoService.getAll()
      ]);
      setFuncionarios(funcionariosRes.data);
      setQuartos(quartosRes.data);
    } catch (error) {
      toast.error("Erro ao carregar dados: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

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
        custo: parseFloat(form.custo),
        idFuncionario: parseInt(form.idFuncionario),
        idQuarto: parseInt(form.idQuarto)
      });
      onManutencaoCriada();
      setForm({
        data: "",
        tipo_servico: "",
        descricao: "",
        custo: "",
        idFuncionario: "",
        idQuarto: ""
      });
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
        <option value="Reparo">Reparo</option>
        <option value="Manutenção Preventiva">Manutenção Preventiva</option>
        <option value="Manutenção Corretiva">Manutenção Corretiva</option>
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
      <select
        name="idFuncionario"
        value={form.idFuncionario}
        onChange={handleChange}
        required
        disabled={loading}
      >
        <option value="">Selecione o Funcionário</option>
        {funcionarios.map((f) => (
          <option key={f.idPessoa} value={f.idPessoa}>{f.nome}</option>
        ))}
      </select>
      <select
        name="idQuarto"
        value={form.idQuarto}
        onChange={handleChange}
        required
        disabled={loading}
      >
        <option value="">Selecione o Quarto</option>
        {quartos.map((q) => (
          <option key={q.idQuarto} value={q.idQuarto}>Quarto {q.numero} - {q.tipo}</option>
        ))}
      </select>
      <button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrar"}
      </button>
    </form>
  );
}

export default ManutencaoForm;
