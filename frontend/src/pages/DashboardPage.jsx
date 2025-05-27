import { useEffect, useState } from "react";
import {
  quartoService,
  hospedeService,
  reservaService,
  pagamentoService,
  manutencaoService
} from "../api/services";
import { toast } from "react-toastify";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line
} from "recharts";

function DashboardPage() {
  const [dados, setDados] = useState({
    quartos: 0,
    quartosDisponiveis: 0,
    hospedes: 0,
    reservas: 0,
    faturamento: 0,
    manutencoes: 0,
    faturamentoPorMes: [],
    reservasPorTipo: [],
    ocupacaoPorMes: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);
        const [quartosRes, hospedesRes, reservasRes, pagamentosRes, manutencoesRes] = await Promise.all([
          quartoService.getAll(),
          hospedeService.getAll(),
          reservaService.getAll(),
          pagamentoService.getAll(),
          manutencaoService.getAll()
        ]);

        const quartos = quartosRes.data;
        const totalQuartos = 30; // Total predefinido de quartos
        const disponiveis = totalQuartos - quartos.filter((q) => q.status === "Ocupado").length;
        const manutencaoCount = quartos.filter((q) => q.status === "Manutenção").length;
        const totalPagamentos = pagamentosRes.data.reduce((acc, val) => acc + val.valor, 0);

        // Análise de faturamento por mês
        const faturamentoPorMes = pagamentosRes.data.reduce((acc, pagamento) => {
          const mes = new Date(pagamento.data).toLocaleString('pt-BR', { month: 'long' });
          acc[mes] = (acc[mes] || 0) + pagamento.valor;
          return acc;
        }, {});

        // Análise de reservas por tipo de quarto
        const reservasPorTipo = reservasRes.data.reduce((acc, reserva) => {
          const quarto = quartos.find(q => q.idQuarto === reserva.idQuarto);
          if (quarto) {
            acc[quarto.tipo] = (acc[quarto.tipo] || 0) + 1;
          }
          return acc;
        }, {});

        // Análise de ocupação por mês
        const ocupacaoPorMes = reservasRes.data.reduce((acc, reserva) => {
          const mes = new Date(reserva.dataEntrada).toLocaleString('pt-BR', { month: 'long' });
          acc[mes] = (acc[mes] || 0) + 1;
          return acc;
        }, {});

        setDados({
          quartos: totalQuartos,
          quartosDisponiveis: disponiveis,
          hospedes: hospedesRes.data.length,
          reservas: reservasRes.data.length,
          faturamento: totalPagamentos,
          manutencoes: manutencaoCount,
          faturamentoPorMes: Object.entries(faturamentoPorMes).map(([mes, valor]) => ({
            mes,
            valor: parseFloat(valor.toFixed(2))
          })),
          reservasPorTipo: Object.entries(reservasPorTipo).map(([tipo, quantidade]) => ({
            tipo,
            quantidade
          })),
          ocupacaoPorMes: Object.entries(ocupacaoPorMes).map(([mes, quantidade]) => ({
            mes,
            quantidade
          }))
        });
      } catch (error) {
        toast.error("Erro ao carregar dados do dashboard: " + error.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
        <Card titulo="Quartos" valor={`${dados.quartos} (${dados.quartosDisponiveis} disponíveis)`} />
        <Card titulo="Hóspedes" valor={dados.hospedes} />
        <Card titulo="Reservas" valor={dados.reservas} />
        <Card titulo="Faturamento" valor={`R$ ${dados.faturamento.toFixed(2)}`} />
        <Card titulo="Manutenções" valor={dados.manutencoes} />
        <Card titulo="Taxa de Ocupação" valor={`${((dados.quartos - dados.quartosDisponiveis - dados.manutencoes) / dados.quartos * 100).toFixed(1)}%`} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
        {/* Gráfico de Status dos Quartos */}
        <div className="chart-card">
          <h3>Status dos Quartos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={[
                  { name: "Disponível", value: dados.quartosDisponiveis },
                  { name: "Ocupado", value: dados.quartos - dados.quartosDisponiveis - dados.manutencoes }
                ]}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                <Cell fill="#2ecc71" /> {/* Disponível */}
                <Cell fill="#e74c3c" /> {/* Ocupado */}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Faturamento por Mês */}
        <div className="chart-card">
          <h3>Faturamento por Mês</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dados.faturamentoPorMes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
              <Bar dataKey="valor" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Reservas por Tipo de Quarto */}
        <div className="chart-card">
          <h3>Reservas por Tipo de Quarto</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dados.reservasPorTipo}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tipo" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="quantidade" fill="#9b59b6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Ocupação por Mês */}
        <div className="chart-card">
          <h3>Ocupação por Mês</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dados.ocupacaoPorMes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="quantidade" stroke="#e67e22" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Card({ titulo, valor }) {
  return (
    <div className="dashboard-card">
      <h3>{titulo}</h3>
      <p>{valor}</p>
    </div>
  );
}

export default DashboardPage;
