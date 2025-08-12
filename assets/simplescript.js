//decided to create the console version of the game in another file , more to test branch and pull and merge stuff on github :)

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
