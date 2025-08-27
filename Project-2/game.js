let userScore = 0;
let comScore = 0;
const playmove = document.querySelector("#play-move");
const choices = document.querySelectorAll(".gamepic");
const myScore = document.querySelector("#my-score");
const computerScore = document.querySelector("#com-score");

console.dir(choices);
const genComChoice = () => {
  const options = ["rock", "paper", "sessiors"];
  const randomVal = Math.floor(Math.random() * 3);
  return options[randomVal];
};

//Variable

const drawGame = () => {
  console.log("Game score was draw");
  playmove.innerText = "Game score was draw, play again";
  playmove.style.backgroundColor = "aqua";
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
     myScore.innerText = userScore;
    console.log("You win");
    playmove.innerText = `Congrats, you won ! your choice ${userChoice} beat computer choice ${comChoice}`;
    playmove.style.backgroundColor = "Green";
  } else {
    console.log("You Lose");
    playmove.innerText = `You lose, your choice ${userChoice} was beaten by computer choice ${comChoice}`;
    playmove.style.backgroundColor = "red";
    comScore++;
    computerScore.innerText = comScore;
  }
};
//Game closed
// const gameColosed = (userScore,userWin) =>{
//   if (mineScore ===  5){
//     console.log("Round finished")
//   };
// }
// gameColosed(userScore)

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const comChoice = genComChoice();
  console.log("computer choice= ", comChoice);
  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = "True";
    if (userChoice === "rock") {
      //paper and sessiors
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock and sessiors
      userWin = comChoice === "sessiors" ? false : true;
    } else {
      //sessior paper
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
