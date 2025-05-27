import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PessoasPage from "./pages/PessoasPage";
import HospedesPage from "./pages/HospedesPage";
import FuncionariosPage from "./pages/FuncionariosPage";
import QuartosPage from "./pages/QuartosPage";
import ReservasPage from "./pages/ReservasPage";
import PagamentosPage from "./pages/PagamentosPage";
import ManutencaoPage from "./pages/ManutencaoPage";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/pessoas" element={<PrivateRoute><PessoasPage /></PrivateRoute>} />
          <Route path="/hospedes" element={<PrivateRoute><HospedesPage /></PrivateRoute>} />
          <Route path="/funcionarios" element={<PrivateRoute><FuncionariosPage /></PrivateRoute>} />
          <Route path="/quartos" element={<PrivateRoute><QuartosPage /></PrivateRoute>} />
          <Route path="/reservas" element={<PrivateRoute><ReservasPage /></PrivateRoute>} />
          <Route path="/pagamentos" element={<PrivateRoute><PagamentosPage /></PrivateRoute>} />
          <Route path="/manutencoes" element={<PrivateRoute><ManutencaoPage /></PrivateRoute>} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
