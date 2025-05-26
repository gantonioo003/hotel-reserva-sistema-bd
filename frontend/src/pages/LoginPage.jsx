// src/pages/LoginPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (usuario === "admin" && senha === "123") {
      localStorage.setItem("logado", "true");
      navigate("/pessoas");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }

  return (
    <div>
      <h2>Login do Administrador</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
