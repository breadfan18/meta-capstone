import React from "react";
import { NavLink } from "react-router-dom";
import useWindhowWidth from "../windowWidth";

export default function ReserveTableBanner() {
  const { isMobile } = useWindhowWidth();

  return (
    <div className="reserveContainer">
      <section className="reserveTextSection">
        <h2>Little Lemon San Francisco</h2>
        <p>
          We are open for lunch and dinner Monday through Friday, and for dinner
          on the weekends. Please call us to make a reservation.
        </p>
        <NavLink to="/reservation" className="reserveButton">
          Reserve a table
        </NavLink>
      </section>
      {!isMobile && (
        <img
          src="https://i.imgur.com/9O9y9Oa.png"
          alt=""
          className="tablesImg"
        />
      )}
    </div>
  );
}
