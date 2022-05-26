import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__content-h1">Xush Kelibsiz</h1>
        <div className="header__content-links">
          <a href="/home">Home</a>
          <span className="header__content-span"></span>
          <a href="/about">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
