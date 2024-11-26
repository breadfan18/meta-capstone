import React, { memo } from "react";
import { checkEqual } from "../../helpers";

function UserInformation({
  continueToUserInfo,
  setContinueToConfirmation,
  userInformation,
  handleUserInformation,
  containerClass,
  setContinueToUserInfo,
  continueToConfirmation,
}) {
  return (
    <div class={containerClass}>
      <h1 style={{ color: continueToUserInfo ? "#1a4a3a" : "gray" }}>
        Your Information..
      </h1>
      {(continueToUserInfo || continueToConfirmation) && (
        <form id="reservationForm">
          <div>
            <label for="date">Your name: </label>
            <input
              type="text"
              id="name"
              name="userName"
              required
              onChange={handleUserInformation}
            />
          </div>

          <div>
            <label for="time">Email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleUserInformation}
            />
          </div>

          <div>
            <label for="time">Phone Number:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              required
              onChange={handleUserInformation}
            />
          </div>

          <div>
            <label for="occasion">Choose an occasion:</label>
            <select
              id="occasion"
              name="occasion"
              required
              onChange={handleUserInformation}
            >
              [""]<option value="">-- Select an Occasion --</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="wedding">Wedding</option>
            </select>
          </div>

          <button
            type="submit"
            className="reserveButton"
            onClick={(e) => {
              e.preventDefault();
              if (setContinueToUserInfo) {
                setContinueToUserInfo(false);
              }
              setContinueToConfirmation(true);
            }}
            disabled={
              userInformation.userName === "" ||
              userInformation.email === "" ||
              userInformation.phone === ""
            }
            style={{
              backgroundColor:
                userInformation.userName === "" ||
                userInformation.email === "" ||
                userInformation.phone === ""
                  ? "gray"
                  : "#eed049",
            }}
          >
            Confirm Reservation
          </button>
        </form>
      )}
    </div>
  );
}

export default memo(UserInformation, (prev, props) => checkEqual(prev, props));
