/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../images/Logo.svg";
import "./Home.css";
const Home = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />

      {/* menu-area  */}

      <div className="menu">
        <a href="/shop">shop</a>
        <a href="/order">order</a>
        <a href="/inventory">inventory</a>
        <a href="/login">login</a>
      </div>
    </nav>
  );
};

export default Home;
