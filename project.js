function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    let random_index = parseInt((Math.random() * 3));
    return choice[random_index];
}

function titleCase(astring) {
    return astring.replace(astring.charAt(0), astring.charAt(0).toUpperCase());
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You Win! Rock beats Scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "You Win! Paper beats Rock.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "You Win! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "You Lose! Scissors beats Paper.";
    } else {
        result = `Tie! ${titleCase(playerSelection)} equals ${titleCase(computerSelection)}.`;
    }
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = prompt("'Rock', 'Paper', or 'Scissors?'");
    let computerSelection = computerPlay();
    play = playRound(playerSelection, computerSelection);  
    console.log(play);
    if (play.includes("Win")) {
        playerScore += 1;
    } else if (play.includes("Lose")) {
        computerScore += 1;
    }
    
    console.log("Player: " + playerScore + " Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Congratulations, you are the winner!");
    } else if (playerScore < computerScore) {
        console.log("You lose! The winner is computer!");
    } else {
        console.log("It's a tie!")
    }
}

game();
