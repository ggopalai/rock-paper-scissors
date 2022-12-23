function getComputerChoice() {
    values = ['rock', 'paper', 'scissor']
    return values[Math.floor(Math.random() * 3)]
}

function playRound(playSelection, compSelection) {
    playSelection = playSelection.toLowerCase()

    if (playSelection == 'rock' && compSelection == 'scissor') {
        return 'You win! Rock beats Scissor'
    } else if (playSelection == 'scissor' && compSelection == 'paper') {
        return 'You win! Scissor beats paper'
    } else if (playSelection == 'paper' && compSelection == 'rock') {
        return 'You win! Paper beats Rock'
    } else if (playSelection == compSelection) {
        return 'Game tied!'
    } else {
        compSelection = compSelection[0].toUpperCase() + compSelection.slice(1).toLowerCase()
        playSelection = playSelection[0].toUpperCase() + playSelection.slice(1).toLowerCase()
        return `You Lose! ${compSelection} beats ${playSelection}`
    }
}

playSelection = prompt('Choose rock, paper or scissor.')
console.log(playRound(playSelection, getComputerChoice()))