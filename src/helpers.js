import { isEqual } from "lodash";

export function getTimeIncrements(time, increment = 15, count = 9) {
  const [hours, minutes] = time.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;
  const timeIncrements = [];

  for (let i = 1; i <= count / 2; i++) {
    let beforeTime = totalMinutes - i * increment;
    timeIncrements.push(format12HourTime(beforeTime));
    let afterTime = totalMinutes + i * increment;
    timeIncrements.push(format12HourTime(afterTime));
  }
  return timeIncrements.sort();
}

function format12HourTime(minutes) {
  minutes = (minutes + 1440) % 1440;
  const hours = Math.floor(minutes / 60) % 24;
  const mins = minutes % 60;
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
  const formattedMinutes = mins === 0 ? "00" : mins < 10 ? `0${mins}` : mins;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export const checkEqual = (l, r) => isEqual(l, r);
