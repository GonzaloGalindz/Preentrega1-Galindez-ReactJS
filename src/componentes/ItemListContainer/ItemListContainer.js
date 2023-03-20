import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getIndumentary, getIndumentaryByCategory } from "../../AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [indumentaryState, setIndumentaryState] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunction = categoryId
      ? getIndumentaryByCategory
      : getIndumentary;

    asyncFunction(categoryId)
      .then((clothing) => {
        setIndumentaryState(clothing);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (indumentaryState && indumentaryState.length === 0) {
    return <h1>No hay productos</h1>;
  }

  return (
    <div>
      <h1 className="titulo">⭐Stars Indumentaria⭐</h1>
      <h1 className="sub-titulo">{greeting}</h1>
      <ItemList clothing={indumentaryState} />
    </div>
  );
};

export default ItemListContainer;
