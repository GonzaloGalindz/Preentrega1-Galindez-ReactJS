import LogoNavBar from "./assets/LogoNavBar.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/firebase/firestore/categories";
import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const NavBar = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    // const CategoriesRef = query(collection(db, "Categories"));

    // getDocs(CategoriesRef)
    //   .then((snapshot) => {
    //     const categoriesAdapted = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       return { id: doc.id, ...data };
    //     });

    //     setCategories(categoriesAdapted);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getCategories().then((res) => setCategories(res));
  }, []);

  return (
    <nav className="NavBar">
      <a href="/">
        <img src={LogoNavBar} alt="Logo de la marca" className="LogoMarca" />
      </a>
      <div className="Categories">
        {Categories.map((Cat) => {
          return (
            <NavLink
              key={Cat.id}
              to={`/category/${Cat.slug}`}
              className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
            >
              {Cat.label}
            </NavLink>
          );
        })}
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
