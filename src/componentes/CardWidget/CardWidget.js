import LogoCart from "./assets/LogoCart.png";
import "./CardWidget.css";

const CardWidget = ({ numCart }) => {
  return (
    <div className="Fondo">
      <img src={LogoCart} alt="Logo del Carrito" className="LogoCart" />
      <b>{numCart}</b>
    </div>
  );
};

export default CardWidget;
