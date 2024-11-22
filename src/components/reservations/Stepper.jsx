import React, { useState } from "react";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

const Stepper = ({ value, setValue }) => {
  const handleDecrease = () => {
    if (value <= 0) return;
    setValue(value - 1);
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  return (
    <div className="stepper">
      <FaCircleMinus onClick={handleDecrease} />
      <h1 type="text" value={value}>
        {value}
      </h1>
      <FaCirclePlus onClick={handleIncrease} />
    </div>
  );
};

export default Stepper;
