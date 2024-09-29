const option = ['rock','paper','scissors'];

let getComputerChoice = function () {
    let choice = Math.round(Math.random() *10);
    
    if ((choice % 2) === 0) {
        // console.log("compute choice: "+ option[0]);
        return option[0];
    } else if((choice % 3) === 0 ) {
        // console.log("compute choice: "+ option[1]);
        return option[1];
    } else {
        // console.log("compute choice: "+ option[2]);
        return option[2];
    }
}

let playRound = function(computerChoice, playerSelection ) {
    console.log("you selected: " + playerSelection +" | " + "computer selected: "+ computerChoice);
    if (computerChoice ==  playerSelection){
        console.log("it's a draw");
    } else if( computerChoice == 'scissors' 
        && playerSelection == 'rock'  || option.indexOf(computerChoice) + 1 == option.indexOf(playerSelection)) {
        console.log("you won! " + playerSelection +" beats " + computerChoice);
        humanScore++;
    } else {
        console.log("you lose! " + computerChoice +" beats " + playerSelection);
        computerScore++;
    }
    
}




let humanScore=0, computerScore = 0;

let playGame = function(event) {
    let humanChoice = event.target.id;
    let winScore = 5;
    playRound(getComputerChoice(), humanChoice);
    console.log("your score is: " + humanScore +"; computer score is: "+ computerScore);
    if (humanScore <5 && computerScore <5) {
        return;
    }

    showResult(winScore);
}

function showResult(winScore) {
    let result = document.querySelector("#result");
    let message = '' ;

    if(humanScore === winScore ) {
        // console.log("You win!!!");
        message = "You win!!!";
    } else if(computerScore == winScore) {
        // console.log("Computer win!!!");
        message = "Computer wins!!!";
    }
    let h2 = document.createElement("h2");
    h2.textContent = message;
    result.appendChild(h2);
    humanScore = 0; computerScore = 0;
}

// playGame();





let getHumanChoice = function(id) {
    //   let choice = parseInt( prompt("select 'rock:0' or 'paper:1' or 'scissors:2' "));
    console.log("player selected: " + id);
    return id;
}

let selection = document.querySelector(".play");

selection.addEventListener("click", (event) => playGame(event));

