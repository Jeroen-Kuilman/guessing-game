"use strict";

//elements variables
const titleBetween = document.querySelector(".title-between");
const tracker = document.querySelector(".progress-tracker");
const attemptsCounter = document.querySelector(".attempt-counter");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnSection = document.querySelector(".btn-section");

const inputChoiceAmount = document.querySelector("#choice-amount");
const inputAttemptAmount = document.querySelector("#attempt-amount");

//button variable
let btnsPlay = document.querySelectorAll(".btn-play");
const btnReset = document.querySelector(".btn-reset");
const btnOptions = document.querySelector(".btn-options");
const btnCancel = document.querySelector(".btn-cancel");
const btnConfirm = document.querySelector(".btn-confirm");

let num, clickCounter, playing;

///////////////////////////////////////
//functions
//////////////////////////////////////
const createPlayButton = (amount) => {
  for (let i = 0; i < amount; i++) {
    const newButton = document.createElement("button");
    newButton.classList.add("btn", "btn-play", `btn-${i + 13}`);
    newButton.textContent = i + 13;
    newButton.addEventListener("click", gameLogic); // ✅ attach only to new button
    btnSection.insertAdjacentElement("beforeend", newButton);
  }

  btnsPlay = document.querySelectorAll(".btn-play");
};

// current amount = 50
// (new) amount = 30
const destroyPlayButton = (amount) => {
  let curAmount = btnsPlay.length;

  while (curAmount > amount) {
    btnsPlay[curAmount - 1].remove();
    curAmount--;
  }
  btnsPlay = document.querySelectorAll(".btn-play");
};

const randomNumber = (num = 12) => Math.ceil(Math.random() * num);

// reset game
const init = function () {
  // inputChoiceAmount.value = "";
  // inputAttemptAmount.value = "";

  // start playing only once the buttons have been reset, not before
  playing = false;
  setTimeout(() => (playing = true), 800);

  num = randomNumber();
  clickCounter = 4;

  tracker.textContent = "click to start...";
  attemptsCounter.textContent = `Attempts left: ${clickCounter}`;
  titleBetween.textContent = "Choose a number between 1 and 12";
  destroyPlayButton(12);

  btnsPlay.forEach((btn) => {
    btn.classList.remove("right-button", "wrong-button", "btn-visible");
    btn.removeAttribute("style");
  });

  setTimeout(() => {
    btnsPlay.forEach((btn, i) => {
      btn.textContent = i + 1;
      btn.classList.add("btn-visible");
    });
  }, 800);
};

// The gameplay loop
const gameLogic = function (e) {
  const btn = e.target;

  if (playing) {
    if (+btn.textContent === num) {
      tracker.textContent = `${clickCounter === 1 ? "You win, that was indeed a wise choice!" : "You win, with attempts to spare!"}`;
      btnsPlay.forEach((btn) => {
        btn.classList.add("right-button");
        btn.innerHTML = `<span>${num}</span>`;
      });
      playing = false;
    } else if (!btn.classList.contains("wrong-button")) {
      clickCounter--;
      tracker.textContent = `${clickCounter === 1 ? "Only one chance left, choose wisely!" : "Wrong, guess again!"}`;
      attemptsCounter.textContent = `Attempts left: ${clickCounter}`;
      btn.classList.add("wrong-button");
      btn.textContent = "";
    }

    if (clickCounter === 0) {
      btnsPlay.forEach((btn) => {
        btn.classList.add("wrong-button");
        btn.innerHTML = `<span>${num}</span>`;
      });
      tracker.textContent = "You lose, that choice wasn't wise...";
      playing = false;
    }
  }
};

// open and close modal (options) window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//options logic
const optionsLogic = function () {
  const newChoiceAmount = Math.min(100, Math.max(4, +inputChoiceAmount.value));
  const newAttemptAmount = Math.min(50, Math.max(1, +inputAttemptAmount.value));
  const curAmount = btnsPlay.length;

  // choose the amount of choices
  if (newChoiceAmount >= curAmount) {
    createPlayButton(newChoiceAmount - curAmount);
  } else {
    destroyPlayButton(newChoiceAmount);
  }

  // choose the amount of attempts (if left empty, it wil default to 40% of the amount of choices)
  if (inputAttemptAmount.value) {
    attemptsCounter.textContent = `Attempts left: ${newAttemptAmount}`;
    clickCounter = newAttemptAmount;
  } else {
    attemptsCounter.textContent = `Attempts left: ${Math.trunc(newChoiceAmount * 0.4)}`;
    clickCounter = Math.trunc(newChoiceAmount * 0.4);
  }

  num = randomNumber(newChoiceAmount);
  titleBetween.textContent = `Choose a number between 1 and ${newChoiceAmount}`;
};

/////////////////////////////////////
//eventhandlers
/////////////////////////////////////
//logic for clicking the play buttons
init();

// click for reset
btnReset.addEventListener("click", init);

// click to guess
btnsPlay.forEach((btn) => btn.addEventListener("click", gameLogic));

// click to open options
btnOptions.addEventListener("click", openModal);

// click to cancel options
btnCancel.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal();
});

// click to confirm options
btnConfirm.addEventListener("click", function (e) {
  e.preventDefault();
  init();
  optionsLogic();
  closeModal();
});

// missing feature: the adding / removing of buttons isn't smooth FIXED FOR NOW
// missing feature: when winning ONLY show the number of the winning button (maybe when losing too) ADDED FOR NOW

// missing feature / bug: putting the input-fields.value variables in the init function breaks the game
// bug: if input choices remain empty while setting the attempts (or leaving everything empty), will result in the game defaulting to the minimum amount of choices
// created buttons flash shortly when clicked
