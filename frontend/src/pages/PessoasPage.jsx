import { useState, useEffect } from "react";
import { pessoaService } from "../api/services";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import { FaTrash, FaEdit, FaUserPlus } from "react-icons/fa";

function PessoasPage() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    endereco: ""
  });
  const [pessoas, setPessoas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      setLoading(true);
      const response = await pessoaService.getAll();
      setPessoas(response.data);
    } catch (error) {
      toast.error("Erro ao carregar pessoas: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      if (editando) {
        await pessoaService.update(editando, form);
        toast.success("✅ Pessoa atualizada com sucesso!");
        setEditando(null);
      } else {
        await pessoaService.create(form);
        toast.success("✅ Pessoa cadastrada com sucesso!");
      }
      setForm({ nome: "", cpf: "", dataNascimento: "", endereco: "" });
      await carregar();
    } catch (error) {
      toast.error("Erro ao salvar pessoa: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Tem certeza que deseja remover esta pessoa?")) return;
    
    try {
      setLoading(true);
      await pessoaService.delete(id);
      toast.success("✅ Pessoa removida com sucesso!");
      await carregar();
    } catch (error) {
      toast.error("Erro ao remover pessoa: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(pessoa) {
    setForm(pessoa);
    setEditando(pessoa.idPessoa);
  }

  return (
    <Layout>
      <div className="page-card">
        <h1>Gestão de Pessoas</h1>
        
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Nome completo"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF</label>
            <input
              id="cpf"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={form.dataNascimento}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
              placeholder="Rua, número, bairro"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group" style={{ justifyContent: 'flex-end' }}>
            <button type="submit" className="btn-primary" disabled={loading}>
              <FaUserPlus style={{ marginRight: '0.5rem' }} />
              {editando ? "Atualizar" : "Cadastrar"}
            </button>
          </div>
        </form>

        {loading ? (
          <div className="loading">Carregando...</div>
        ) : pessoas.length === 0 ? (
          <p className="text-center">Nenhuma pessoa cadastrada.</p>
        ) : (
          <div className="list-grid">
            {pessoas.map((p) => (
              <div key={p.idPessoa} className="list-item">
                <div>
                  <strong>{p.nome}</strong>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>
                    CPF: {p.cpf} — Endereço: {p.endereco}
                  </div>
                </div>
                <div className="actions">
                  <button
                    onClick={() => handleEdit(p)}
                    className="btn-secondary"
                    title="Editar"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(p.idPessoa)}
                    className="btn-danger"
                    title="Remover"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default PessoasPage;
