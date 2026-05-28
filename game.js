"use strict";

// elements variables
const titleBetween = document.querySelector(".title-between");
const winTracker = document.querySelector(".win-counter");
const feedbackText = document.querySelector(".feedback-text");
const attemptsCounter = document.querySelector(".attempt-counter");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnSection = document.querySelector(".btn-section");
const highStreak = document.querySelector(".highest-winstreak");
const loseStreak = document.querySelector(".highest-losestreak");

// input variables
const inputChoiceAmount = document.querySelector("#choice-amount");
const inputAttemptAmount = document.querySelector("#attempt-amount");
const checkBox = document.querySelector(".checkbox");

// button variable
let btnsPlay = document.querySelectorAll(".btn-play");
const btnReset = document.querySelector(".btn-reset");
const btnOptions = document.querySelector(".btn-options");
const btnHint = document.querySelector(".btn-hint");
const btnCancel = document.querySelector(".btn-cancel");
const btnConfirm = document.querySelector(".btn-confirm");

// default variables
const MAX_CHOICE = 1000;
const DEFAULT_CHOICE_AMOUNT = 12;

///////////////////////////////////////
// objects
///////////////////////////////////////
const GAME_STATUS = Object.freeze({
  DEFAULT: "default",
  WIN: "win",
  LOSS: "loss",
  RESET_EARLY: "reset_early",
});

const state = {
  rightAnswer: 0,
  clickCounter: 0,
  playing: false,
  lastGuessedValue: 0,
  lastGameStatus: GAME_STATUS.DEFAULT,
  winCounter: 0,
  lossCounter: 0,
};

const settings = {
  choiceAmount: DEFAULT_CHOICE_AMOUNT,
  attemptAmount: null,
  keepPreferences: false,
};

// WIP
const playerStatistics = {
  highestWinStreak: 0,
  highestLossStreak: 0,
};

///////////////////////////////////////
// functions
//////////////////////////////////////
// creation of the right answer
const randomNumber = (max) => Math.ceil(Math.random() * max);

// this is a dummy number to fool people using the console
let randNum;

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
const removePlayButton = (amount) => {
  let curAmount = btnsPlay.length;

  while (curAmount > amount) {
    btnsPlay[curAmount - 1].remove();
    curAmount--;
  }
  btnsPlay = document.querySelectorAll(".btn-play");
};

// reset the game state
const resetState = function (activeChoiceAmount) {
  const { attemptAmount } = settings;

  const INITIAL_DELAY = 800;
  const INTERVAL_SPEED = 30;
  const totalTime = INITIAL_DELAY + activeChoiceAmount * INTERVAL_SPEED;

  // start playing only once the playbuttons have been reset, not before
  state.playing = false;
  setTimeout(() => (state.playing = true), totalTime);

  // reset the click counter
  state.clickCounter = attemptAmount || Math.trunc(activeChoiceAmount * 0.4);

  // new right answer and dummy number
  state.rightAnswer = randomNumber(activeChoiceAmount);
  randNum = randomNumber(activeChoiceAmount);

  // reset playbuttons and attempts and lastGuessedValue
  if (btnsPlay.length >= activeChoiceAmount) {
    removePlayButton(activeChoiceAmount);
  } else {
    createPlayButton(activeChoiceAmount - btnsPlay.length);
  }
  // reset the last guessed value
  state.lastGuessedValue = 0;
};

