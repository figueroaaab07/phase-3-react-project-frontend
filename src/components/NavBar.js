import React from "react";
import { NavLink } from "react-router-dom";

let style = ({ isActive }) => ({
  margin: "0.5rem 0.5rem",
  fontWeight: isActive ? 'bold' : 'normal',
});

function NavBar() {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <NavLink
        style={style}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={style}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={style}
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        style={style}
        to="/apods"
      >
        Apods
      </NavLink>
      <NavLink
        style={style}
        to="/apod"
      >
        Apod
      </NavLink>

    </nav>
  );
}

export default NavBar;