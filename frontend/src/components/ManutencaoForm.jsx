import { useState, useEffect } from "react";
import { getFuncionarios, getQuartos, createManutencao } from "../api/fakeApi";
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

  useEffect(() => {
    getFuncionarios().then(setFuncionarios);
    getQuartos().then(setQuartos);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createManutencao(form).then(() => {
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
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="data" value={form.data} onChange={handleChange} required />
      <input name="tipo_servico" placeholder="Tipo de Serviço" value={form.tipo_servico} onChange={handleChange} required />
      <input name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
      <input type="number" name="custo" placeholder="Custo" value={form.custo} onChange={handleChange} required />
      <select name="idFuncionario" value={form.idFuncionario} onChange={handleChange} required>
        <option value="">Selecione o Funcionário</option>
        {funcionarios.map((f) => (
          <option key={f.idPessoa} value={f.idPessoa}>{f.nome}</option>
        ))}
      </select>
      <select name="idQuarto" value={form.idQuarto} onChange={handleChange} required>
        <option value="">Selecione o Quarto</option>
        {quartos.map((q) => (
          <option key={q.idQuarto} value={q.idQuarto}>{q.numero} - {q.tipo}</option>
        ))}
      </select>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default ManutencaoForm;
