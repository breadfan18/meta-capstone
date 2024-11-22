import React, { useEffect, useState } from "react";
import "./Reservations.css";
import Stepper from "./Stepper";
import { getTimeIncrements } from "../../helpers";

export default function Reservations() {
  const [continueToUserInfo, setContinueToUserInfo] = useState(false);
  const [continueToConfirmation, setContinueToConfirmation] = useState(false);
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableTimeOptions, setTableTimeOptions] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  useEffect(() => {
    if (time !== "") {
      setTableTimeOptions(getTimeIncrements(time));
    }
  }, [time]);

  console.log(tableTimeOptions);

  return (
    <div className="reservactionsMainContainer">
      <div class="reservationContainer">
        <h1>Give us the deets..</h1>
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
            <Stepper value={people} setValue={setPeople} />
          </div>

          <label for="table">Select a Table Spot:</label>
          <div className="tableTimesContainer">
            {tableTimeOptions.length > 0 &&
              date !== "" &&
              time !== "" &&
              people !== 0 &&
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
      <div class="reservationContainer">
        <h1 style={{ color: continueToUserInfo ? "#1a4a3a" : "gray" }}>
          Your Information..
        </h1>
        {continueToUserInfo && (
          <form id="reservationForm">
            <div>
              <label for="date">Select Date:</label>
              <input type="date" id="date" name="date" required />
            </div>

            <div>
              <label for="time">Select Time:</label>
              <input type="time" id="time" name="time" required />
            </div>

            <div>
              <label for="people">Number of People:</label>
              <Stepper />
            </div>

            <label for="table">Select a Table Spot:</label>

            <button type="submit">Confirm Reservation</button>
          </form>
        )}
      </div>
      <div class="reservationContainer">
        <h1 style={{ color: continueToConfirmation ? "#1a4a3a" : "gray" }}>
          Confirmation..
        </h1>
        {continueToConfirmation && (
          <form id="reservationForm">
            <div>
              <label for="date">Select Date:</label>
              <input type="date" id="date" name="date" required />
            </div>

            <div>
              <label for="time">Select Time:</label>
              <input type="time" id="time" name="time" required />
            </div>

            <div>
              <label for="people">Number of People:</label>
              <Stepper />
            </div>

            <label for="table">Select a Table Spot:</label>
            <select id="table" name="table" required>
              <option value="" disabled selected>
                Select time first
              </option>
            </select>

            <button type="submit">Reserve Now</button>
          </form>
        )}
      </div>
    </div>
  );
}
