import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-x-10 justify-center mt-10">
      <NavLink
        style={(e) => ({ fontWeight: e.isActive ? "900" : "400" })}
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={(e) => ({ fontWeight: e.isActive ? "900" : "400" })}
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        style={(e) => ({ fontWeight: e.isActive ? "900" : "400" })}
        className={(e) => (e.isActive ? "text-red-400" : "")}
        to="/users"
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Nav;
