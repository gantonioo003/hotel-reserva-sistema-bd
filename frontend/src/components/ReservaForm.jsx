import { useState, useEffect } from "react";
import {
  reservaService,
  hospedeService,
  quartoService,
  pessoaService,
} from "../api/services";
import { toast } from "react-toastify";

function ReservaForm({ onReservaCriada }) {
  const [form, setForm] = useState({
    dataEntrada: "",
    dataSaida: "",
    qtdPessoas: 1,
    idHospede: "",
    idQuarto: "",
    formaPagamento: "",
  });

  const [hospedes, setHospedes] = useState([]);
  const [quartos, setQuartos] = useState([]);
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);
        const [hospedesRes, quartosRes, pessoasRes] = await Promise.all([
          hospedeService.getAll(),
          quartoService.getAll(),
          pessoaService.getAll(),
        ]);
        setHospedes(hospedesRes.data);
        setQuartos(quartosRes.data);
        setPessoas(pessoasRes.data);
      } catch (error) {
        toast.error("Erro ao carregar dados: " + error.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  function getPessoa(id) {
    return pessoas.find((p) => p.idPessoa === id) || {};
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await reservaService.create(form);
      onReservaCriada();
      setForm({
        dataEntrada: "",
        dataSaida: "",
        qtdPessoas: 1,
        idHospede: "",
        idQuarto: "",
        formaPagamento: "",
      });
      toast.success("✅ Reserva criada com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar reserva: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3>Nova Reserva</h3>
      <div className="form-group">
        <label>Data de Entrada:</label>
        <input
          type="date"
          name="dataEntrada"
          value={form.dataEntrada}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Data de Saída:</label>
        <input
          type="date"
          name="dataSaida"
          value={form.dataSaida}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Quantidade de Pessoas:</label>
        <input
          type="number"
          name="qtdPessoas"
          value={form.qtdPessoas}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <div className="form-group">
        <label>Hóspede:</label>
        <select
          name="idHospede"
          value={form.idHospede}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o Hóspede</option>
          {hospedes.map((h) => {
            const p = getPessoa(h.idPessoa);
            return (
              <option key={h.idPessoa} value={h.idPessoa}>
                {p.nome} — {p.cpf}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <label>Quarto:</label>
        <select
          name="idQuarto"
          value={form.idQuarto}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o Quarto</option>
          {quartos.map((q) => (
            <option key={q.idQuarto} value={q.idQuarto}>
              {q.numero} - {q.tipo}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Forma de Pagamento:</label>
        <select
          name="formaPagamento"
          value={form.formaPagamento}
          onChange={handleChange}
          required
        >
          <option value="">Selecione a forma</option>
          <option value="pix">Pix</option>
          <option value="credito">Crédito</option>
          <option value="debito">Débito</option>
          <option value="dinheiro">Dinheiro</option>
        </select>
      </div>
      <button type="submit" className="btn-primary">
        Reservar
      </button>
    </form>
  );
}

export default ReservaForm;