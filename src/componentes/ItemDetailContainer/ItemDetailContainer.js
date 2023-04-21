import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getProductsById } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const getProductsWithCategory = () => getProductsById(itemId);

  const {
    data: indumentary,
    error,
    loading,
  } = useAsync(getProductsWithCategory, [itemId]);

  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  if (error) {
    return <h1 className="loading">Vuelva a cargar la pagina</h1>;
  }

  return (
    <div>
      <h1 className="tituloIDC">Detalles de la indumentaria</h1>
      <ItemDetail {...indumentary} />
    </div>
  );
};

export default ItemDetailContainer;
