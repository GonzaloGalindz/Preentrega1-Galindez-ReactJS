import LogoCart from "./assets/LogoCart.png";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity, total } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="Fondo" onClick={() => navigate("/cart")}>
      <img src={LogoCart} alt="Logo del carrito" className="LogoCart" />
      {totalQuantity} | Total ${total}
    </div>
  );
};

export default CartWidget;
