import React from "react";
import { getProductId } from "../data.js";
import { Button } from "react-bootstrap";

const CartItem = ({ item }) => {
  return (
    <div>
      <p>{item.id}</p>
      <h2>{item.quantity}</h2>
      <p>{item.price}</p>
      <p>pp</p>
    </div>
  );
};

export default CartItem;
