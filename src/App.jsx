import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigaion.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        <Navigation />
        <h1>Application</h1>
      </Container>
    </div>
  );
}

export default App;
