import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Carrossel from './components/Carrossel';
import Home from './pages/home/Home';
function App() {
  return (
    <Router> {/* Envolva tudo no Router */}
      <div className="container-app">
        <NavBar />       
        <Routes> {/* Defina as rotas dentro de Routes */}
          <Route path="/" element = {<Home/>} />
          <Route path="/product" /> {}
          <Route path="/about"/> {/* Página Sobre (se existir) */}
          {/* Defina outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

