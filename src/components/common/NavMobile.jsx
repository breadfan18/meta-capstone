import React from "react";
import { NavLink } from "react-router-dom";
export default function NavMobile({ navRef, setOpen }) {
  const activeStyleMobile = {
    color: "red",
    backgroundColor: "white",
    borderRadius: "5px",
  };
  return (
    <nav className="navSmallContent" ref={navRef}>
      <NavLink to="/" exact onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={() => setOpen(false)}>
        About
      </NavLink>
      <NavLink to="/menu" onClick={() => setOpen(false)}>
        Menu
      </NavLink>
      <NavLink to="/reservations" onClick={() => setOpen(false)}>
        Reservations
      </NavLink>
      <NavLink to="/login" onClick={() => setOpen(false)}>
        Login
      </NavLink>
    </nav>
  );
}
