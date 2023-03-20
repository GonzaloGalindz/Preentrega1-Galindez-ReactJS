import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting={"Toda nuestra indumentaria deportiva"}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                greeting={"Indumentaria filtrada por categoria"}
              />
            }
          />
          <Route
            path="/category/:categoryId/subcategory/:subcategoryId"
            element={
              <ItemListContainer
                greeting={"Indumentaria filtrada por categoria"}
              />
            }
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
