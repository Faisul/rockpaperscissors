const option = ['rock','paper','scissors'];

let getComputerChoice = function () {
    let choice = Math.round(Math.random() *10);
    console.log(choice);
    if ((choice % 2) === 0) {
        return option[0];
    } else if((choice % 3) === 0 ) {
        return option[1];
    } else {
        return option[2];
    }
}

let getHumanChoice = function() {
  let choice = parseInt( prompt("select 'rock:0' or 'paper:1' or 'scissors:2' "));
  return option[choice];
}

let playRound = function(computerChoice, humanChoice ) {
    if (option.indexOf(computerChoice) ==  option.indexOf(humanChoice)){
        console.log("it's a draw");
    } else if( option.indexOf(computerChoice) ==2 
        && option.indexOf(humanChoice) == 0  || option.indexOf(computerChoice) + 1 == option.indexOf(humanChoice)) {
        console.log("you won! " + humanChoice +" beats " + computerChoice);
        humanScore++;
    } else {
        console.log("you lose! " + computerChoice +" beats " + humanChoice);
        computerScore++;
    }
    
}

let humanScore=0, computerScore = 0;

let playGame = function() {
    
    let maxRound = 5;
    for(let currentRound = 0;  currentRound < maxRound; currentRound++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    alert("your score is: " +humanScore+"; computer score is: "+ computerScore);
}

playGame();
