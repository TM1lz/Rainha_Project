import { NavLink } from "react-router-dom";
import styler from "./NavBar.module.css";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <div className={styler.container}>
      <div className={styler.logo_nav}>
        <img className={styler.logo} src={logo} alt="Logo" />
      </div>
      <div className={styler.nav_menu}>
        <ul>
          <li>
            <NavLink 
              to='/' 
              className={({ isActive }) => (isActive ? styler.active : 'o')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/company' 
              className={({ isActive }) => (isActive ? styler.active : 'o')}
            >
              Empresa
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/product' 
              className={({ isActive }) => (isActive ? styler.active : 'o')}
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/conect' 
              className={({ isActive }) => (isActive ? styler.active : 'o')}
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
