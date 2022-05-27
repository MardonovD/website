import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Showcase from "./components/Showcase";
import "./sass/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Showcase />
    </div>
  );
}

export default App;
