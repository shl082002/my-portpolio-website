import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="main-container w-full h-screen">
        <Navbar />
        <div className="w-full h-[90vh] overflow-y-scroll scrollbar-hide">
          <div id="home" className="snap-start">
            <Home />
          </div>
          <div id="about" className="snap-start">
            <About />
          </div>
          <div id="work" className="snap-start">
            <Work />
          </div>
          {/* <div id="contact" className="snap-start">
            <Contact />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
