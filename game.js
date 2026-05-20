"use strict";

//elements variables
const title = document.querySelector(".title");
const tracker = document.querySelector(".progress-tracker");
const attemptsCounter = document.querySelector(".attempt-counter");

//button variable
const btnsPlay = document.querySelectorAll(".btn-play");
const btnReset = document.querySelector(".btn-reset");

//functions
const randomNumber = () => Math.ceil(Math.random() * 12);
let num;

// the max amount of attempts
let clickCounter;
let playing;

///////////////////////////////////////
//functions
//////////////////////////////////////
const init = function () {
  num = randomNumber();
  clickCounter = 5;
  playing = true;

  tracker.textContent = "click to start...";
  attemptsCounter.textContent = `Attempts left: ${clickCounter}`;

  btnsPlay.forEach((btn, i) => {
    btn.classList.remove("right-button");
    btn.classList.remove("wrong-button");
    btn.classList.remove("btn-visible");
    btn.style.backgroundColor = "";
    btn.style.transform = "";
  });

  setTimeout(() => {
    btnsPlay.forEach((btn, i) => {
      btn.textContent = i + 1;
      btn.classList.add("btn-visible");
    });
  }, 1000);
};

init();
/////////////////////////////////////
//eventhandlers
/////////////////////////////////////
//logic for clicking the play buttons

btnReset.addEventListener("click", function (e) {
  init();
});

btnsPlay.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(num);

    if (playing) {
      if (+btn.textContent === num) {
        tracker.textContent = "You win!";
        btn.classList.add("right-button");
        playing = false;
      } else {
        tracker.textContent = "Guess again!";
        clickCounter--;
        attemptsCounter.textContent = `Attempts left: ${clickCounter}`;
        btn.classList.add("wrong-button");
        btn.textContent = "";
      }

      if (clickCounter === 0) {
        tracker.textContent = "You lose";
        playing = false;
      }
    }
  }),
);
