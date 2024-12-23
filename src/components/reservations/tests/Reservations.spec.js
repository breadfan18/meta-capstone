import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Reservations from "../Reservations";
import * as helpers from "../../../api";
import * as windowWidthHook from "../../../windowWidth";

jest.mock("../../../api", () => ({
  getTimeIncrements: jest.fn(),
  checkEqual: jest.fn(),
}));

jest.mock("../../../windowWidth", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const RESERVATION_DEETS = "Reservation deets..";
const USER_INFO = "Your Information..";
const CONFIRMATION = "Confirmation..";

describe("Reservations Component", () => {
  beforeEach(() => {
    windowWidthHook.default.mockReturnValue({
      isMobile: false,
      isTablet: false,
    });
  });

  it("renders ReservationDetails, UserInformation, and Confirmation for non-mobile devices", () => {
    render(<Reservations />);
    expect(screen.getByText(RESERVATION_DEETS)).toBeInTheDocument();
    expect(screen.getByText(USER_INFO)).toBeInTheDocument();
    expect(screen.getByText(CONFIRMATION)).toBeInTheDocument();
  });

  it("renders only one component at a time for mobile devices", () => {
    windowWidthHook.default.mockReturnValue({
      isMobile: true,
      isTablet: false,
    });
    render(<Reservations />);

    expect(screen.getByText(RESERVATION_DEETS)).toBeInTheDocument();
    expect(screen.queryByText(USER_INFO)).not.toBeInTheDocument();
    expect(screen.queryByText(CONFIRMATION)).not.toBeInTheDocument();
  });

  it("updates tableTimeOptions when time changes", () => {
    const mockTimeIncrements = ["12:00 PM", "12:30 PM", "1:00 PM"];
    helpers.fetchAPIWithTime.mockReturnValue(mockTimeIncrements);
    render(<Reservations />);
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "12:00" },
    });
    expect(helpers.fetchAPIWithTime).toHaveBeenCalledWith("12:00");
  });
});
