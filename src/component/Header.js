import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerDiv">
      <Link to="/">
        <h1>Second Todo</h1>
      </Link>
      <nav className="navDiv">
        <Link to="/todo">
          <li>TodoList</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
