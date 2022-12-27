import { Button, Modal, Navbar } from "react-bootstrap";
import React, { useState, useContext } from "react";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const HandleClose = () => {
    setShow(false);
  };

  const HandleShow = () => setShow(true);

  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">ALP Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={HandleShow}> Cart</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={HandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>This is the body</h3>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navigation;
