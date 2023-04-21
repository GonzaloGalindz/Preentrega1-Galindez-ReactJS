import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getCategories = async () => {
  const CategoriesRef = query(collection(db, "Categories"));

  const res = await getDocs(CategoriesRef);
  const categoriesAdapted = res.docs.map((doc) => {
    const data = doc.data();
    return { id: doc.id, ...data };
  });
  return categoriesAdapted;
};
