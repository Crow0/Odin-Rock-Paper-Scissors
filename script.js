function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
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









