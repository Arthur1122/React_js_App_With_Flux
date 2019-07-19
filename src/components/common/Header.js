import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyles = { color: "orange" };

  return (
    <nav>
      <NavLink activeStyle={activeStyles} exact to="/">
        Home Page
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyles} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyles} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
