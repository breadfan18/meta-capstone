import React, { useEffect, useState } from "react";
import "./Reservations.css";
import { getTimeIncrements } from "../../helpers";
import ReservationDetails from "./ReservationDetails";
import UserInformation from "./UserInformation";
import Confirmation from "./Confirmation";
import useWindhowWidth from "../../windowWidth";
import ReservationsMobile from "./ReservationsMobile";

export default function Reservations() {
  const { isMobile, isTablet } = useWindhowWidth();
  const [continueToUserInfo, setContinueToUserInfo] = useState(false);
  const [continueToConfirmation, setContinueToConfirmation] = useState(false);
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableTimeOptions, setTableTimeOptions] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [userInformation, setUserInformation] = useState({
    userName: "",
    email: "",
    phone: "",
    occasiion: "",
  });

  const handleUserInformation = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);

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

  return isMobile || isTablet ? (
    <ReservationsMobile />
  ) : (
    <div className="reservactionsMainContainer">
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
        containerClass={
          isMobile || isTablet
            ? "reservationContainerMobile"
            : "reservationContainer"
        }
      />
      <UserInformation
        continueToUserInfo={continueToUserInfo}
        setContinueToConfirmation={setContinueToConfirmation}
        userInformation={userInformation}
        handleUserInformation={handleUserInformation}
        containerClass={
          isMobile || isTablet
            ? "reservationContainerMobile"
            : "reservationContainer"
        }
      />
      <Confirmation
        continueToConfirmation={continueToConfirmation}
        people={people}
        date={date}
        selectedTimeSlot={selectedTimeSlot}
        userInformation={userInformation}
        containerClass={
          isMobile || isTablet
            ? "reservationContainerMobile"
            : "reservationContainer"
        }
      />
    </div>
  );
}
