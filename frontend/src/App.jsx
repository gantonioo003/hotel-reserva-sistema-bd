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
import Sidebar from "./components/Sidebar";
import "./App.css";

// 👇 Toastify import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <DashboardPage />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/pessoas"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <PessoasPage />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/hospedes"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <HospedesPage />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/funcionarios"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <FuncionariosPage />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/quartos"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <QuartosPage />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/reservas"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <ReservasPage />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/pagamentos"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <PagamentosPage />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/manutencoes"
            element={
              <PrivateRoute>
                <>
                  <Sidebar />
                  <ManutencaoPage />
                </>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>

      {/* 👇 Container global para exibir os toasts */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
