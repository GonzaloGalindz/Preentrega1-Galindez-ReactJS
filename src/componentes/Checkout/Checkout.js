import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import {
  documentId,
  getDocs,
  query,
  collection,
  where,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useNotification } from "../../Notification/NotificationService";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import Form from "../Form/Form";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useContext(CartContext);

  const { setNotification } = useNotification();

  const navigate = useNavigate();

  const handleConfirm = async (userData) => {
    try {
      setLoading(true);
      const objOrder = {
        buyer: {},
        items: cart,
        total: total,
      };

      const ids = cart.map((ind) => ind.id);

      const indumentaryRef = query(
        collection(db, "Products"),
        where(documentId(), "in", ids)
      );

      const indumentariesAddedFromFirestore = await getDocs(indumentaryRef);

      const { docs } = indumentariesAddedFromFirestore;

      const batch = writeBatch(db);
      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const StockDb = dataDoc.Stock;

        const indumentaryAddedToCart = cart.find((prod) => prod.id === doc.id);
        const indQuantity = indumentaryAddedToCart?.quantity;

        if (StockDb >= indQuantity) {
          batch.update(doc.ref, { Stock: StockDb - indQuantity });
        } else {
          outOfStock.push({ id: doc, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderRef = collection(db, "Orders");

        const orderAdded = await addDoc(orderRef, objOrder);
        clearCart();
        setOrderId(orderAdded.id);

        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        setNotification(
          "error",
          "Hay productos que no tienen stock disponible"
        );
      }
    } catch (error) {
      setNotification("error", "Hubo un error generando la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h1 className="h2-check">
        Por favor sea paciente, estamos generando su orden
      </h1>
    );
  }

  return (
    <div>
      <h1 className="h1-check">Checkout</h1>

      <Form onConfirm={handleConfirm} />
      {orderId ? (
        <div>
          <h2 className="h2-checkout">El id de su orden es: {orderId}</h2>
          <h4 className="h4-checkout">
            Gracias por elegir ⭐Stars Indumentaria⭐
          </h4>
        </div>
      ) : (
        <div>
          <h2 className="h2-checkout">
            Para generar su orden, presione el boton a continuación:
          </h2>
          <button className="button-checkout" onClick={handleConfirm}>
            Generar orden
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
