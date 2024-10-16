const secondsContainer = document.querySelector(".seconds");
const minutesContainer = document.querySelector(".minutes");
const hoursContainer = document.querySelector(".hours");

setInterval(() => {
  const currentTime = new Date();
  //   const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const hoursDegrees =
    currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5; // Each hour is 30 degrees, each minute within an hour is 0.5 degrees
  const minutesDegrees = minutes * 6; // Each minute is 6 degrees
  const secondsDegrees = seconds * 6; // Each second is 6 degrees

  secondsContainer.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesContainer.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursContainer.style.transform = `rotate(${hoursDegrees}deg)`;
}, 1000);
