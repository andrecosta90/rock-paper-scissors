// Constants
const OPTIONS = ["rock", "paper", "scissors"];
const WINNING_SCORE = 5;

// DOM Elements
const gameButtons = document.querySelector(".game-options");
const gameResult = document.querySelector(".game-result");

const btnPlayAgain = document.querySelector(".play-again");
const allButtons = gameButtons.querySelectorAll("button");

const roundElement = document.querySelector(".round-counter");

const playerOption = document.querySelector(".player-option");
const computerOption = document.querySelector(".computer-option");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const gameMessage = document.querySelector(".game-message");

// Game State
let countRound = 0;
let countPlayerScore = 0;
let countComputerScore = 0;

// Functions
function stringToEmoji(option) {
    switch (option) {
        case "rock":
            return "👊";
        case "paper":
            return "🫱";
        case "scissors":
            return "✌";
        default:
            throw new Error("Invalid option.");
    }

}

function replaceTextContent(element, content) {
    element.textContent = stringToEmoji(content);
}

function createStars(element, score) {
    if (score > 0) {
        const stars = []
        for (let i = 0; i < score; i++) {
            stars.push("⭐")
        }
        element.textContent = stars.join("");
    }
}

function getComputerChoice() {
    let selectedOption = Math.floor(Math.random() * OPTIONS.length);
    return OPTIONS[selectedOption];
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

function toggle() {
    btnPlayAgain.disabled = !btnPlayAgain.disabled;
    allButtons.forEach((button) => button.disabled = !button.disabled);
}

function restart() {
    countRound = 0;
    countPlayerScore = 0;
    countComputerScore = 0;
    gameMessage.textContent = "Let's Play !?";
    gameResult.textContent = "Who will be the winner ?";
    playerScore.textContent = "💤";
    computerScore.textContent = "💤";
    roundElement.textContent = "Round # 0";
}

// Event Listeners

btnPlayAgain.addEventListener('click', () => {
    toggle();
    restart();
});

gameButtons.addEventListener('click', (event) => {
    const gameOption = event.target.getAttribute("game-option");
    if (!OPTIONS.includes(gameOption)) return;


    let playerSelection = gameOption;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    console.log(playerSelection);
    console.log(computerSelection);

    replaceTextContent(playerOption, playerSelection);
    replaceTextContent(computerOption, computerSelection);

    let message;

    switch (result) {
        case 1:
            message = `You Win! ${stringToEmoji(playerSelection)} beats ${stringToEmoji(computerSelection)}!`;
            countPlayerScore++;
            break;
        case -1:
            message = `You Lose! ${stringToEmoji(computerSelection)} beats ${stringToEmoji(playerSelection)}!`
            countComputerScore++;
            break;
        default:
            message = `It's a TIE ! Both players throw ${stringToEmoji(playerSelection)}!`;
    }

    gameMessage.textContent = message;
    roundElement.textContent = `Round # ${++countRound}`;

    console.log(message);
    console.log(`Player Score = ${countPlayerScore}`);
    console.log(`Computer Score = ${countComputerScore}`);

    createStars(playerScore, countPlayerScore);
    createStars(computerScore, countComputerScore);

    if (Math.max(countPlayerScore, countComputerScore) === WINNING_SCORE) {
        gameResult.textContent = countPlayerScore > countComputerScore ? 'Player 🌎 is the Winner ! 🏆🏆🏆' :
            'Computer 🤖 is the Winner! 🏆🏆🏆';
        toggle();

    }

});