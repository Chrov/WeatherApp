import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="navbar-brand">Weather App</span>
      </Link>
      <Link to="/about">
        <span className="abt">About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
