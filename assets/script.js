"use strict";

/*these codes are for the concept of rock paper scissors on the console , we will use these for better understanding the game in the new version that i personally created it from scratch with my own sick ideas :)*/

/*
let humanScore = 0;
let computerScore = 0;
let pcHand = "";
let userHand = "";

function playRound(ComputerChoice, HumanChoice) {
  if (userHand == pcHand) {
    console.log(`Try Again ! Its a Draw !!!`);
  } else if (
    (userHand == "rock" && pcHand == "scissors") ||
    (userHand == "paper" && pcHand == "rock") ||
    (userHand == "scissors" && pcHand == "paper")
  ) {
    console.log(
      `congrats! user won with ${userHand} against computer with ${pcHand}`
    );
    humanScore += 1;
  } else {
    console.log(
      `BadLuck! user lost with ${userHand} against computer with ${pcHand}`
    );
    computerScore += 1;
  }
}

function getHumanChoice() {
  userHand = prompt("Rock , Paper , Scissors ?");
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;

  if (rand == 1) {
    pcHand = "rock";
  } else if (rand == 2) {
    pcHand = "paper";
  } else {
    pcHand = "scissors";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(computerSelection, humanSelection);
*/
let userScore = 0;
let pcScore = 0;
let resualt = document.querySelector(".resualt").textContent;
let pcHand = "";
let userHand = "";

document.querySelector(".play").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "flex";
});

const scores = function () {
  userScore = 0;
  pcScore = 0;
  document.querySelector(".user-score").textContent = userScore;
  document.querySelector(".pc-score").textContent = pcScore;

  for (let i = 0; i <= 10; i++) {
    if (
      (userHand == "rock" && pcHand == "scissors") ||
      (userHand == "paper" && pcHand == "rock") ||
      (userHand == "scissors" && pcHand == "paper")
    ) {
      userScore += 1;
      document.querySelector(".body").Style.backgroundcolor = "#2c8810ff";
    } else if (
      (pcHand == "rock" && userHand == "scissors") ||
      (pcHand == "paper" && userHand == "rock") ||
      (pcHand == "scissors" && userHand == "paper")
    ) {
      pcScore += 1;
      document.querySelector(".body").style.backgroundcolor = "#c01313ff";
    } else if (userScore == 10) {
      document.querySelector(".resualt").style.display = "flex";
    } else if (pcScore == 10) {
      document.querySelector(".resualt").style.display = "flex";
      document.querySelector(".resualt").style.backgroundcolor = "#c01313ff";
      resualt = "Lose !";
    }
  }
};

const play = function () {
  let rand = Math.floor(Math.random() * 3) + 1;

  if (rand == 1) {
    pcHand = "rock";
  } else if (rand == 2) {
    pcHand = "paper";
  } else {
    pcHand = "scissors";
  }
};

//game start buttons after user clicks play button !
document.querySelector(".rock").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
});
document.querySelector(".paper").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
});
document.querySelector(".scissors").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
});
