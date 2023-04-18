import { useState } from "react";
import "./ItemCounter.css";

const ItemCounter = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="div-counter">
      <div className="div-count">
        <h2 className="counter">{quantity}</h2>
        <button className="button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => {
            setQuantity(initial);
            onAdd(quantity);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCounter;
