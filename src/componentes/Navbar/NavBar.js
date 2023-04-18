import LogoNavBar from "./assets/LogoNavBar.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const CategoriesRef = query(collection(db, "Categories"), orderBy("order"));

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
      {/* <Link to="/">Ecommerce</Link> */}
      <div className="Categories">
        {categories.map((cat) => {
          return (
            <NavLink
              key={cat.id}
              to={`/category/${cat.slug}`}
              className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
            >
              {cat.label}
            </NavLink>
          );
        })}
      </div>
      <CartWidget />
      {/* {user ? (
        <CartWidget />
      ) : (
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "ActiveLink" : "Link")}
        >
          Login
        </NavLink>
      )} */}
    </nav>
  );
};

export default NavBar;
