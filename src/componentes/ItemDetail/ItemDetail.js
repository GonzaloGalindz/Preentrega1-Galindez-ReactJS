import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      name,
      price,
      quantity,
      stock,
    };
    setQuantity(quantity);
    addItem(productToAdd);
  };

  return (
    <div className="item-detail">
      <h2 className="nombre">{name}</h2>
      <img src={img} alt={name} className="imagen" />
      <h3>Stock: {stock}</h3>
      <h3>Precio: ${price}</h3>
      <p className="descripcion">Descripción: {description}</p>
      <div className="ItemDetail-div">
        {/* {
                    quantity > 0 ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : ( */}
        {stock > 0 ? (
          <ItemCounter onAdd={handleOnAdd} stock={stock} />
        ) : (
          <div>No hay stock disponible</div>
        )}
        {/* )
                } */}
      </div>
    </div>
  );
};

export default ItemDetail;
