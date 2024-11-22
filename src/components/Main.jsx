import React from "react";
import Menu from "./Menu";
import ReserveTableBanner from "./ReserveTableBanner";
import Reviews from "./Reviews";

export default function Main() {
  return (
    <main className="main-container">
      <ReserveTableBanner />
      <Menu />
      <Reviews />
    </main>
  );
}
