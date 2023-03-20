import LogoNavBar from "./assets/LogoNavBar.svg";
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src={LogoNavBar} alt="Logo de la marca" className="LogoMarca" />
      <div>
        <NavLink
          to="/category/remeras"
          className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
        >
          Remeras
        </NavLink>
        <NavLink
          to="/category/pantalones"
          className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
        >
          Pantalones
        </NavLink>
        <NavLink
          to="/category/zapatillas"
          className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
        >
          Zapatillas
        </NavLink>
      </div>
      <CardWidget numCart={"0"} />
    </nav>
  );
};

export default NavBar;
