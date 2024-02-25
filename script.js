function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice(choice) {
    let playerChoice = choice;
    //prompt("Choose between rock,paper or scissors: ").toLowerCase();
    if (playerChoice !=="rock" && playerChoice !=="paper" && playerChoice !=="scissors") {
        alert("That choice is not valid. Please choose rock,paper or scissors: ")
        return null;
    }
    return playerChoice;
}

function round(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors") {
        let log ="Great job you won! Rock beats scissors. ";
        messageSelector.textContent = log;
        return log
    } else if(playerSelection ==="paper" && computerSelection ==="rock") {
        log = "Great job you won! Paper beats rock. ";
        messageSelector.textContent = log;
        return log
    } else if(playerSelection === "scissors" && computerSelection ==="paper") {
        log = "Great job you won! Scissors beat paper. ";
        messageSelector.textContent = log;
        return log
    } else if(playerSelection === computerSelection) {
        log = "It's a tie!";
        messageSelector.textContent = log;
        return log
    } else {
        log = "Sorry you lost. Try again. "
        messageSelector.textContent = log;
        return log
    }
}

/*
function game () {
    let PlayerScore = 0;
    let ComputerScore = 0;

    for(let i = 0; i<5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let result = round(playerSelection, computerSelection);
        alert(result);
        if (result === "Great job you won! Rock beats scissors." || result === "Great job you won! Paper beats rock." || result === "Great job you won! Scissors beat paper. ") {
            PlayerScore++
        } else if (result === "Sorry you lost. Try again. ") {
            ComputerScore++
        }
    }

    if (PlayerScore>ComputerScore ) {
        alert("Congratulations, you win the game!");
    } else if(PlayerScore<ComputerScore) {
        alert("Sorry, you lost the game.");
    } else {
        alert("The game is a tie! ");
    }
}

game();
*/
function playGame(choice) {
    let computerPick = getComputerChoice();
    result = round(choice,computerPick);
    if (result.includes("Great job you won!"))  {
        playerScore++;      
    } else if (result.includes("Sorry you lost.")) {
        computerScore++;    
    }   
    playerScoreSelector.textContent = `Player score: ${playerScore}`;
    computerScoreSelector.textContent = `Computer score: ${computerScore}`;

    if(playerScore == 5) {
        let message = confirm("Great job you won. Do you want to play again?");
        if(message) {
            playerScore = 0;
            computerScore = 0;
        }else {
            alert("Thank you for playing");
        }
    }else if (computerScore == 5) {
        message = confirm("Sorry you lost. Do you want to play again?");
        if(message) {
            playerScore = 0;
            computerScore = 0;
        }else {
            alert("Thank you for playing");
        }
    }
}







//let selection;
let playerScore = 0;
let computerScore = 0;


const rockSelector = document.querySelector(".rock-button");
const paperSelector = document.querySelector(".paper-button");
const scissorsSelector = document.querySelector(".scissors-button");
const computerScoreSelector = document.querySelector(".computer-score");
const playerScoreSelector = document.querySelector(".player-score");
const messageSelector = document.querySelector(".message");

rockSelector.addEventListener("click",()=>playGame("rock"));

paperSelector.addEventListener("click",()=>playGame("paper"));

scissorsSelector.addEventListener("click",()=>playGame("scissors"));





//paperSelector.addEventListener("click",getPlayerChoice("paper"));
//scissorsSelector.addEventListener("click",getPlayerChoice("scissors"));








/*
let next = getPlayerChoice("rock");

console.log(next);
*/



