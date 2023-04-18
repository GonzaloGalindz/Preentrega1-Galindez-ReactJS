import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import {
  Notification,
  NotificationProvider,
} from "./Notification/NotificationService";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";

const App = () => {
  return (
    <div className="App">
      <NotificationProvider>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer greeting={"Todos nuestros productos"} />
                }
              />
              <Route
                path="/category/:categoryId"
                element={
                  <ItemListContainer
                    greeting={"Productos filtrados por categoria"}
                  />
                }
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
};

export default App;
