"use strict";

//elements variables
const titleBetween = document.querySelector(".title-between");
const winTracker = document.querySelector(".win-counter");
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
const bntHint = document.querySelector(".btn-hint");
const btnCancel = document.querySelector(".btn-cancel");
const btnConfirm = document.querySelector(".btn-confirm");

const checkBox = document.querySelector(".checkbox");

let num, clickCounter, playing, lastClickedBtn, lastGameStatus;
let checkBoxValue = false;
let winCounter = 0;
const maxChoice = 1000;

// this is a dummy number to fool people using the console
const randNum = Math.ceil(Math.random() * 12);

///////////////////////////////////////
//functions
//////////////////////////////////////

// generate the random number
const randomNumber = (num = 12) => Math.ceil(Math.random() * num);

// create new playbuttons
const createPlayButton = (amount) => {
  const curAmount = btnsPlay.length;
  for (let i = 0; i < amount; i++) {
    const newButton = document.createElement("button");
    newButton.classList.add("btn", "btn-play", `btn-${curAmount + i + 1}`);
    newButton.textContent = i + 13;
    newButton.dataset.value = curAmount + i + 1;
    newButton.addEventListener("click", gameLogic);
    btnSection.insertAdjacentElement("beforeend", newButton);
  }

  btnsPlay = document.querySelectorAll(".btn-play");
};

// remove playbuttons
const destroyPlayButton = (amount) => {
  let curAmount = btnsPlay.length;

  while (curAmount > amount) {
    btnsPlay[curAmount - 1].remove();
    curAmount--;
  }
  btnsPlay = document.querySelectorAll(".btn-play");
};

// reset game
const init = function (
  choiceAmount = 12,
  attemptAmount,
  keepPreferences = checkBoxValue,
) {
  const activeChoiceAmount = keepPreferences ? btnsPlay.length : choiceAmount;
  const INITIAL_DELAY = 800;
  const INTERVAL_SPEED = 30;
  const totalTime = INITIAL_DELAY + activeChoiceAmount * INTERVAL_SPEED;

  // start playing only once the playbuttons have been reset, not before
  playing = false;

  clickCounter = attemptAmount || Math.trunc(activeChoiceAmount * 0.4);
  //new random number
  setTimeout(() => (playing = true), totalTime);
  num = randomNumber(activeChoiceAmount);

  //reset playbuttons and attempts and lastClickedBtn
  if (btnsPlay.length >= activeChoiceAmount) {
    destroyPlayButton(activeChoiceAmount);
  } else {
    createPlayButton(activeChoiceAmount - btnsPlay.length);
  }

  lastClickedBtn = 0;

  //reset text
  tracker.textContent =
    lastGameStatus === 1
      ? "Let's keep that winning streak going! 🔥🔥🔥"
      : "Maybe this time, you have better luck!🍀";
  attemptsCounter.textContent = `Attempts left: ${clickCounter}`;

  titleBetween.textContent = `Choose a number between 1 and ${activeChoiceAmount}`;
  inputChoiceAmount.value = "";
  inputAttemptAmount.value = "";
  //remove playbutton effects and hide them
  btnsPlay.forEach((btn) => {
    btn.classList.remove("right-button", "wrong-button", "btn-visible");
    btn.removeAttribute("style");
  });

  setTimeout(() => {
    // make the resetted playbuttons visible again
    let i = 0;
    const interval = setInterval(() => {
      if (i >= btnsPlay.length) {
        clearInterval(interval);
        return;
      }
      btnsPlay[i].textContent = i + 1;
      btnsPlay[i].dataset.value = i + 1;
      btnsPlay[i].classList.add("btn-visible");
      i++;
    }, 30);
  }, 800);
};

