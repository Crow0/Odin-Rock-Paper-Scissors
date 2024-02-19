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
