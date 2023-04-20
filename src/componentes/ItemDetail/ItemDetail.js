import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, Name, Price, Category, Img, Stock, Description }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      Name,
      Price,
      quantity,
      Stock,
    };
    setQuantity(quantity);
    addItem(productToAdd);
  };

  return (
    <div className="item-detail">
      <h2 className="nombre">{Name}</h2>
      <img src={Img} alt={Name} className="imagen" />
      <h3>Precio: ${Price}</h3>
      <p className="descripcion">Descripción: {Description}</p>
      <div className="ItemDetail-div">
        {/* {
                    quantity > 0 ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : ( */}
        {Stock > 0 ? (
          <ItemCounter onAdd={handleOnAdd} Stock={Stock} />
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
