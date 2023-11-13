function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let selected_option = Math.floor(Math.random() * options.length);
    return options[selected_option];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! Both players throw ${playerSelection}!`
    }

    let bad_message = "You Lose!";
    let good_message = "You Win!";

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return `${bad_message} Paper beats Rock!`;
        } else {
            return `${good_message} Rock beats Scissors!`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return `${bad_message} Scissors beats Paper!`;
        } else {
            return `${good_message} Paper beats Rock!`;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return `${bad_message} Rock beats Scissors!`;
        } else {
            return `${good_message} Scissors beats Paper!`;
        }
    }

    console.error(`Invalid options = **${playerSelection}** ! You should choose between: rock, paper and scissors.`);
}

console.log("Hello World");