import React from "react";

export default function Confirmation({
  continueToConfirmation,
  people,
  date,
  selectedTimeSlot,
  userInformation,
}) {
  return (
    <div class="reservationContainer">
      <h1 style={{ color: continueToConfirmation ? "#1a4a3a" : "gray" }}>
        Confirmation..
      </h1>
      {continueToConfirmation && (
        <div className="confirmationDialog">
          <h2>See you soon!</h2>
          <p>
            You have successfully reserved a table for <span>{people}</span>{" "}
            people on <span>{date}</span> at <span>{selectedTimeSlot}</span>
          </p>
          <p>
            Your reservation is under the name of{" "}
            <span>{userInformation.userName}</span>
          </p>
          <p>
            We will send you a confirmation email to{" "}
            <span>{userInformation.email}</span>
          </p>
          <p>
            An SMS reminder will be sent to your phone number{" "}
            <span>{userInformation.phone}</span>
          </p>
        </div>
      )}
    </div>
  );
}
