import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UserInformation from "../UserInformation";
import "@testing-library/jest-dom/extend-expect";

describe("UserInformation Component", () => {
  const mockSetUserInformation = jest.fn();
  const mockSetContinueToUserInfo = jest.fn();
  const mockSetContinueToConfirmation = jest.fn();

  const defaultProps = {
    continueToUserInfo: true,
    setContinueToUserInfo: mockSetContinueToUserInfo,
    continueToConfirmation: false,
    setContinueToConfirmation: mockSetContinueToConfirmation,
    userInformation: {
      userName: "",
      email: "",
      phone: "",
      occasion: "",
    },
    setUserInformation: mockSetUserInformation,
    handleUserInformation: jest.fn(),
    containerClass: "test-container",
  };

  test("renders the component with the correct elements", () => {
    render(<UserInformation {...defaultProps} />);
    expect(screen.getByText("Your Information..")).toBeInTheDocument();
    expect(screen.getByLabelText("Your name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address:")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number:")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose an occasion:")).toBeInTheDocument();
  });

  test("calls handleUserInformation when input fields change", () => {
    render(<UserInformation {...defaultProps} />);
    const nameInput = screen.getByLabelText("Your name:");
    fireEvent.change(nameInput, {
      target: { name: "userName", value: "John Doe" },
    });
    expect(defaultProps.handleUserInformation).toHaveBeenCalled();
  });

  test("resets the form when the Reset button is clicked", () => {
    render(<UserInformation {...defaultProps} />);
    const resetButton = screen.getByText("Reset..");
    fireEvent.click(resetButton);
    expect(mockSetUserInformation).toHaveBeenCalledWith({
      userName: "",
      email: "",
      phone: "",
      occasion: "",
    });
  });

  test("disables the Confirm Reservation button when required fields are empty", () => {
    render(<UserInformation {...defaultProps} />);
    const confirmButton = screen.getByText("Confirm Reservation");
    expect(confirmButton).toBeDisabled();
  });

  test("enables the Confirm Reservation button when required fields are filled", () => {
    const filledProps = {
      ...defaultProps,
      userInformation: {
        userName: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        occasion: "birthday",
      },
    };
    render(<UserInformation {...filledProps} />);
    const confirmButton = screen.getByText("Confirm Reservation");
    expect(confirmButton).not.toBeDisabled();
  });

  test("sets continueToConfirmation to true and continues the flow when Confirm Reservation is clicked", () => {
    const filledProps = {
      ...defaultProps,
      userInformation: {
        userName: "John Doe",
        email: "john@email.com",
        phone: "1234567890",
        occasion: "birthday",
      },
    };
    render(<UserInformation {...filledProps} />);
    const confirmButton = screen.getByText("Confirm Reservation");
    fireEvent.click(confirmButton);
    expect(mockSetContinueToConfirmation).toHaveBeenCalledWith(true);
    expect(mockSetContinueToUserInfo).toHaveBeenCalledWith(false);
  });
});
