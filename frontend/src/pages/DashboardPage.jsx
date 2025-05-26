import { useEffect, useState } from "react";
import {
  getQuartos,
  getHospedes,
  getReservas,
  getPagamentos,
  getManutencoes
} from "../api/fakeApi";

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";

function DashboardPage() {
  const [dados, setDados] = useState({
    quartos: 0,
    quartosDisponiveis: 0,
    hospedes: 0,
    reservas: 0,
    faturamento: 0,
    manutencoes: 0
  });

  useEffect(() => {
    Promise.all([
      getQuartos(),
      getHospedes(),
      getReservas(),
      getPagamentos(),
      getManutencoes()
    ]).then(([q, h, r, p, m]) => {
      const disponiveis = q.filter((q) => q.status === "Disponível").length;
      const manutencaoCount = q.filter((q) => q.status === "Manutenção").length;
      const totalPagamentos = p.reduce((acc, val) => acc + val.valor, 0);
      setDados({
        quartos: q.length,
        quartosDisponiveis: disponiveis,
        hospedes: h.length,
        reservas: r.length,
        faturamento: totalPagamentos,
        manutencoes: manutencaoCount
      });
    });
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Card titulo="Quartos" valor={`${dados.quartos} (${dados.quartosDisponiveis} disponíveis)`} />
        <Card titulo="Hóspedes" valor={dados.hospedes} />
        <Card titulo="Reservas" valor={dados.reservas} />
        <Card titulo="Faturamento" valor={`R$ ${dados.faturamento.toFixed(2)}`} />
        <Card titulo="Manutenções" valor={dados.manutencoes} />
      </div>

      <div style={{ marginTop: "2rem", background: "white", padding: "1rem", borderRadius: "8px" }}>
        <h3>Status dos Quartos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={[
                { name: "Disponível", value: dados.quartosDisponiveis },
                { name: "Ocupado", value: dados.quartos - dados.quartosDisponiveis - dados.manutencoes },
                { name: "Manutenção", value: dados.manutencoes }
              ]}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              <Cell fill="#2ecc71" /> {/* Disponível */}
              <Cell fill="#e74c3c" /> {/* Ocupado */}
              <Cell fill="#f1c40f" /> {/* Manutenção */}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Card({ titulo, valor }) {
  return (
    <div style={{
      background: "white",
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      flex: "1 1 200px"
    }}>
      <h3 style={{ margin: 0, color: "#2c3e50" }}>{titulo}</h3>
      <p style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}>{valor}</p>
    </div>
  );
}

export default DashboardPage;
