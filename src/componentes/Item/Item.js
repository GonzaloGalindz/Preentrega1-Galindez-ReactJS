import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, price }) => {
  return (
    <div className="cards">
      <h2>{name}</h2>
      <img src={img} alt={name} className="img-item" />
      <h3>Precio: ${price}</h3>
      <Link to={`/item/${id}`} className="detalles">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
