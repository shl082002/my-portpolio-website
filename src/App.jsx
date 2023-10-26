import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-screen h-screen">
        <Navbar />
        <Body />
      </div>
    </>
  );
}

export default App;
