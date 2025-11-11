import React from "react";
import logo from "./../assets/logo.png";
import "./navbar.css";
const NavBar = () => {
  return (
    <>
      <div className="containerNav">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" width="100%" heigh="auto" />
          </div>
          <ul>
            <li className="active">Home</li>
            <li>Service</li>
            <li>Teams</li>
            <li>About</li>
            <li>
              <button className="btn">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
