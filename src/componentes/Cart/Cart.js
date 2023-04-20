import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1 className="title-cart">Cart</h1>
      <h3 className="subtitle-cart">Productos agregados al carrito:</h3>
      <div>
        {cart.map((prod) => {
          return (
            <li className="Text-cart" key={prod.id}>
              {prod.quantity}x {prod.Name} | ${prod.Price}
            </li>
          );
        })}
      </div>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
