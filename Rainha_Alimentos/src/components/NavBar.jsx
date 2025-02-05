import { NavLink } from "react-router-dom";
import styler from "./NavBar.module.css"
export default function NavBar() {
  return (
    <div className= { styler.container}>
      <div className="logo-nav">
        <h1>Logo</h1>
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
