import { NavLink } from "react-router-dom";

//Estilo Css

import styler from "./NavBar.module.css"

//Imagem da logo

import logo from "../assets/logo.png"
export default function NavBar() {
  return (
    <div className= { styler.container}>
      <div className={styler.logo_nav}>
        <img className={styler.logo} src={logo}/>
      </div>
      <div className={styler.nav_menu}>
        <ul>
            <li>a</li>
            <li>b</li>
            <li>v</li>
            <li>d</li>
            <li>e</li>
        </ul>

      </div>
    </div>
  );
}
