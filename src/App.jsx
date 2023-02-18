import { useState } from "react";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigaion.jsx";
import Store from "./pages/Store.jsx";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";

import CartProvider from "./context/cartContext.jsx";
//sample
function App() {
  return (
    <CartProvider>
      <div className="App">
        <Container>
          <Navigation />
          <Browser>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </Browser>
        </Container>
      </div>
    </CartProvider>
  );
}

export default App;
