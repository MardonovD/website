import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Blank from "./components/Blank";
import Portfolio from "./components/Portfolio";
import "./sass/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Showcase />
      <Blank />
      <Portfolio />
    </div>
  );
}

export default App;
