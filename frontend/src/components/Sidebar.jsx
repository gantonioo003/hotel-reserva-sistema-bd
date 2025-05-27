import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars, FaHome, FaUsers, FaBed, FaCalendarAlt, FaMoneyBillWave, FaTools, FaSignOutAlt, FaHotel } from "react-icons/fa";

function Sidebar({ isOpen, onToggle }) {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <button className="hamburger-btn" onClick={onToggle}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-container">
          <FaHotel className="hotel-icon" />
          <div className="logo-text">
            <h1>Hotel</h1>
            <span>Sistema de Gestão</span>
          </div>
        </div>

        <nav>
          <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
            <FaHome /> Dashboard
          </Link>
          <Link to="/pessoas" className={location.pathname === "/pessoas" ? "active" : ""}>
            <FaUsers /> Pessoas
          </Link>
          <Link to="/hospedes" className={location.pathname === "/hospedes" ? "active" : ""}>
            <FaUsers /> Hóspedes
          </Link>
          <Link to="/funcionarios" className={location.pathname === "/funcionarios" ? "active" : ""}>
            <FaUsers /> Funcionários
          </Link>
          <Link to="/quartos" className={location.pathname === "/quartos" ? "active" : ""}>
            <FaBed /> Quartos
          </Link>
          <Link to="/reservas" className={location.pathname === "/reservas" ? "active" : ""}>
            <FaCalendarAlt /> Reservas
          </Link>
          <Link to="/pagamentos" className={location.pathname === "/pagamentos" ? "active" : ""}>
            <FaMoneyBillWave /> Pagamentos
          </Link>
          <Link to="/manutencoes" className={location.pathname === "/manutencoes" ? "active" : ""}>
            <FaTools /> Manutenções
          </Link>
        </nav>

        <button onClick={handleLogout} className="logout-btn">
          <FaSignOutAlt /> Sair
        </button>
      </aside>

      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 250px;
          background: #2c3e50;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease-in-out;
          z-index: 1000;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hotel-icon {
          font-size: 2.5rem;
          color: #3498db;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-text h1 {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.2;
        }

        .logo-text span {
          color: #95a5a6;
          font-size: 0.8rem;
        }

        .hamburger-btn {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 1001;
          background: #2c3e50;
          color: white;
          border: none;
          padding: 0.5rem;
          border-radius: 4px;
          cursor: pointer;
          display: none;
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          .sidebar {
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .hamburger-btn {
            display: block;
          }
        }

        nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        nav a {
          color: #ecf0f1;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.2s;
        }

        nav a:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        nav a.active {
          background: #3498db;
          color: white;
        }

        .logout-btn {
          background: #e74c3c;
          color: white;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          transition: background 0.2s;
          margin-top: 1rem;
        }

        .logout-btn:hover {
          background: #c0392b;
        }
      `}</style>
    </>
  );
}

export default Sidebar;
