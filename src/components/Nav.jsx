import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/reservations">Reservations</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
