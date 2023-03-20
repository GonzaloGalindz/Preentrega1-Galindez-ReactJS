import ItemCounter from "../ItemCounter/ItemCounter";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, price, stock, img, description }) => {
  const handleOnAdd = (quantity) => {
    const objIndumentary = {
      id,
      name,
      price,
      quantity,
    };
    console.log(objIndumentary);
  };

  return (
    <div className="item-detail">
      <h2 className="nombre">{name}</h2>
      <img src={img} alt={name} className="imagen" />
      <h3>Stock: {stock}</h3>
      <h3>Precio: ${price}</h3>
      <p className="descripcion">Descripción: {description}</p>
      <ItemCounter onAdd={handleOnAdd} />
    </div>
  );
};

export default ItemDetail;
