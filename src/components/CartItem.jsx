import React, { useContext } from "react";
import { getProductId } from "../data.js";
import { CartContext } from "../context/cartContext";
import { Button } from "react-bootstrap";

const CartItem = ({ item }) => {
  const cart = useContext(CartContext);
  const productData = getProductId(item.id); //named incorrectly
  return (
    <div>
      <p>Name: {productData.name}</p>
      <p>quantity: {item.quantity}</p>
      <p>Price: {(item.quantity * productData.price).toFixed(2)} Rs</p>
      <Button sm onClick={() => cart.deleteFromCart(item.id)}>
        Remove
      </Button>
      <hr />
    </div>
  );
};

export default CartItem;
