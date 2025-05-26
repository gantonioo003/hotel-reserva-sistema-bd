import { useState, useEffect } from "react";
import { getHospedes, getQuartos, createReserva } from "../api/fakeApi";
import { toast } from "react-toastify";

function ReservaForm({ onReservaCriada }) {
  const [form, setForm] = useState({
    dataEntrada: "",
    dataSaida: "",
    qtdPessoas: 1,
    idHospede: "",
    idQuarto: "",
    valor: 500
  });

  const [hospedes, setHospedes] = useState([]);
  const [quartos, setQuartos] = useState([]);

  useEffect(() => {
    getHospedes().then(setHospedes);
    getQuartos().then(setQuartos);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    createReserva(form).then(() => {
      onReservaCriada();
      setForm({
        dataEntrada: "",
        dataSaida: "",
        qtdPessoas: 1,
        idHospede: "",
        idQuarto: "",
        valor: 500
      });
      toast.success("✅ Reserva criada com sucesso!");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="dataEntrada" value={form.dataEntrada} onChange={handleChange} required />
      <input type="date" name="dataSaida" value={form.dataSaida} onChange={handleChange} required />
      <input type="number" name="qtdPessoas" value={form.qtdPessoas} onChange={handleChange} required />
      <select name="idHospede" value={form.idHospede} onChange={handleChange} required>
        <option value="">Selecione o Hóspede</option>
        {hospedes.map((h) => (
          <option key={h.idPessoa} value={h.idPessoa}>{h.nome}</option>
        ))}
      </select>
      <select name="idQuarto" value={form.idQuarto} onChange={handleChange} required>
        <option value="">Selecione o Quarto</option>
        {quartos.map((q) => (
          <option key={q.idQuarto} value={q.idQuarto}>{q.numero} - {q.tipo}</option>
        ))}
      </select>
      <button type="submit">Reservar</button>
    </form>
  );
}

export default ReservaForm;
