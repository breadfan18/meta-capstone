import React, { useEffect, useState } from "react";
// import "./Reservations.css";
import { fetchAPI } from "../../api";
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
  const [getTables, setGetTables] = useState(false);
  const [userInformation, setUserInformation] = useState({
    userName: "",
    email: "",
    phone: "",
    occasion: "",
  });

  const handleUserInformation = (e) => {
    e.preventDefault();
    setUserInformation({
      ...userInformation,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (date !== "") {
      setTableTimeOptions(fetchAPI(new Date(date)));
    }
  }, [date]);

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
              getTables={getTables}
              setGetTables={setGetTables}
              containerClass="reservationContainerMobile"
            />
          )}
          {continueToUserInfo && (
            <UserInformation
              continueToUserInfo={continueToUserInfo}
              setContinueToConfirmation={setContinueToConfirmation}
              userInformation={userInformation}
              setUserInformation={setUserInformation}
              handleUserInformation={handleUserInformation}
              setContinueToUserInfo={setContinueToUserInfo}
              containerClass="reservationContainerMobile"
            />
          )}
          {continueToConfirmation &&
            !continueToUserInfo(
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
            getTables={getTables}
            setGetTables={setGetTables}
            containerClass="reservationContainer"
          />
          <UserInformation
            continueToUserInfo={continueToUserInfo}
            setContinueToConfirmation={setContinueToConfirmation}
            userInformation={userInformation}
            setUserInformation={setUserInformation}
            continueToConfirmation={continueToConfirmation}
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
