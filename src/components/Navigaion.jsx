import { Button, Container, Modal, Navbar } from "react-bootstrap";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button> Cart</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;