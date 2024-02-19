function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose between rock,paper or scissors: ").toLowerCase();
    if (playerChoice !=="rock" && playerChoice !=="paper" && playerChoice !=="scissors") {
        alert("That choice is not valid. Please choose rock,paper or scissors: ")
        return null;
    }
    return playerChoice;
}

function round(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors") {
        return("Great job you won! Rock beats scissors.");
    } else if(playerSelection ==="paper" && computerSelection ==="rock") {
        return("Great job you won! Paper beats rock.");
    } else if(playerSelection === "scissors" && computerSelection ==="paper") {
        return("Great job you won! Scissors beat paper. ");
    } else if(playerSelection === computerSelection) {
        return("It's a tie!")
    } else {
        return("Sorry you lost. Try again. ")
    }
}
