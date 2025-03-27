import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png';  // Importando a imagem do logo
import styles from './Login.module.css';  // Importando o CSS module

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login. Verifique suas credenciais.');
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        throw new Error(data.error || 'Erro desconhecido.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      navigate('/adm');
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
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default Login;
