import React, { memo } from "react";
import Stepper from "./Stepper";
import { FaCheckCircle } from "react-icons/fa";
import { checkEqual } from "../../helpers";

const ReservationDetails = ({
  date,
  setDate,
  time,
  setTime,
  people,
  setPeople,
  tableTimeOptions,
  selectedTimeSlot,
  setSelectedTimeSlot,
  setContinueToUserInfo,
  getTables,
  setGetTables,
  containerClass,
}) => {
  const resetFields = () => {
    setDate("");
    setTime("");
    setPeople(0);
    setSelectedTimeSlot("");
    setGetTables(false);
  };

  return (
    <div className={containerClass}>
      <h1>Reservation deets..</h1>
      <form className="reservationForm">
        <div className="formGroup">
          <div className="inputField">
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>

          <div className="inputField">
            <label htmlFor="time">Select Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              // min="09:00"
              // max="11:00"
              step="900"
              required
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>

          <div>
            <label htmlFor="people">Number of People:</label>
            <div className="selectPeople">
              <Stepper
                value={people}
                setValue={setPeople}
                setGetTables={setGetTables}
              />
              <FaCheckCircle
                style={{
                  color: "green",
                  marginLeft: "30px",
                  fontSize: "2.6rem",
                }}
                onClick={() => setGetTables(true)}
                className="peopleCheck"
                data-testid="peopleCheck"
              />
            </div>
          </div>

          <div className="tableTimesContainer">
            {tableTimeOptions.length > 0 &&
              date !== "" &&
              time !== "" &&
              people !== 0 &&
              getTables &&
              tableTimeOptions.map((time) => (
                <div
                  className={`timeBox ${
                    selectedTimeSlot === time && "selected"
                  }`}
                  onClick={() => setSelectedTimeSlot(time)}
                >
                  {time}
                </div>
              ))}
          </div>
        </div>

        <div className="buttonGroup">
          <button
            type="submit"
            className="resetButton reserveButton"
            onClick={() => resetFields()}
            style={{
              backgroundColor: "#DC3545",
              color: "white",
              marginRight: "10px",
            }}
          >
            Reset..
          </button>
          <button
            data-testid="reserveButton"
            type="submit"
            className="reserveButton"
            onClick={(e) => {
              e.preventDefault();
              setContinueToUserInfo(true);
            }}
            disabled={
              date === "" ||
              time === "" ||
              people === 0 ||
              selectedTimeSlot === ""
            }
            style={{
              backgroundColor:
                date === "" ||
                time === "" ||
                people === 0 ||
                selectedTimeSlot === ""
                  ? "gray"
                  : "#eed049",
            }}
          >
            Continue to User Info..
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(ReservationDetails, (prev, props) =>
  checkEqual(prev, props)
);
