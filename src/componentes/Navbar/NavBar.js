import LogoNavBar from "./assets/LogoNavBar.svg";
import "./NavBar.css";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src={LogoNavBar} alt="Logo de la marca" className="LogoMarca" />
      <section>
        <button className="btn btn-dark">Remeras</button>
        <button className="btn btn-dark">Pantalones</button>
        <button className="btn btn-dark">Hoodies</button>
        <button className="btn btn-dark">Zapatillas</button>
        <button className="btn btn-dark">Accesorios</button>
      </section>
      <CardWidget />
    </nav>
  );
};

export default NavBar;
