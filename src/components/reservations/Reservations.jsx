import React, { useEffect, useState } from "react";
import "./Reservations.css";
import { getTimeIncrements } from "../../helpers";
import ReservationDetails from "./ReservationDetails";
import UserInformation from "./UserInformation";
import Confirmation from "./Confirmation";
import useWindhowWidth from "../../windowWidth";

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
    occasion: "",
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

  return (
    <div className="reservationsMainContainer">
      {isMobile || isTablet ? (
        <>
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
              continueToUserInfo={continueToUserInfo}
              setContinueToConfirmation={setContinueToConfirmation}
              userInformation={userInformation}
              handleUserInformation={handleUserInformation}
              setContinueToUserInfo={setContinueToUserInfo}
              containerClass="reservationContainerMobile"
            />
          )}
          {continueToConfirmation && !continueToUserInfo && (
            <Confirmation
              continueToConfirmation={continueToConfirmation}
              people={people}
              date={date}
              selectedTimeSlot={selectedTimeSlot}
              userInformation={userInformation}
              containerClass="reservationContainerMobile"
            />
          )}
        </>
      ) : (
        <>
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
            containerClass="reservationContainer"
          />
          <UserInformation
            continueToUserInfo={continueToUserInfo}
            setContinueToConfirmation={setContinueToConfirmation}
            userInformation={userInformation}
            handleUserInformation={handleUserInformation}
            containerClass="reservationContainer"
          />
          <Confirmation
            continueToConfirmation={continueToConfirmation}
            people={people}
            date={date}
            selectedTimeSlot={selectedTimeSlot}
            userInformation={userInformation}
            containerClass="reservationContainer"
          />
        </>
      )}
    </div>
  );
}
