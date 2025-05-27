import { useEffect, useState } from "react";
import {
  quartoService,
  hospedeService,
  reservaService,
  pagamentoService,
  manutencaoService
} from "../api/services";
import { toast } from "react-toastify";
import { FaBed, FaUsers, FaCalendarAlt, FaMoneyBillWave, FaTools, FaChartPie } from 'react-icons/fa';
import Layout from "../components/Layout";

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
    quartos: [],
    quartosDisponiveis: 0,
    hospedes: 0,
    reservas: 0,
    faturamento: 0,
    faturamentoPorMes: [],
    reservasPorTipo: [],
    ocupacaoPorMes: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        setLoading(true);
        const [quartosRes, hospedesRes, reservasRes, pagamentosRes] = await Promise.all([
          quartoService.getAll(),
          hospedeService.getAll(),
          reservaService.getAll(),
          pagamentoService.getAll()
        ]);

        console.log('Dados recebidos:', {
          quartos: quartosRes.data,
          hospedes: hospedesRes.data,
          reservas: reservasRes.data,
          pagamentos: pagamentosRes.data
        });

        const quartos = quartosRes.data;
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

        const dadosProcessados = {
          quartos: quartos,
          quartosDisponiveis: quartos.filter((q) => q.status === "livre").length,
          hospedes: hospedesRes.data.length,
          reservas: reservasRes.data.length,
          faturamento: totalPagamentos,
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
        };

        console.log('Dados processados:', dadosProcessados);
        setDados(dadosProcessados);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        toast.error("Erro ao carregar dados do dashboard: " + error.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  const renderGraficoStatusQuartos = () => {
    const quartosLivres = dados.quartos.filter((q) => q.status === "livre").length;
    const quartosReservados = dados.quartos.filter((q) => q.status === "reservado").length;

    const data = [
      { name: "Livre", value: quartosLivres },
      { name: "Reservado", value: quartosReservados }
    ];

    const COLORS = ["#2ecc71", "#e74c3c"];

    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
          <div className="custom-tooltip">
            <p>{`${data.name}: ${data.value} ${data.value === 1 ? 'quarto' : 'quartos'}`}</p>
          </div>
        );
      }
      return null;
    };

    if (data.every(item => item.value === 0)) {
      return <p className="sem-dados">Sem dados de quartos para exibir</p>;
    }

    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  const renderGraficoFaturamento = () => {
    if (dados.faturamentoPorMes.length === 0) {
      return <p className="sem-dados">Sem dados de faturamento para exibir</p>;
    }

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p>{`${label}`}</p>
            <p>{`Faturamento: R$ ${payload[0].value.toFixed(2)}`}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dados.faturamentoPorMes}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
          <XAxis dataKey="mes" stroke="#2c3e50" />
          <YAxis stroke="#2c3e50" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="valor" fill="#3498db">
            {dados.faturamentoPorMes.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`#3498db${index % 2 === 0 ? 'cc' : ''}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderGraficoReservasPorTipo = () => {
    if (dados.reservasPorTipo.length === 0) {
      return <p className="sem-dados">Sem dados de reservas por tipo para exibir</p>;
    }

    const COLORS = ["#9b59b6", "#8e44ad", "#2980b9", "#3498db"];

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p>{`Tipo: ${label}`}</p>
            <p>{`Quantidade: ${payload[0].value} ${payload[0].value === 1 ? 'reserva' : 'reservas'}`}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dados.reservasPorTipo}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
          <XAxis dataKey="tipo" stroke="#2c3e50" />
          <YAxis stroke="#2c3e50" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="quantidade">
            {dados.reservasPorTipo.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderGraficoOcupacao = () => {
    if (dados.ocupacaoPorMes.length === 0) {
      return <p className="sem-dados">Sem dados de ocupação para exibir</p>;
    }

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p>{`${label}`}</p>
            <p>{`Ocupação: ${payload[0].value} ${payload[0].value === 1 ? 'quarto' : 'quartos'}`}</p>
          </div>
        );
      }
      return null;
    };

    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dados.ocupacaoPorMes}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
          <XAxis dataKey="mes" stroke="#2c3e50" />
          <YAxis stroke="#2c3e50" />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="quantidade" 
            stroke="#e67e22" 
            strokeWidth={2}
            dot={{ fill: "#e67e22", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Layout>
      <div className="dashboard-container">
        <h1>Dashboard</h1>

        <div className="cards-grid">
          <Card titulo="Quartos" valor={`${dados.quartos.length} (${dados.quartosDisponiveis} disponíveis)`} icon={FaBed} color="#2ecc71" />
          <Card titulo="Hóspedes" valor={dados.hospedes} icon={FaUsers} color="#e74c3c" />
          <Card titulo="Reservas" valor={dados.reservas} icon={FaCalendarAlt} color="#f1c40f" />
          <Card titulo="Faturamento" valor={`R$ ${dados.faturamento.toFixed(2)}`} icon={FaMoneyBillWave} color="#3498db" />
          <Card titulo="Taxa de Ocupação" valor={`${((dados.quartos.length - dados.quartosDisponiveis) / dados.quartos.length * 100).toFixed(1)}%`} icon={FaChartPie} color="#e67e22" />
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3>Status dos Quartos</h3>
            {renderGraficoStatusQuartos()}
          </div>

          <div className="chart-card">
            <h3>Faturamento por Mês</h3>
            {renderGraficoFaturamento()}
          </div>

          <div className="chart-card">
            <h3>Reservas por Tipo de Quarto</h3>
            {renderGraficoReservasPorTipo()}
          </div>

          <div className="chart-card">
            <h3>Ocupação por Mês</h3>
            {renderGraficoOcupacao()}
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Card({ titulo, valor, icon: Icon, color }) {
  return (
    <div className="dashboard-card" style={{ borderTop: `4px solid ${color}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <Icon size={20} color={color} />
        <h3>{titulo}</h3>
      </div>
      <p style={{ color }}>{valor}</p>
    </div>
  );
}

export default DashboardPage;

// Estilos CSS
const styles = `
  .dashboard-container {
    padding: 0;
    max-width: 100%;
    transition: margin-left 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    .dashboard-container {
      padding: 0;
      padding-top: 1rem;
    }
  }

  .dashboard-container h1 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 600;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .charts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    .charts-grid {
      grid-template-columns: 1fr;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 1.2rem;
    color: #666;
  }

  .sem-dados {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    color: #666;
    font-style: italic;
    background-color: #f8f9fa;
    border-radius: 8px;
    margin: 0;
  }

  .chart-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .chart-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  .chart-card h3 {
    margin: 0 0 1.5rem 0;
    color: #2c3e50;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }

  .dashboard-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    animation: fadeIn 0.5s ease-out;
  }

  .dashboard-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  .dashboard-card h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .dashboard-card p {
    margin: 0;
    font-size: 1.8rem;
    font-weight: bold;
  }

  .custom-tooltip {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border: 1px solid #ddd;
  }

  .custom-tooltip p {
    margin: 0;
    color: #2c3e50;
    font-size: 0.9rem;
  }

  .custom-tooltip p:first-child {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Adiciona os estilos ao documento
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);