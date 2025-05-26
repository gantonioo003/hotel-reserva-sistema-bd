// src/components/PrivateRoute.jsx

import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const logado = localStorage.getItem("logado") === "true";
  return logado ? children : <Navigate to="/" />;
}

export default PrivateRoute;
