import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { createAdaptedProductFromFirestore } from "../../../adapters/createAdaptedProductFromFirestore";
import { getDoc, doc } from "firebase/firestore";

export const getProducts = (categoryId) => {
  const indumentaryRef = categoryId
    ? query(collection(db, "Products"), where("Category", "==", categoryId))
    : collection(db, "Products");

  return getDocs(indumentaryRef)
    .then((snapshot) => {
      const indumentariesAdapted = snapshot.docs.map((doc) => {
        return createAdaptedProductFromFirestore(doc);
      });

      return indumentariesAdapted;
    })
    .catch((error) => {
      return error;
    });
};

export const getProductsById = (itemId) => {
  const ProductRef = doc(db, "Products", itemId);

  return getDoc(ProductRef)
    .then((snapshot) => {
      const data = snapshot.data();
      const productAdapted = { id: snapshot.id, ...data };
      return productAdapted;
    })
    .catch((error) => {
      return error;
    });
};
