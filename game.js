"use strict";

//variables
const title = document.querySelector(".title");
const btnsPlay = document.querySelectorAll(".btn-play");

//functions
const randomNumberCall = () => Math.ceil(Math.random() * 10);
const randomNumber = randomNumberCall();

let clickCounter = 0;
//eventhandlers
btnsPlay.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(clickCounter);
    console.log(randomNumber);

    if (+btn.textContent === randomNumber) {
      title.textContent = "You win!";
    } else {
      title.textContent = "Guess again!";
      clickCounter++;
    }

    if (clickCounter === 3) {
      return (title.textContent = "You lose");
    }
  }),
);

console.log();
