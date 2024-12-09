import React, { memo } from "react";
import { checkEqual } from "../../helpers";

function UserInformation({
  continueToUserInfo,
  setContinueToConfirmation,
  userInformation,
  setUserInformation,
  handleUserInformation,
  containerClass,
  setContinueToUserInfo,
  continueToConfirmation,
}) {
  return (
    <div className={containerClass}>
      <h1
        style={{
          color:
            continueToUserInfo || continueToConfirmation ? "#1a4a3a" : "gray",
        }}
      >
        Your Information..
      </h1>
      {(continueToUserInfo || continueToConfirmation) && (
        <form className="reservationForm userInfoGroup">
          <div className="formGroup">
            <div>
              <label htmlFor="userName">Your name: </label>
              <input
                type="text"
                id="userName"
                name="userName"
                required
                onChange={handleUserInformation}
                value={userInformation.userName}
              />
            </div>

            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleUserInformation}
                value={userInformation.email}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                required
                onChange={handleUserInformation}
                value={userInformation.phone}
              />
            </div>

            <div>
              <label htmlFor="occasion">Choose an occasion:</label>
              <select
                id="occasion"
                name="occasion"
                required
                onChange={handleUserInformation}
                value={userInformation.occasion}
              >
                [""]<option value="">-- Select an Occasion --</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="wedding">Wedding</option>
              </select>
            </div>
          </div>

          <div className="buttonGroup">
            <button
              type="submit"
              className="resetButton reserveButton"
              onClick={() =>
                setUserInformation({
                  userName: "",
                  email: "",
                  phone: "",
                  occasion: "",
                })
              }
              style={{
                backgroundColor: "#DC3545",
                color: "white",
                marginRight: "10px",
              }}
            >
              Reset..
            </button>
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
          </div>
        </form>
      )}
    </div>
  );
}

export default memo(UserInformation, (prev, props) => checkEqual(prev, props));