// reset the gameboard, both text and animations
const renderGameBoard = function (activeChoiceAmount) {
  const { lastGameStatus } = state;

  // reset text
  if (lastGameStatus === GAME_STATUS.WIN) {
    feedbackText.textContent = "Let's keep that winning streak going! 🔥🔥🔥";
  } else if (lastGameStatus === GAME_STATUS.LOSS) {
    feedbackText.textContent = "Maybe this time, you have better luck!🍀";
  } else if (lastGameStatus === GAME_STATUS.RESET_EARLY) {
    winTracker.textContent = "Your current winning streak: 0";
    feedbackText.textContent =
      "Your streak has ended due to resetting early 😭";
  } else {
    feedbackText.textContent = "Click to Start...";
  }

  attemptsCounter.textContent = `Attempts left: ${state.clickCounter}`;

  titleBetween.textContent = `Choose a number between 1 and ${activeChoiceAmount}`;
  inputChoiceAmount.value = "";
  inputAttemptAmount.value = "";

  // reset animations
  btnsPlay.forEach((btn) => {
    btn.classList.remove("right-button", "wrong-button", "btn-visible");
    btn.removeAttribute("style");
  });

  setTimeout(() => {
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

// wrap the reset functions and a safeguard for when resetting early
const init = function (activeChoiceAmount) {
  if (state.playing && state.lastGameStatus !== GAME_STATUS.RESET_EARLY) {
    state.lastGameStatus = GAME_STATUS.RESET_EARLY;
  } else if (state.playing) {
    state.lastGameStatus = GAME_STATUS.DEFAULT;
  }
  resetState(activeChoiceAmount);
  renderGameBoard(activeChoiceAmount);
};

// the gameplay loop
const gameLogicWin = function () {
  const { rightAnswer } = state;

  state.lastGameStatus = GAME_STATUS.WIN;
  state.winCounter++;
  ((state.lossCounter = 0),
    (winTracker.textContent = `Your current winning streak: ${state.winCounter}`));

  feedbackText.textContent = `${state.clickCounter === 1 ? "You win, that was indeed a wise choice!🎉🎊🎉" : "You win, with attempts to spare!🎉🎊🎉"}`;

  btnsPlay.forEach((btn) => {
    btn.classList.add("right-button");
    btn.innerHTML = `<span>${+btn.dataset.value === rightAnswer ? rightAnswer : ""}</span>`;
  });

  state.playing = false;
};

const gameLogicWrongGuess = function (btn) {
  state.lastGuessedValue = btn.dataset.value;
  state.clickCounter--;

  feedbackText.textContent = `${state.clickCounter === 1 ? "Only one chance left, choose wisely!" : "Wrong, guess again!"}`;
  attemptsCounter.textContent = `Attempts left: ${state.clickCounter}`;

  btn.classList.add("wrong-button");
  btn.textContent = "";
};

const gameLogicLoss = function () {
  const { rightAnswer } = state;

  state.lastGameStatus = GAME_STATUS.LOSS;
  state.winCounter = 0;
  state.lossCounter++;
  winTracker.textContent = "Your current winning streak: 0";

  btnsPlay.forEach((btn) => {
    btn.classList.add("wrong-button");
    btn.innerHTML = `<span>${+btn.dataset.value === rightAnswer ? rightAnswer : ""}</span>`;
  });

  feedbackText.textContent = "You lose, that choice wasn't wise... ☠️";
  state.playing = false;
};

const gameLogicHighestWinStreak = function () {
  if (state.winCounter > playerStatistics.highestWinStreak) {
    playerStatistics.highestWinStreak = state.winCounter;
    highStreak.textContent = `Your highest winning streak: ${playerStatistics.highestWinStreak}`;
  } else {
    playerStatistics.highestWinStreak = playerStatistics.highestWinStreak;
  }
};

const gameLogicHighestLoseStreak = function () {
  if (state.lossCounter > playerStatistics.highestLossStreak) {
    playerStatistics.highestLossStreak = state.lossCounter;
    loseStreak.textContent = `Your highest losing streak: ${playerStatistics.highestLossStreak}`;
  } else {
    playerStatistics.highestLossStreak = playerStatistics.highestLossStreak;
  }
};

const gameLogic = function (e) {
  const btn = e.target;
  const { rightAnswer } = state;

  if (state.playing) {
    if (+btn.textContent === rightAnswer) {
      gameLogicWin();
    } else if (!btn.classList.contains("wrong-button")) {
      gameLogicWrongGuess(btn);
    }

    if (state.clickCounter === 0) {
      gameLogicLoss();
    }

    gameLogicHighestWinStreak();
    gameLogicHighestLoseStreak();
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

// some fun hints
const showHint = function () {
  const { playing, lastGuessedValue, rightAnswer } = state;
  if (playing) {
    if (lastGuessedValue !== 0) {
      feedbackText.textContent =
        lastGuessedValue > rightAnswer ? "Maybe lower? 🤔" : "Maybe higher? 🫤";
    } else {
      feedbackText.textContent = `Maybe try first before you start asking for help? 🤨`;
    }
  }

  if (!playing) {
    feedbackText.innerHTML = `You already know the answer, it's: <span style='font-size:2rem;'>&#8680;</span>`;
    btnsPlay.forEach((btn) => {
      btn.classList.remove("btn-visible");
    });
    setTimeout(() => {
      btnsPlay.forEach((btn) => {
        btn.innerHTML = `<span>${rightAnswer}</span>`;
        btn.classList.add("btn-visible");
      });
    }, 1000);
  }
};

/////////////////////////////////////
// eventhandlers
/////////////////////////////////////

// making sure every value is properly set when the game is first loaded
init(DEFAULT_CHOICE_AMOUNT);

// console text to fool people into using the dummy number
console.log(
  "%cTrying to cheat, huh? Well I won't stop you, but you never guess the variable name of the %crandNum%c, which you need to cheat your way to the right answer! %c*cough cough*",
  "font-size: 30px; background-color:#f5f5e9; color: black;",
  "font-size: 30px; background-color:#f5f5e9; color: black; text-decoration: underline dashed 4px red; font-weight: bold;",
  "font-size: 30px; background-color:#f5f5e9; color: black;",
  "font-size: 30px; background-color:#f5f5e9; color: black; font-weight: bold;",
);

// click for reset
btnReset.addEventListener("click", function (e) {
  const { keepPreferences, choiceAmount } = settings;

  const preferenceChoiceAmount = keepPreferences
    ? choiceAmount
    : DEFAULT_CHOICE_AMOUNT;

  init(preferenceChoiceAmount);
});

// click to guess
btnSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-play")) gameLogic(e);
});

// click to open options window
btnOptions.addEventListener("click", openModal);

// click to cancel options window
btnCancel.addEventListener("click", function (e) {
  e.preventDefault();
  closeModal();
});

// click to confirm new settings in the options window
btnConfirm.addEventListener("click", function (e) {
  e.preventDefault();
  settings.choiceAmount = Math.min(
    MAX_CHOICE,
    Math.max(4, +inputChoiceAmount.value),
  );

  settings.attemptAmount = inputAttemptAmount.value
    ? Math.min(50, Math.max(1, +inputAttemptAmount.value))
    : null;

  init(settings.choiceAmount);
  closeModal();
});

// checkbox to save settings
checkBox.addEventListener("change", function () {
  settings.keepPreferences = this.checked;
});

// click to receive a hint
btnHint.addEventListener("click", showHint);

//////////////////////////////////////
// future features, current bugs and other issues
//////////////////////////////////////

// future feature: stats per person
// future feature: dynamically limit the amount of hinst per choices or attempts.
// future feature: add an option to keep attempts preferences too, without breaking the default logic