// The gameplay loop
const gameLogic = function (e) {
  const btn = e.target;

  if (playing) {
    if (+btn.textContent === num) {
      lastGameStatus = 1;
      winCounter++;
      winTracker.textContent = `Your current winning streak: ${winCounter}`;
      tracker.textContent = `${clickCounter === 1 ? "You win, that was indeed a wise choice!🎉🎊🎉" : "You win, with attempts to spare!🎉🎊🎉"}`;
      btnsPlay.forEach((btn) => {
        btn.classList.add("right-button");
        btn.innerHTML = `<span>${+btn.dataset.value === num ? num : ""}</span>`;
      });
      playing = false;
    } else if (!btn.classList.contains("wrong-button")) {
      lastClickedBtn = btn.dataset.value;
      clickCounter--;
      tracker.textContent = `${clickCounter === 1 ? "Only one chance left, choose wisely!" : "Wrong, guess again!"}`;
      attemptsCounter.textContent = `Attempts left: ${clickCounter}`;
      btn.classList.add("wrong-button");
      btn.textContent = "";
    }

    if (clickCounter === 0) {
      lastGameStatus = -1;
      winCounter = 0;
      winTracker.textContent = "Your current winning streak: 0";
      btnsPlay.forEach((btn) => {
        btn.classList.add("wrong-button");
        btn.innerHTML = `<span>${+btn.dataset.value === num ? num : ""}</span>`;
      });
      tracker.textContent = "You lose, that choice wasn't wise... ☠️";
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
  // const newChoiceAmount = Math.min(
  //   maxChoice,
  //   Math.max(4, +inputChoiceAmount.value),
  // );

  const newChoiceAmount = Math.min(
    maxChoice,
    Math.max(4, +inputChoiceAmount.value),
  );
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

// some fun hints
const getHint = function () {
  if (playing)
    if (lastClickedBtn !== 0) {
      tracker.textContent =
        lastClickedBtn > num ? "Maybe lower? 🤔" : "Maybe higher? 🫤";
    } else {
      tracker.textContent = `Maybe try first before you start asking for help? 🤨`;
    }

  if (!playing) {
    const curAmount = btnsPlay.length;
    tracker.innerHTML = `You already know the answer, it's: <span style='font-size:2rem;'>&#8680;</span>`;
    btnsPlay.forEach((btn) => {
      btn.classList.remove("btn-visible");
    });
    setTimeout(() => {
      btnsPlay.forEach((btn) => {
        btn.innerHTML = `<span>${num}</span>`;
        btn.classList.add("btn-visible");
      });
    }, 1000);
  }
};

/////////////////////////////////////
//eventhandlers
/////////////////////////////////////
//logic for clicking the play buttons
init();
console.log(
  "%cTrying to cheat, huh? Well I won't stop you, but you never guess the variable name of the %crandNum%c, which you need to cheat your way to the right answer! %c*cough cough*",
  "font-size: 30px; background-color:#f5f5e9; color: black;",
  "font-size: 30px; background-color:#f5f5e9; color: black; text-decoration: underline dashed 4px red; font-weight: bold;",
  "font-size: 30px; background-color:#f5f5e9; color: black;",
  "font-size: 30px; background-color:#f5f5e9; color: black; font-weight: bold;",
);

// click for reset
btnReset.addEventListener("click", () => init());

// click to guess
btnSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-play")) gameLogic(e);
});

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
  const newChoiceAmount = Math.min(
    maxChoice,
    Math.max(4, +inputChoiceAmount.value),
  );
  const newAttemptAmount = inputAttemptAmount.value
    ? Math.min(50, Math.max(1, +inputAttemptAmount.value))
    : undefined;
  optionsLogic();
  init(newChoiceAmount, newAttemptAmount, checkBoxValue);
  closeModal();
});

// click to get an hint
bntHint.addEventListener("click", getHint);

// checkbox
checkBox.addEventListener("change", function () {
  checkBoxValue = this.checked;
});

// future feature: stats per person
// future feature: If the game gets reset when playing, winning streak = 0
// fake random number should also reset

// clean up: init, and options logic, add state object, improve names
