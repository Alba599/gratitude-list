import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      {/* <a className="navbar-brand" href="Gratitude.html">
      <a className="navbar-brand" href="https://alba599.github.io/">
      <a className="navbar-brand" href="../Gratitude.html"> */}
      <a className="navbar-brand" href="../index.html">
        <span
          className="badge badge-pill badge-secondary"
          style={{ margin: "20px" }}
        >
          Home
        </span>
      </a>
      <a href="">
        <span
          className="badge badge-pill badge-secondary"
          style={{ margin: "20px" }}
        >
          My List
        </span>
      </a>
      <a href="#">
        <span
          className="badge badge-pill badge-secondary"
          style={{ margin: "20px" }}
        >
          Contact us
        </span>
      </a>
    </nav>
  );
};

export default NavBar;