// import functions and grab DOM elements

import { compareNumbers, toggleClass } from './utils.js';

const userInput = document.getElementById('user-input');
const subButton = document.getElementById('sub-button');
const gameResult = document.getElementById('game-result');
const resetButton = document.getElementById('reset-button');
const attemptsRemaining = document.getElementById('attempts-remaining');


//initialize state
 let userAttempts = 5;
 let totalWins = 0;
 let totalPlays = 0;
 let randomNumber = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    //Console log to validate button click
    //console.log('thing to log here');
    const results = compareNumbers(userInput.valueAsNumber, randomNumber);
    // console.log(results)
    
// Game Logic
    if (results === 'You win') {
        gameResult.textContent = compareNumbers(userInput.valueAsNumber, randomNumber);
        totalWins++;
        totalPlays++;
        randomNumber = Math.ceil(Math.random() * 20);
        toggleClass();
    }
    if (results === 'Too low' || results === 'Too high') {
        gameResult.textContent = compareNumbers(userInput.valueAsNumber, randomNumber);
        userAttempts--;
        attemptsRemaining.textContent = userAttempts;
    }

// Reset Logic
    if (userAttempts === 0) {
        attemptsRemaining.textContent = 'Game Over.';
        totalPlays++;
        randomNumber = Math.ceil(Math.random() * 20);
        userAttempts = 5;
        toggleClass();
    }
});

resetButton.addEventListener('click', () => {
    toggleClass();
    randomNumber = Math.ceil(Math.random() * 20);
    userAttempts = 5;
    attemptsRemaining.textContent = userAttempts;
    gameResult.textContent = '';
    userInput.value = '';
})
