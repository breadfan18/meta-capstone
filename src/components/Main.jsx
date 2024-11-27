import React from "react";
import Menu from "./Menu";
import ReserveTableBanner from "./ReserveBanner";
import Reviews from "./Reviews";

export default function Main() {
  return (
    <>
      <ReserveTableBanner />
      <Menu />
      <Reviews />
    </>
  );
}
