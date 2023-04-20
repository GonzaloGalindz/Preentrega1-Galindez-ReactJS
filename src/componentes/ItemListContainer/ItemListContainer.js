import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState, memo } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useParams } from "react-router-dom";

const ItemListMemo = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
  const [indumentary, setIndumentary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("un titulo");

  const { categoryId } = useParams();

  useEffect(() => {
    const ProductsRef = categoryId
      ? query(collection(db, "Products"), where("Category", "==", categoryId))
      : collection(db, "Products");

    getDocs(ProductsRef)
      .then((snapshot) => {
        const productsAdapted = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setIndumentary(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  useEffect(() => {
    setTimeout(() => {
      setTitle("otro titulo");
    }, 1500);
  }, []);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Vuelva a cargar la pagina</h1>;
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
