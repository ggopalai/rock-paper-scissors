const PLAYER_WIN = 'p';
const COMPUTER_WIN = 'c';
const DRAW = 'd';
function getComputerChoice() {
    values = ['rock', 'paper', 'scissor'];
    return values[Math.floor(Math.random() * 3)];
}

function playRound(playSelection, compSelection) {
    playSelection = playSelection.toLowerCase();
    if (playSelection == 'rock' && compSelection == 'scissor') {
        return PLAYER_WIN;
    } else if (playSelection == 'scissor' && compSelection == 'paper') {
        return PLAYER_WIN;
    } else if (playSelection == 'paper' && compSelection == 'rock') {
        return PLAYER_WIN;
    } else if (playSelection == compSelection) {
        return DRAW;
    } else {
        return COMPUTER_WIN;
    }
}

function game(n) {
    let playerCount = 0;
    let compCount = 0;
    let drawCount = 0;

    for (let i = 0; i < n; i++) {
        playSelection = prompt('Enter your selection');
        round = playRound(playSelection, getComputerChoice());
        if (round == PLAYER_WIN) {
            playerCount++;
            console.log(`Round ${i+1}, Player wins!`);
        } else if (round == COMPUTER_WIN) {
            compCount++;
            console.log(`Round ${i+1}, Computer wins!`);
        } else {
            drawCount++;
            console.log(`Round ${i+1}, It's a draw!`);
        }
    }
    console.log('Game completed\n')
    if (playerCount > compCount) {
        console.log('Player WINS!');
    } else if (playerCount < compCount) {
        console.log('Computer WINS!');
    } else {
        console.log('Its a DRAWWWW!');
    }
}

n = prompt('Welcome to Rock Paper Scissors. How many rounds to you want in a game?');
game(n);
