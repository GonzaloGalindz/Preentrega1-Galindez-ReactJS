import LogoNavBar from "./assets/LogoNavBar.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const NavBar = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const CategoriesRef = query(collection(db, "Categories"));

    getDocs(CategoriesRef)
      .then((snapshot) => {
        const categoriesAdapted = snapshot.docs.map((doc) => {
          const data = doc.data();

          return { id: doc.id, ...data };
        });

        setCategories(categoriesAdapted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <nav className="NavBar">
      <img src={LogoNavBar} alt="Logo de la marca" className="LogoMarca" />
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
