"use strict";
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");
let userChoice;
let computerChoice;

document.addEventListener("DOMContentLoaded", init);

function init() {
  // console.log("Hej!");
  rock_btn.addEventListener("click", rockClick);
  paper_btn.addEventListener("click", paperClick);
  scissors_btn.addEventListener("click", scissorsClick);
}
function rockClick() {
  // console.log("ROCK");
  hideTexts();
  userChoice = "rock";
  computerChooses();
}
function paperClick() {
  // console.log("PAPER");
  hideTexts();
  userChoice = "paper";
  computerChooses();
}
function scissorsClick() {
  // console.log("SCISSORS");
  hideTexts();
  userChoice = "scissors";
  computerChooses();
}
function computerChooses() {
  console.log("COMPUTER CHOOSES userchoice", userChoice);
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  handShakeStart();
}
function handShakeStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", handShakeEnd);
}

function handShakeEnd() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  showHands();
  determineWinner();

  player1.removeEventListener("animationend", handShakeEnd);
}

function showHands() {
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);
}

function hideTexts() {
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");
}

function determineWinner() {
  hideTexts();

  if (userChoice === computerChoice) {
    drawText.classList.remove("hidden");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    winText.classList.remove("hidden");
  } else {
    loseText.classList.remove("hidden");
  }
}
