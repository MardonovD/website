import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <div className={`navbar ${state ? "whiteBg" : "transparent"}`}>
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__content-left">
            <h2
              className={` ${state ? "heading-scroll" : "navbar__heading-2"}`}
            >
              DosTon
            </h2>
          </div>
          <ul className="navbar__content-right">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Showcases</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
