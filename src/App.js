import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./sass/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
