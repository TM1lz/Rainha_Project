import { useState } from "react";
import { NavLink } from "react-router-dom";
import styler from "./NavBar.module.css";
import logoRainha from "../assets/logoRainha.png";



export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styler.container}>
      <div className={styler.logo_nav}>
        <NavLink to="/login"><img className={styler.logo} src={logoRainha} alt="Logo" /></NavLink>
      </div>
      
      {/* Ícone Hambúrguer */}
      <div className={styler.hamburger} onClick={toggleMenu}>
        <div className={styler.line}></div>
        <div className={styler.line}></div>
        <div className={styler.line}></div>
      </div>
      
      <div className={`${styler.nav_menu} ${isMenuOpen ? styler.open : ''}`}>
        <ul>
          <li>
            <NavLink onClick={()=>{setIsMenuOpen(false)}} to="/Rainha_Project" className={({ isActive }) => (isActive ? styler.active : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink onClick={()=>{setIsMenuOpen(false)}} to="/company" className={({ isActive }) => (isActive ? styler.active : '')}>Empresa</NavLink>
          </li>
          <li>
            <NavLink onClick={()=>{setIsMenuOpen(false)}} to="/product" className={({ isActive }) => (isActive ? styler.active : '')}>Produtos</NavLink>
          </li>
          <li>
            <NavLink onClick={()=>{setIsMenuOpen(false)}}  to="/conect" className={({ isActive }) => (isActive ? styler.active : '')}>Contato</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
