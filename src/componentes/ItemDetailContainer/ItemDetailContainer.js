import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [indumentary, setIndumentary] = useState();
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    const ProductRef = doc(db, "Products", itemId);

    getDoc(ProductRef)
      .then((snapshot) => {
        const data = snapshot.data();
        const productAdapted = { id: snapshot.id, ...data };
        setIndumentary(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      <h1 className="tituloIDC">Detalles de la indumentaria</h1>
      <ItemDetail {...indumentary} />
    </div>
  );
};

export default ItemDetailContainer;
