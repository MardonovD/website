import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Showcase from "./components/Showcase";
import Blank from "./components/Blank";
import "./sass/main.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Showcase />
      <Blank />
    </div>
  );
}

export default App;
