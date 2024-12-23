import { isEqual } from "lodash";

export function fetchAPIWithTime(time, increment = 15, count = 9) {
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

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = function (formData) {
  return true;
};

export const checkEqual = (l, r) => isEqual(l, r);
