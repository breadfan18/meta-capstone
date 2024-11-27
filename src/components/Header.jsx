import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import useWindhowWidth from "../windowWidth";
import Burger from "./common/Burger";
import NavMobile from "./common/NavMobile";

export default function Header() {
  const { isMobile, isTablet } = useWindhowWidth();
  const [open, setOpen] = useState(false);

  let navRef = useRef();

  useEffect(() => {
    const navMenuHandler = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", navMenuHandler);

    return () => document.removeEventListener("mousedown", navMenuHandler);
  });

  const headerClassName = isTablet || isMobile ? "header-mobile" : "header";

  return !isMobile ? (
    <header className={headerClassName}>
      <img
        src="https://i.imgur.com/sExfMN4.png"
        alt=""
        style={{ width: "25rem" }}
      />
      <Nav />
    </header>
  ) : (
    <header className="smallNavContainer">
      <div id="smallNavTopHeader">
        <img src="https://i.imgur.com/KHrngBF.png" alt="" />
        <Burger open={open} setOpen={setOpen} />
      </div>
      {open && <NavMobile navRef={navRef} setOpen={setOpen} />}
    </header>
  );
}
