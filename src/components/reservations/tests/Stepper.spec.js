import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Stepper from "../Stepper";

describe("Stepper Component", () => {
  let value, setValue;

  beforeEach(() => {
    value = 0;
    setValue = jest.fn((newValue) => (value = newValue));
  });

  test("renders Stepper component", () => {
    render(<Stepper value={value} setValue={setValue} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("increments value when plus button is clicked", () => {
    render(<Stepper value={value} setValue={setValue} />);
    const plusButton = screen.getByTestId("plus");
    fireEvent.click(plusButton);
    expect(setValue).toHaveBeenCalledWith(1);
  });

  test("decrements value when minus button is clicked", () => {
    value = 1;
    render(<Stepper value={value} setValue={setValue} />);
    const minusButton = screen.getByTestId("minus");
    fireEvent.click(minusButton);
    expect(setValue).toHaveBeenCalledWith(0);
  });

  test("does not decrement value below 0", () => {
    render(<Stepper value={value} setValue={setValue} />);
    const minusButton = screen.getByTestId("minus");
    fireEvent.click(minusButton);
    expect(setValue).not.toHaveBeenCalled();
  });
});
