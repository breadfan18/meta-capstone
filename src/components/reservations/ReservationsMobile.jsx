import React, { useEffect, useState } from "react";
import "./Reservations.css";
import { getTimeIncrements } from "../../helpers";
import ReservationDetails from "./ReservationDetails";
import UserInformation from "./UserInformation";
import Confirmation from "./Confirmation";

export default function ReservationsMobile() {
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableTimeOptions, setTableTimeOptions] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [userInformation, setUserInformation] = useState({
    userName: "",
    email: "",
    phone: "",
    occasion: "",
  });

  const handleUserInformation = (e) => {
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (time !== "") {
      setTableTimeOptions(getTimeIncrements(time));
    }
  }, [time]);

  const [continueToUserInfo, setContinueToUserInfo] = useState(false);
  const [continueToConfirmation, setContinueToConfirmation] = useState(false);

  console.log(continueToUserInfo, continueToConfirmation);

  return (
    <div containerClass="reservationsMainContainer">
      {!continueToUserInfo && !continueToConfirmation && (
        <ReservationDetails
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          people={people}
          setPeople={setPeople}
          tableTimeOptions={tableTimeOptions}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
          setContinueToUserInfo={setContinueToUserInfo}
          containerClass="reservationContainerMobile"
        />
      )}
      {continueToUserInfo && (
        <UserInformation
          userInformation={userInformation}
          handleUserInformation={handleUserInformation}
          continueToUserInfo={continueToUserInfo}
          setContinueToConfirmation={setContinueToConfirmation}
          setContinueToUserInfo={setContinueToUserInfo}
          containerClass="reservationContainerMobile"
        />
      )}
      {continueToConfirmation && !continueToUserInfo && (
        <Confirmation
          people={people}
          date={date}
          selectedTimeSlot={selectedTimeSlot}
          continueToConfirmation={continueToConfirmation}
          userInformation={userInformation}
          containerClass="reservationContainerMobile"
        />
      )}
    </div>
  );
}
