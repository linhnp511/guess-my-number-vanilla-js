"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
const defaultScore = 20;
const defaultBackgroundColor = "#222";
const defaultSecretNumberDisplay = "?";
const defaultSecretNumberWidth = "15rem";
const winSecretNumberWidth = "30rem";
const winBackgroundColor = "#60b347";
const loseBackgroundColor = "#ff4646";
const userName = prompt(`Your domain: `);

let score = defaultScore;
let highscore = 0;

// valueOfSecretNumber(secretNumber);

// Logic with input
document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);
  console.log(input, typeof input);

  // if input != number -> "No number", ko tru diem
  if (!input) {
    displayMessage("Please input a number!");
  }
  // if input == secretNumber -> "Win", doi nen xanh, doi ? bang secretNumber va bigger size, log highscore
  else if (input === secretNumber) {
    displayMessage(`Congrats ${userName}, you're so cool!`);
    widthOfSecretNumber(winSecretNumberWidth);
    backgroundColor(winBackgroundColor);
    valueOfSecretNumber(secretNumber);
    newHighScore(score);
    disabledBtn();
  }
  // if input > < secretNumber -> "Too high/low", tru 1 diem, neu score = 0 thi "you lose" va ko an duoc nua.
  else if (input !== secretNumber) {
    checkLosing(input);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  displayMessage(`Start guessing...`);
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = defaultScore;
  backgroundColor(defaultBackgroundColor);
  valueOfSecretNumber(defaultSecretNumberDisplay);
  widthOfSecretNumber(defaultSecretNumberWidth);
  enabledBtn();
});

// functions
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function widthOfSecretNumber(width) {
  document.querySelector(".number").style.width = width;
}

function valueOfSecretNumber(value) {
  document.querySelector(".number").textContent = value;
}

function backgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function newHighScore() {
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = score;
  }
}

function logScore(score) {
  document.querySelector(".score").textContent = score;
}

function checkLosing(input) {
  if (score <= 1) {
    displayMessage(`Sorry ${userName}, you've lost the game.`);
    backgroundColor(loseBackgroundColor);
    logScore(0);
  } else {
    score = score - 1;
    logScore(score);
    displayMessage(
      input < secretNumber ? "Too low..." : "Too high. Are you high?"
    );
  }
}

function disabledBtn() {
  document.querySelector(".check").disabled = true;
}

function enabledBtn() {
  document.querySelector(".check").disabled = false;
}
