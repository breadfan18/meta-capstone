import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Confirmation from "../Confirmation";

describe("Confirmation Component", () => {
  let props;

  beforeEach(() => {
    props = {
      continueToConfirmation: true,
      people: 5,
      date: "2023-10-10",
      selectedTimeSlot: "1:30pm",
      userInformation: {
        userName: "John Doe",
        email: "johndoe@email.com",
        phone: "123-456-7890",
      },
      containerClass: "reservationContainer",
    };
  });

  test("renders properly", () => {
    render(<Confirmation {...props} />);
    expect(screen.getByText("Confirmation..")).toBeInTheDocument();
  });
  test("displays confirmation message properly", () => {
    render(<Confirmation {...props} />);
    expect(
      screen.getByText(props.userInformation.userName)
    ).toBeInTheDocument();
    expect(screen.getByText(props.userInformation.email)).toBeInTheDocument();
    expect(screen.getByText(props.userInformation.phone)).toBeInTheDocument();
  });
  test("does not display confirmation message when continueToConfirmation is false", () => {
    props.continueToConfirmation = false;
    render(<Confirmation {...props} />);
    expect(screen.queryByText(props.userInformation.userName)).toBeNull();
    expect(screen.queryByText(props.userInformation.email)).toBeNull();
    expect(screen.queryByText(props.userInformation.phone)).toBeNull();
  });

  test("does not display iFrame when continueToConfirmation is false", () => {
    props.continueToConfirmation = false;
    render(<Confirmation {...props} />);
    expect(screen.queryByTitle("giphy")).toBeNull();
  });
});
