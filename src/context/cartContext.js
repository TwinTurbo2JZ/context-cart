import { useState, useContext, createContext } from "react";
import { getProductId } from "../data.js";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const productQuantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (productQuantity === undefined) {
      return 0;
    }

    return productQuantity;
  }

  function addOneToCart(id) {
    const product = setCartProducts();
  }

  const contextvalue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextvalue}>{children}</CartContext.Provider>
  );
}
