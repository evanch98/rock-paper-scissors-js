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
    const div = document.querySelector('#container');
    const result = document.createElement('h1');
    const score = document.createElement('h2');
    const winner = document.createElement('h2');

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            play = playRound(button.id, computerPlay());
            result.textContent = play;

            if (play.includes("Win")) {
                playerScore += 1;
            } else if (play.includes("Lose")) {
                computerScore += 1;
            }
            score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
            if (playerScore >= 5 || computerScore >= 5) {
                if (playerScore > computerScore) {
                    winner.textContent = "Congratulations, you are the winner!";
                } else if (playerScore < computerScore) {
                    winner.textContent = "You lose! The winner is computer!";
                }
            }
        });
    });
    div.appendChild(result);
    div.appendChild(score);
    div.appendChild(winner);
}

game();
