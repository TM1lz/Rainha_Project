import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Footer from './components/Footer';
import About from './pages/about/About';


function App() {
  return (
    <>
    <Router> {/* Envolva tudo no Router */}
      <div className="container-app">
        <NavBar />       
        <Routes> 
          <Route path="/" element = {<Home/>} />
          <Route path="/company" element= {<About/>} />
          <Route path="/about"/> 
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;

