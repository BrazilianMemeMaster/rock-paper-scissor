// function will return random value from an array with rock paper and scissors
// the function will generate a random number from 1 to 3 that corresponds with the string index inside the array

const options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

// the function will take two parameters: the user input and the computer generated response
// it will return a string declaring the winner, based on if statements:
// if rock and paper paper wins; if rock and scissors rock wins; if paper and scissors scissors wins;
// user input always has the first letter capitalized, by slicing the input and using the toUpperCase built-in function

function play(playerSelection, computerSelection){    
    if (playerSelection === computerSelection){
        return "It's a draw!"
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper'){
        return "You Lose! Paper beats Rock!"
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return "You Win! Rock beats Scissors!"
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return "You Win! Scissors beats Paper!"
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return "You Lose! Rock beats Scissors!"
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
        return "You Win! Paper beats Rock!"
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return "You Lose! Scissors beats Paper!"
    } else {
        return "Invalid Input!"
    }
}

function capitalize(str){
    const firstLetter = str.charAt(0);
    const remaining = str.substring(1).toLowerCase();
    return firstLetter.toUpperCase() + remaining;
}

const playerSelection = capitalize(prompt());
const computerSelection = getComputerChoice();
