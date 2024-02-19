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