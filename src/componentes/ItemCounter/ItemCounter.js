import { useState } from "react";
import "./ItemCounter.css";

const ItemCounter = ({ Stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < Stock) {
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
        <button className="button" onClick={decrement}>
          -
        </button>
        <h2>{quantity}</h2>
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
