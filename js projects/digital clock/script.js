const hourBox = document.querySelector(".hours");
const minuteBox = document.querySelector(".minutes");
const secondBox = document.querySelector(".seconds");
const amPmBox = document.querySelector(".amPm");

function showTime() {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let amPm = hour >= 12 ? "PM" : "AM";
  hour = hour > 12 ? hour % 12 : hour;
  // handling zeros
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  // console.log(hour, minute, second, amPm);
  // set
  hourBox.innerText = hour;
  minuteBox.innerText = minute;
  secondBox.innerText = second;
  amPmBox.innerText = amPm;
}
showTime();

setInterval(() => {
  showTime();
}, 1000);
