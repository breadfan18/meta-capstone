import React, { memo, useState } from "react";
import { checkEqual, submitAPI } from "../../api";

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
  const [errors, setErrors] = useState({});

  const formIsValid = () => {
    const formErrors = {};

    const { userName, email, phone, occasion } = userInformation;

    if (!userName) formErrors.userName = "Name is required";
    if (userName && !/^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/.test(userName))
      formErrors.userName = "Name should be alphabets only";
    if (!email) formErrors.email = "Email is required";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      formErrors.email = "Invalid email format";
    if (!phone) formErrors.phone = "Phone is required";
    if (phone && !/^\d{3}-\d{3}-\d{4}$/.test(phone))
      formErrors.phone = "Invalid phone format";
    if (!occasion) formErrors.occasion = "Occasion is required";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid()) return;

    if (setContinueToUserInfo) {
      setContinueToUserInfo(false);
    }
    setContinueToConfirmation(true);
    submitAPI(userInformation);
  };

  console.log(errors);

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
        <form
          className="reservationForm userInfoGroup"
          data-testid="userInfoGroup"
        >
          <div className="formGroup">
            <div>
              <label htmlFor="userName">Your name: </label>
              {errors.userName && (
                <p className="field-error">{errors.userName}</p>
              )}
              <input
                type="text"
                id="userName"
                name="userName"
                required
                onChange={handleUserInformation}
                value={userInformation.userName}
                // pattern="[A-Za-zÀ-ÖØ-öø-ÿ '-]+"
              />
            </div>

            <div style={{ position: "relative" }}>
              <label htmlFor="email">Email address:</label>
              {errors.email && <p className="field-error">{errors.email}</p>}
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
              {errors.phone && <p className="field-error">{errors.phone}</p>}
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
              onClick={(e) => handleSubmit(e)}
              disabled={
                userInformation.userName === "" ||
                userInformation.email === "" ||
                userInformation.phone === "" ||
                userInformation.occasion === ""
              }
              style={{
                backgroundColor:
                  userInformation.userName === "" ||
                  userInformation.email === "" ||
                  userInformation.phone === "" ||
                  userInformation.occasion === ""
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
