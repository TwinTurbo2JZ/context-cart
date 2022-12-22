import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigaion.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <h1>gg</h1>
    </div>
  );
}

export default App;
