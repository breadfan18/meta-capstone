import React from "react";
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 type="text" value={value}>
          {value}
        </h1>
        <FaCircleMinus
          onClick={handleDecrease}
          style={{ marginRight: "10px" }}
          data-testid="minus"
        />
        <FaCirclePlus onClick={handleIncrease} data-testid="plus" />
      </div>
    </div>
  );
};

export default Stepper;
