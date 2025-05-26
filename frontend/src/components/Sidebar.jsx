import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaBed, FaUser, FaUsers, FaKey, FaMoneyBill, FaTools, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("logado");
    navigate("/");
  }

  return (
    <div style={sidebarStyle}>
      <h2 style={{ color: "#fff", padding: "1rem" }}>Hotel</h2>
      <NavItem to="/dashboard" icon={<FaHome />} label="Dashboard" />
      <NavItem to="/pessoas" icon={<FaUsers />} label="Pessoas" />
      <NavItem to="/hospedes" icon={<FaUser />} label="Hóspedes" />
      <NavItem to="/funcionarios" icon={<FaKey />} label="Funcionários" />
      <NavItem to="/quartos" icon={<FaBed />} label="Quartos" />
      <NavItem to="/reservas" icon={<FaBed />} label="Reservas" />
      <NavItem to="/pagamentos" icon={<FaMoneyBill />} label="Pagamentos" />
      <NavItem to="/manutencoes" icon={<FaTools />} label="Manutenções" />
      <button onClick={handleLogout} style={logoutStyle}>
        <FaSignOutAlt /> Sair
      </button>
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <Link to={to} style={linkStyle}>
      <span style={{ marginRight: "8px" }}>{icon}</span>
      {label}
    </Link>
  );
}

const sidebarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "220px",
  backgroundColor: "#2c3e50",
  display: "flex",
  flexDirection: "column",
  paddingTop: "1rem",
  boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
  zIndex: 1000
};

const linkStyle = {
  color: "#ecf0f1",
  textDecoration: "none",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold"
};

const logoutStyle = {
  marginTop: "auto",
  margin: "1rem",
  background: "#e74c3c",
  color: "white",
  border: "none",
  padding: "0.6rem",
  borderRadius: "4px",
  cursor: "pointer"
};

export default Sidebar;
