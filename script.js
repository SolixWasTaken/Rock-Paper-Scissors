let humanScore = 0;
let computerScore = 0;

const CHOICE_ROCK = "rock";
const CHOICE_PAPER = "paper";
const CHOICE_SCISSORS = "scissors";

let currentRound = 0;
const MAX_ROUNDS = 5;

function getHumanChoice() {
    return window.prompt('Enter your choice.').toLowerCase();
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            return CHOICE_ROCK;

        case 2: 
            return CHOICE_PAPER;

        case 3: 
            return CHOICE_SCISSORS;
    }
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log('Its a tie.');
    }
    else if (humanChoice === CHOICE_ROCK && computerChoice === CHOICE_SCISSORS || 
        humanChoice === CHOICE_PAPER && computerChoice === CHOICE_ROCK ||
        humanChoice === CHOICE_SCISSORS && computerChoice === CHOICE_PAPER) {
            humanScore++;
    }
    else {
        computerScore++;
    }
    console.log(`Human Choice: ${humanChoice}\nComputer Choice: ${computerChoice}`);
    console.log(`Human Score: ${humanScore}\nComputer Score: ${computerScore}`);

    if (currentRound === MAX_ROUNDS && humanScore !== computerScore) {
        const winner = humanScore > computerScore ? 'Human has won the match!' : 'Computer has won the match :(';
        console.log(winner);
    } 
    else if (currentRound === MAX_ROUNDS) {
        console.log("Nobody won it was a tie.");
    }
}

for (let i = 0; i < MAX_ROUNDS; i++) {
    currentRound = i + 1;
    playGame();
}