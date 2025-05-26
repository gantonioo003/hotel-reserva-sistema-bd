import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("logado");
    navigate("/");
  }

  return (
    <nav style={{
      backgroundColor: "#2c3e50",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      <div style={{ flex: 1 }}>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/pessoas" style={linkStyle}>Pessoas</Link>
        <Link to="/hospedes" style={linkStyle}>Hóspedes</Link>
        <Link to="/funcionarios" style={linkStyle}>Funcionários</Link>
        <Link to="/quartos" style={linkStyle}>Quartos</Link>
        <Link to="/reservas" style={linkStyle}>Reservas</Link>
        <Link to="/pagamentos" style={linkStyle}>Pagamentos</Link>
        <Link to="/manutencoes" style={linkStyle}>Manutenções</Link>
      </div>
      <button onClick={handleLogout} style={logoutButtonStyle}>Sair</button>
    </nav>
  );
}

const linkStyle = {
  color: "#ecf0f1",
  marginRight: "1rem",
  textDecoration: "none",
  fontWeight: "bold"
};

const logoutButtonStyle = {
  background: "#e74c3c",
  color: "white",
  border: "none",
  padding: "0.4rem 0.8rem",
  borderRadius: "4px",
  cursor: "pointer"
};

export default Navbar;
