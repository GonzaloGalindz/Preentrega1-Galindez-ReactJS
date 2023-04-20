import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, Name, Img, Price }) => {
  return (
    <div className="cards">
      <h2>{Name}</h2>
      <img src={Img} alt={Name} className="img-item" />
      <h3>Precio: ${Price}</h3>
      <Link to={`/item/${id}`} className="detalles">
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
