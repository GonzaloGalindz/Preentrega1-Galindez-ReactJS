import { createContext, useState } from "react";
import { useNotification } from "../Notification/NotificationService";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const { setNotification } = useNotification();

  const addItem = (indumentaryToAdd) => {
    if (!isInCart(indumentaryToAdd.id)) {
      setCart((prev) => [...prev, indumentaryToAdd]);
    } else {
      const updatedCart = cart.map((ind) => {
        if (ind.id === indumentaryToAdd.id) {
          let newQuantity = ind.quantity + indumentaryToAdd.quantity;
          if (newQuantity > ind.stock) {
            newQuantity = ind.stock;
            setNotification(
              "success",
              `El stock disponible es de ${ind.stock}`,
              1
            );
          } else {
            setNotification(
              "success",
              `Se agrego correctamente ${indumentaryToAdd.quantity} ${indumentaryToAdd.name}`,
              1
            );
          }

          return { ...ind, quantity: newQuantity };
        } else {
          return ind;
        }
      });

      setCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    const cartUpdated = cart.filter((ind) => ind.id !== id);
    setCart(cartUpdated);
  };

  const isInCart = (id) => {
    return cart.some((ind) => ind.id === id);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cart.forEach((ind) => {
      totalQuantity += ind.quantity;
    });
    return totalQuantity;
  };

  const totalQuantity = getTotalQuantity();

  const getTotal = () => {
    let total = 0;
    cart.forEach((ind) => {
      total += ind.quantity * ind.price;
    });
    return total;
  };

  const total = getTotal();

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, totalQuantity, total, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
