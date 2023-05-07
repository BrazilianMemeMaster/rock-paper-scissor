// function will return random value from an array with rock paper and scissors
// the function will generate a random number from 1 to 3 that corresponds with the string index inside the array

const options = ['Rock', 'Paper', 'Scissors']

function computerSelection() {
    return options[Math.floor(Math.random() * 3)];
}


function playerSelection() {
    let str = prompt('Choose Rock, Paper or Scissors');
    const firstLetter = str.charAt(0);
    const remaining = str.substring(1).toLowerCase();
    return firstLetter.toUpperCase() + remaining;
}

// the function will take two parameters: the user input and the computer generated response
// it will return a string declaring the winner, based on if statements:
// if rock and paper paper wins; if rock and scissors rock wins; if paper and scissors scissors wins;
// user input always has the first letter capitalized, by slicing the input and using the toUpperCase built-in function


function play(playerSelection, computerSelection) {
    let roundWinner = '';
    if (playerSelection === computerSelection) {
        roundWinner = "It's a draw!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        roundWinner = "You Lose! Paper beats Rock!";
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        roundWinner = "You Win! Rock beats Scissors!";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        roundWinner = "You Win! Scissors beats Paper!";
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        roundWinner = "You Lose! Rock beats Scissors!";
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        roundWinner = "You Win! Paper beats Rock!";
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        roundWinner = "You Lose! Scissors beats Paper!";
    } else {
        roundWinner = "Invalid Input!"
    }
    return roundWinner;
}

function game(){
    let playerTurn = '';
    let computerTurn = '';
    let computerScore = 0;
    let playerScore = 0;
    let roundResult = '';
    let rounds = prompt('How many rounds you want to play?')
    for (let i = 0; i < rounds; i++){
        playerTurn = playerSelection();
        computerTurn = computerSelection();
        roundResult = play(playerTurn, computerTurn);
        if (roundResult.includes('Win')){
            console.log(computerTurn);
            console.log(playerTurn);
            playerScore += 1;
            console.log(roundResult + ' The Score Is: ' + playerScore + ' x ' + computerScore)
        } else if (roundResult.includes('Lose')){
            console.log(computerTurn);
            console.log(playerTurn);
            computerScore += 1;
            console.log(roundResult + ' The Score Is: ' + playerScore + ' x ' + computerScore)
        } else if (roundResult.includes('draw')){
            console.log(computerTurn);
            console.log(playerTurn);
            console.log(roundResult + ' The Score Is: ' + playerScore + ' x ' + computerScore)
        } else {
            return 'Something went wrong'
        }
    }
}

game();