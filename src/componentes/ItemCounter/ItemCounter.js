import { useState } from "react";
import "./ItemCounter.css";

const ItemCounter = ({ onAdd }) => {
  const [counter, setCounter] = useState(1);

  const decrement = () => setCounter((prev) => prev - 1);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div className="div-counter">
      <h2 className="counter">{counter}</h2>
      <button onClick={decrement}> Decrementar </button>
      <button onClick={() => onAdd(counter)}>Agregar al carrito </button>
      <button onClick={increment}> Incrementar </button>
    </div>
  );
};

export default ItemCounter;
