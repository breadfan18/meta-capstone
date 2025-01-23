import React, { memo, useState } from "react";
import { checkEqual } from "../../api";
import _ from "lodash";

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

  const validateField = (name, value) => {
    let error = "";
    if (name === "userName") {
      if (!value) error = "Name is required";
      else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ '-]+$/.test(value))
        error = "Name should be alphabets only";
    } else if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Invalid email format";
    } else if (name === "phone") {
      if (!value) error = "Phone is required";
      else if (!/^\d{3}-\d{3}-\d{4}$/.test(value))
        error = "Invalid phone format";
    } else if (name === "occasion") {
      if (!value) error = "Occasion is required";
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const formIsValid = () => {
    const formErrors = {};
    Object.keys(userInformation).forEach((key) => {
      const error = validateField(key, userInformation[key]);
      if (error) formErrors[key] = error;
    });
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
  };

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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
                value={userInformation.occasion}
              >
                [""]<option value="">-- Select an Occasion --</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="wedding">Wedding</option>
              </select>
              {errors.occasion && (
                <p className="field-error">{errors.occasion}</p>
              )}
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
              disabled={!_.isEmpty(errors)}
              style={{
                backgroundColor: !_.isEmpty(errors) ? "gray" : "#eed049",
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
