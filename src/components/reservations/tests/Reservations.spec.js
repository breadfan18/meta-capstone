import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Reservations from "../Reservations";
import * as windowWidthHook from "../../../windowWidth";
import { submitAPI } from "../../../api";

jest.mock("../../../api", () => ({
  getTimeIncrements: jest.fn(),
  checkEqual: jest.fn(),
  submitAPI: jest.fn(),
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
});
