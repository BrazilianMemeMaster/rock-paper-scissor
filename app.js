// function will return random value from an array with rock paper and scissors
// the function will generate a random number from 1 to 3 that corresponds with the string index inside the array

const options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}