"use strict";
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissors_btn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
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
  userChoice = "rock";
  computerChooses();
}
function paperClick() {
  // console.log("PAPER");
  userChoice = "paper";
  computerChooses();
}
function scissorsClick() {
  // console.log("SCISSORS");
  userChoice = "scissors";
  computerChooses();
}
function computerChooses() {
  console.log("COMPUTER CHOOSES userchoice", userChoice);
  computerChoice = "scissors";
  handShakeStart();
}
function handShakeStart() {
  player1.classList.add("shake");
}

// mangler computerchoice - man kan ikke trykke flere gange fordi eventlistener ikke er fjernet
// lav en eventlistener så der sker noget når animationen stopper
// lav evt. random number (som i gæt et tal) for at vælge computerchoice
