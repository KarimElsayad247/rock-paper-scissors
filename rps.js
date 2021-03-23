moves = ["rock", "paper", "scissors"];

function computerPlay() {
    return moves[Math.floor(Math.random()*3)];
}

function play(playerSelection, computerSelection) {
    
    // make user input case insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // if player win
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock"    ||
        playerSelection === "scissors" && computerSelection === "paper") {

        return `You Win! ${playerSelection} beats ${computerSelection}!`;;
    }
    // if tie
    else if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    // otherwise it's computer win
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}