import { useState } from "react";
import { NavLink } from "react-router-dom";
import styler from "./NavBar.module.css";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styler.container}>
      <div className={styler.logo_nav}>
        <img className={styler.logo} src={logo} alt="Logo" />
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
            <NavLink to="/" className={({ isActive }) => (isActive ? styler.active : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/company" className={({ isActive }) => (isActive ? styler.active : '')}>Empresa</NavLink>
          </li>
          <li>
            <NavLink to="/product" className={({ isActive }) => (isActive ? styler.active : '')}>Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/conect" className={({ isActive }) => (isActive ? styler.active : '')}>Contato</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
