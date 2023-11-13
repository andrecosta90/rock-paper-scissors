function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let selected_option = Math.floor(Math.random() * options.length);
    return options[selected_option];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 0;
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return -1;
        } else {
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return -1;
        } else {
            return 1;
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return -1;
        } else {
            return 1;
        }
    }

    console.error(`Invalid options = **${playerSelection}**!`);
}

function game() {

    let player_score = 0;
    let compute_score = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`game #${i}`);

        let playerSelection = prompt("Rock, Paper or Scissors? ");
        let computerSelection = getComputerChoice();


        let result = playRound(playerSelection, computerSelection);

        console.log(`option=${playerSelection}`);
        console.log(`result=${result}`);
        console.log(`playerSelection=${playerSelection}`);
        console.log(`computerSelection=${computerSelection}`);

        let message;

        switch (result) {
            case 1:
                message = `You Win! ${playerSelection} beats ${computerSelection}!`;
                player_score++;
                break;
            case -1:
                message = `You Lose! ${computerSelection} beats ${playerSelection}!`
                compute_score++;
                break;
            default:
                message = `It's a tie! Both players throw ${playerSelection}!`;
        }

        console.log(message);
        console.log(`Player Score = ${player_score}`);
        console.log(`Computer Score = ${compute_score}`);
    }

    console.log(`Player ${player_score} X ${compute_score} Computer`);
    console.log(
        player_score > compute_score ? 'Player is the WINNER!' :
            player_score < compute_score ? 'Computer is the WINNER!' : "It's a tie! Play again!"
    );
}

game();