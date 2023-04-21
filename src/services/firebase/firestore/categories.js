import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getCategories = () => {
  const CategoriesRef = query(collection(db, "Categories"));

  getDocs(CategoriesRef)
    .then((snapshot) => {
      const categoriesAdapted = snapshot.docs.map((doc) => {
        const data = doc.data();

        return { id: doc.id, ...data };
      });

      return categoriesAdapted;
    })
    .catch((error) => {
      return error;
    });
};
