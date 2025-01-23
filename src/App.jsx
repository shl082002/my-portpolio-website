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
      <body className="w-full h-screen">
        <Navbar />
        <main className="w-full h-[90vh] overflow-y-scroll scrollbar-hide">
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </main>
      </body>
    </>
  );
}

export default App;
