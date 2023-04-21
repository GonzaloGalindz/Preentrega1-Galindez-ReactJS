import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListMemo = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const getProductsWithCategory = () => getProducts(categoryId);

  const {
    data: indumentary,
    error,
    loading,
  } = useAsync(getProductsWithCategory, [categoryId]);

  if (loading) {
    return <h1 className="loading">Cargando...</h1>;
  }

  if (error) {
    return <h1 className="loading">Vuelva a cargar la pagina</h1>;
  }

  return (
    <div>
      <h1 className="titulo">⭐Stars Indumentaria⭐</h1>
      <h1 className="sub-titulo">{greeting}</h1>
      <ItemListMemo indumentary={indumentary} />
    </div>
  );
};

export default ItemListContainer;
