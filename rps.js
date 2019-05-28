function computerPlay(){
  var rand = Math.floor(Math.random() * 3);
  var res = "";
  if(rand == 0){
    res = "rock";
  }
  else if (rand == 1) {
    res = "paper";
  }
  else {
    res = "scissors";
  }
  return res;
}

var playerWins = 0;
var cpuWins = 0;
var gameDone = false;

function playRound(pS,cS){
  pS = pS.toLowerCase();
  const comment = document.querySelector('#commentary');
  const pScore = document.querySelector('#playerscore');
  const cScore = document.querySelector('#cpuscore');
  comment.textContent = decideWin(pS,cS);
  pScore.textContent = playerWins;
  cScore.textContent = cpuWins;
  if(playerWins >= 5){
    alert('You got 5 wins first, you win!');
    gameDone = true;
    comment.textContent = "Game Finished, click button to start again"
  }
  if(cpuWins >= 5){
    alert('The CPU got 5 wins first, you lose!');
    gameDone = true;
    comment.textContent = "Game Finished, click button to start again"
  }
}

function decideWin(x,y){
  if(x == "rock" && y == "scissors"){
    playerWins++;
    return "You win! Rock beats Scissors";
  }
  else if(x == "rock" && y == "paper"){
    cpuWins++;
    return "You lose! Paper beats Rock";
  }
  else if(x == "paper" && y == "rock"){
    playerWins++;
    return "You win! Paper beats Rock"
  }
  else if(x == "paper" && y == "scissors"){
    cpuWins++;
    return "You lose! Scissors beats Paper"
  }
  else if(x == "scissors" && y == "paper"){
    playerWins++;
    return "You win! Scissors beats Paper"
  }
  else if(x == "scissors" && y == "rock"){
    cpuWins++;
    return "You lose! Rock beats Scissors"
  }
  else{
    return "You tied!"
  }
}

function game(){
  var playerWins = 0;
  var compWins = 0;
  for(i = 0; i < 5; i++){
    pS = window.prompt("Rock, Paper, Scissors?");
    cS = computerPlay();
    res = decideWin(pS,cS);
    console.log(res);
    if(res.includes("You win!")){
      playerWins++;
    }
    else if(res.includes("You lose!")) {
      compWins++;
    }
  }
  if(playerWins > compWins){
    console.log("You won the game!");
  }
  else if(compWins > playerWins){
    console.log("You lost the game!");
  }
  else{
    console.log("You Tied the game!")
  }
}

function callRound(e){
  if(gameDone){
    playerWins = 0;
    cpuWins = 0;
    const comment = document.querySelector('#commentary');
    const pScore = document.querySelector('#playerscore');
    const cScore = document.querySelector('#cpuscore');
    pScore.textContent = playerWins;
    cScore.textContent = cpuWins;
    gameDone = false;
  }
  var playerChoice = this.getAttribute('data-type');
  playRound(playerChoice, computerPlay());
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', callRound);
});
