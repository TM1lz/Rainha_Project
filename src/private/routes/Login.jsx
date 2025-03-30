import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

import logo from "../../assets/logoRainha.png"; // Importando a imagem do logo
import styles from "./Login.module.css"; // Importando o CSS module

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://back-end-rainha-alimentos.vercel.app/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao realizar login.");
      }

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("email", data.email);
      console.log("Login bem-sucedido:", data.token);
      
      redirect("/adm"); // Redireciona para a página de administração
      navigate("/adm"); // Redireciona para a página de administração
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.loginImage}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Usuário</label>
          <input
            type="text"
            id="email"
            placeholder="Digite seu usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
