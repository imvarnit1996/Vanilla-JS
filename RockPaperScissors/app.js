let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-Score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(userChoice) {
  console.log("called" + choice);
  const choices = ["r", "p", "s"];
  console.log(Math.floor(Math.random() * 3));
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice).classList;
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )} ${smallCompWord}.you win`;

  setTimeout(() => userChoice_div.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice).classList;
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    computerChoice
  )} ${smallCompWord}.you lose`;

  setTimeout(() => userChoice_div.remove("green-glow"), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice).classList;

  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} equals ${convertToWord(
    computerChoice
  )} ${smallCompWord}.its a draw`;

  userChoice_div.add("green-glow");
  setTimeout(() => userChoice_div.remove("green-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    Console.log("rock div");
    game("r");
  });

  paper_div.addEventListener("click", () => {
    Console.log("paper div");
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    Console.log("scissors div");
    game("s");
  });
}

main();
