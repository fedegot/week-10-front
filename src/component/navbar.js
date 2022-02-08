import React from "react";
import "./component.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <a href="#event">
        <div className="ev">EVENT</div>
      </a>
      <a href="#location">
        <div className="loc">LOCATION</div>
      </a>
      <a href="#date">
        <div className="da">DATE</div>
      </a>
    </div>
  );
};

export default NavBar;
