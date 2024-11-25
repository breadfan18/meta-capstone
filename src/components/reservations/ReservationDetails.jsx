import React from "react";
import Stepper from "./Stepper";

export default function ReservationDetails({
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
  containerClass,
}) {
  const [getTables, setGetTables] = React.useState(false);

  return (
    <div class={containerClass}>
      <h1>Reservation deets..</h1>
      <form id="reservationForm">
        <div className="inputField">
          <label for="date">Select Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="inputField">
          <label for="time">Select Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            min="09:00"
            max="11:00"
            step="900"
            required
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label for="people">Number of People:</label>
          <Stepper
            value={people}
            setValue={setPeople}
            setGetTables={setGetTables}
          />
        </div>

        <label for="table">Select a Table Spot:</label>
        <div className="tableTimesContainer">
          {tableTimeOptions.length > 0 &&
            date !== "" &&
            time !== "" &&
            people !== 0 &&
            getTables &&
            tableTimeOptions.map((time) => (
              <div
                className={`timeBox ${selectedTimeSlot === time && "selected"}`}
                onClick={() => setSelectedTimeSlot(time)}
              >
                {time}
              </div>
            ))}
        </div>

        <button
          type="submit"
          className="reserveButton"
          onClick={() => setContinueToUserInfo(true)}
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
      </form>
    </div>
  );
}
