import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ReservationDetails from "../ReservationDetails";
import "@testing-library/jest-dom/extend-expect";

describe("ReservationDetails Component", () => {
  let props;

  beforeEach(() => {
    props = {
      date: "",
      setDate: jest.fn(),
      time: "",
      setTime: jest.fn(),
      people: 0,
      setPeople: jest.fn(),
      tableTimeOptions: [],
      selectedTimeSlot: "",
      setSelectedTimeSlot: jest.fn(),
      setContinueToUserInfo: jest.fn(),
      getTables: false,
      setGetTables: jest.fn(),
      containerClass: "reservationContainer",
    };
  });

  test("renders properly", () => {
    render(<ReservationDetails {...props} />);
    expect(screen.getByText("Reservation deets..")).toBeInTheDocument();
  });

  test("calls setDate when date input changes", () => {
    render(<ReservationDetails {...props} />);
    const dateInput = screen.getByLabelText("Select Date:");
    fireEvent.change(dateInput, { target: { value: "2023-10-10" } });
    expect(props.setDate).toHaveBeenCalledWith("2023-10-10");
  });

  test("calls setPeople when Stepper value changes", () => {
    render(<ReservationDetails {...props} />);
    const plusButton = screen.getByTestId("plus");
    fireEvent.click(plusButton);
    expect(props.setPeople).toHaveBeenCalledWith(1);
  });

  test("calls setGetTables when check icon is clicked", () => {
    render(<ReservationDetails {...props} />);
    const checkIcon = screen.getByTestId("peopleCheck");
    fireEvent.click(checkIcon);
    expect(props.setGetTables).toHaveBeenCalledWith(true);
  });

  test("calls setSelectedTimeSlot when a time slot is clicked", () => {
    props.tableTimeOptions = ["10:00", "10:15"];
    props.date = "2023-10-10";
    props.time = "10:00";
    props.people = 2;
    props.getTables = true;
    render(<ReservationDetails {...props} />);
    const timeSlot = screen.getByText("10:00");
    fireEvent.click(timeSlot);
    expect(props.setSelectedTimeSlot).toHaveBeenCalledWith("10:00");
  });

  test("calls setContinueToUserInfo when continue button is clicked", () => {
    props.date = "2023-10-10";
    props.time = "10:00";
    props.people = 2;
    props.selectedTimeSlot = "10:00";
    render(<ReservationDetails {...props} />);
    const continueButton = screen.getByText("Continue to User Info..");
    fireEvent.click(continueButton);
    expect(props.setContinueToUserInfo).toHaveBeenCalledWith(true);
  });

  test("calls resetFields when reset button is clicked", () => {
    render(<ReservationDetails {...props} />);
    const resetButton = screen.getByText("Reset..");
    fireEvent.click(resetButton);
    expect(props.setDate).toHaveBeenCalledWith("");
    expect(props.setTime).toHaveBeenCalledWith("");
    expect(props.setPeople).toHaveBeenCalledWith(0);
    expect(props.setSelectedTimeSlot).toHaveBeenCalledWith("");
    expect(props.setGetTables).toHaveBeenCalledWith(false);
  });
});
