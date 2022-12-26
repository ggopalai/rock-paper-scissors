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

const btns = document.querySelectorAll('button');
const body = document.querySelector('body')
var roundCounter = 0;
var pcount = 0;
var ccount = 0;
var dcount = 0;

function playRoundWrapper(playerSelection, compSelection) {
    const winner = playRound(playerSelection, compSelection);
    const div = document.createElement('div');
    let roundText;
    if (winner == PLAYER_WIN) {
        roundText = `Round ${roundCounter + 1} - PLAYER WINS!`;
    } else if (winner == COMPUTER_WIN) { 
        roundText = `Round ${roundCounter + 1} - COMPUTER WINS!`;
    } else {
        roundText = `Round ${roundCounter + 1} - DRAW!`;
    }
    div.textContent = roundText;
    body.appendChild(div);
    if (winner == PLAYER_WIN) {
        pcount++;
    } else if (winner == COMPUTER_WIN) {
        ccount++;
    } else {
        dcount++;
    }
    roundCounter++;

    let fw;
    if (roundCounter == 5) {
        if (pcount > ccount) {
            fw = 'Player Wins';
        } else if (pcount < ccount) {
            fw = 'Computer Wins';
        } else {
            fw = 'Draw!';
        }
        const div2 = document.createElement('div');
        div2.textContent = fw;
        body.appendChild(div2);
    }

}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        playRoundWrapper(btn.innerHTML.toLowerCase(), getComputerChoice());
    })
});



