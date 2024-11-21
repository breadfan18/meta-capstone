import React from "react";
import Nav from "./Nav";
import useWindhowWidth from "../windowWidth";

export default function Header() {
  const { isMobile, isTablet } = useWindhowWidth();

  const headerClassName = isTablet || isMobile ? "header-mobile" : "header";

  return (
    <div className={headerClassName}>
      <img
        src="https://i.imgur.com/sExfMN4.png"
        alt=""
        style={{ width: "25rem" }}
      />
      <Nav />
    </div>
  );
}
