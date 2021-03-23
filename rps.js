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

        return 1;
    }
    // if tie
    else if (playerSelection === computerSelection) {
        return 0;
    }

    // otherwise it's computer win
    else {
        return -1;
    }
}

function game() {
    
    playerScore = 0;
    computerScore = 0;
    
    for (i = 0; i < 5; ++i) {
        playerSelection = prompt("Your selection");
        computerSelection = computerPlay();
        result = play(playerSelection, computerSelection);
        
        switch (result) {
            case 1:
                console.log("You win this round!");
                playerScore++;
                break;
            case 0:
                console.log("It's a tie!");
                break;
            case -1:
                console.log("Computer wins this round");
                computerScore++;
                break;
        }
    }

    console.log("Game Over!")
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer Score: ${computerScore}`)
    
    if (playerScore > computerScore) {
        console.log("Player wins the game!")
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins the game")
    }
    else {
        console.log("The game is a tie!")
    }
}