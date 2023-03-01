import { Button, Modal, Navbar } from "react-bootstrap";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "../components/CartItem.jsx";

const Navigation = () => {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);

  const HandleClose = () => {
    setShow(false);
  };

  const HandleShow = () => setShow(true);

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">ALP Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={HandleShow}> Cart {productCount}</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={HandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0 ? (
            <>
              <p>Items:</p>
              {cart.items.map((item, key) => (
                //<h1>{item.id}</h1>
                <CartItem key={key} item={item}></CartItem>
              ))}
            </>
          ) : (
            <p>So Empty, much wow!</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navigation;
