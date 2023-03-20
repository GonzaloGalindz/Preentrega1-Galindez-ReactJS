import { useEffect, useState } from "react";
import { getIndumentaryById } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [indumentary, setIndumentary] = useState();
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getIndumentaryById(itemId)
      .then((indumentary) => {
        setIndumentary(indumentary);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      <h1 className="tituloIDC">Detalles de la indumentaria</h1>
      <ItemDetail {...indumentary} />
    </div>
  );
};

export default ItemDetailContainer;
