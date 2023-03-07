import LogoCart from "./assets/LogoCart.png";
import "./CardWidget.css";

const CardWidget = () => {
  return (
    <div>
      <img src={LogoCart} alt="Logo del Carrito" className="LogoCart" />
    </div>
  );
};

export default CardWidget;
