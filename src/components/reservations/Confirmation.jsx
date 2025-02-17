/* eslint-disable jsx-a11y/iframe-has-title */
import React, { memo, useEffect, useState } from "react";
import { checkEqual, submitAPI, validateObjectProperties } from "../../api";
import Spinner from "../common/Spinner";

function Confirmation({
  continueToConfirmation,
  people,
  date,
  selectedTimeSlot,
  userInformation,
  containerClass,
}) {
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const confirmationFromApi = submitAPI(userInformation);

    if (confirmationFromApi && validateObjectProperties(userInformation)) {
      setTimeout(() => {
        setConfirmed(true);
      }, 3000);
    }
  }, [continueToConfirmation, userInformation]);

  return (
    <div className={containerClass}>
      <h1 style={{ color: continueToConfirmation ? "#1a4a3a" : "gray" }}>
        Confirmation..
      </h1>
      {continueToConfirmation && confirmed ? (
        <>
          <div className="confirmationDialog" data-testid="confirmationDialog">
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
              We have sent a confirmation email to{" "}
              <span>{userInformation.email}</span>
            </p>
            <p>
              An SMS reminder will be sent to your phone number{" "}
              <span>{userInformation.phone}</span>
            </p>
          </div>

          <iframe
            src="https://giphy.com/embed/TiIxMEkviUDmqpuyob"
            style={{ border: "none" }}
          ></iframe>
        </>
      ) : !continueToConfirmation ? null : (
        <Spinner />
      )}
    </div>
  );
}

export default memo(Confirmation, (prev, props) => checkEqual(prev, props));
