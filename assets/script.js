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

//

//

//

//

//

//what we need to begin the game
let userScore = 0;
let pcScore = 0;
let resualt = document.querySelector(".resualt").textContent;
let pcHand = "";
let userHand = "";
document.querySelector(".user-score").textContent = userScore;
document.querySelector(".pc-score").textContent = pcScore;
let image = document.getElementById("image");
let egami = document.getElementById("egami");

//game start , by hitting play button

document.querySelector(".play").addEventListener("click", function () {
  //creating random choices for computers hand
  let rand = Math.floor(Math.random() * 3) + 1;

  document.querySelector(".overlay").style.display = "flex";
  document.querySelector(".pc-hand").style.padding = "85px";
  egami.style.display = "flex";

  if (rand == 1) {
    egami.src = "rock.png";
  } else if (rand == 2) {
    egami.src = "paper.png";
  } else {
    egami.src = "scissors.png";
  }
});

//game play buttons after user clicks play button !

//clicking Rock :
document.querySelector(".rock").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
  image.src = "rock.png";
  document.querySelector(".user-hand").style.padding = "85px";
  document.querySelector(".img").style.display = "flex";
  if (egami.src == "scissors.png") {
    userScore++;
    if (userScore == 10) {
      document.querySelector(".resualt").style.display = "flex";
    }
  } else if ((egami.src = "paper.png")) {
    pcScore++;
    if (pcScore == 10) {
      document.querySelector(".resualt").style.backgroundcolor = "#c01313ff";
      document.querySelector(".resualt").style.display = "flex";
      resualt = "Lose !";
    }
  }
});
//clicking Paper :
document.querySelector(".paper").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
  image.src = "paper.png";
  document.querySelector(".user-hand").style.padding = "85px";

  document.querySelector(".img").style.display = "flex";

  if (egami.src == "rock.png") {
    userScore++;
    if (userScore == 10) {
      document.querySelector(".resualt").style.display = "flex";
    }
  } else if (egami.src == "scissors.png") {
    pcScore++;
    if (pcScore == 10) {
      document.querySelector(".resualt").style.backgroundcolor = "#c01313ff";
      document.querySelector(".resualt").style.display = "flex";
      resualt = "Lose !";
    }
  }
});
//clicking Scissors :
document.querySelector(".scissors").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
  image.src = "scissors.png";
  document.querySelector(".user-hand").style.padding = "85px";

  document.querySelector(".img").style.display = "flex";

  if (egami.src == "paper.png") {
    userScore++;
    if (userScore == 10) {
      document.querySelector(".resualt").style.display = "flex";
    }
  } else if (egami.src == "rock.png") {
    pcScore++;
    if (pcScore == 10) {
      document.querySelector(".resualt").style.backgroundcolor = "#c01313ff";
      document.querySelector(".resualt").style.display = "flex";
      resualt = "Lose !";
    }
  }
});
