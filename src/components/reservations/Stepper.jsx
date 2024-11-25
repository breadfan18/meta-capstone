import React, { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const Stepper = ({ value, setValue, setGetTables }) => {
  const handleDecrease = () => {
    if (value <= 0) return;
    setValue(value - 1);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  return (
    <div className="stepper">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 type="text" value={value}>
          {value}
        </h1>
        <FaCircleMinus
          onClick={handleDecrease}
          style={{ marginRight: "10px" }}
        />
        <FaCirclePlus onClick={handleIncrease} />
      </div>
      <FaCheckCircle
        style={{ color: "green" }}
        onClick={() => setGetTables(true)}
      />
    </div>
  );
};

export default Stepper;
