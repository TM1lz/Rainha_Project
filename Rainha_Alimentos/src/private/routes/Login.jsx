import logo from '../../assets/logo.png';  // Importando a imagem do logo
import styles from './Login.module.css';  // Importando o CSS module
import { useState } from 'react';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className={styles.loginContainer}>  {/* Usando a classe do CSS Module */}


      {/* Formulário de login */}
      <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div className={styles.loginImage}>
        <img src={logo} alt="Logo" />
      </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
