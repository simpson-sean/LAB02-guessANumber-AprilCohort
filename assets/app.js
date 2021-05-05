// import functions and grab DOM elements

import { compareNumbers } from './utils.js';

const userInput = document.getElementById('user-input');
const subButton = document.getElementById('sub-button');
const gameResult = document.getElementById('game-result');
const attemptsRemaining = document.getElementById('attempts-remaining');

const randomNumber = Math.ceil(Math.random() *20);


//initialize state
 let userAttempts = 5;

// set event listeners to update state and DOM
subButton.addEventListener('click', () => {
    //Console log to validate button click
    //console.log('thing to log here');
    const results = compareNumbers(userInput.valueAsNumber, randomNumber);
    console.log(results)
    
    if (results === 0) {
        gameResult.textContent = "You win!";
        userAttempts = 0;
        
    }
    if (results === -1) {
        gameResult.textContent = 'Too Low!';
        userAttempts = userAttempts - 1;
        attemptsRemaining.textContent = userAttempts;
    }
    if (results === 1) {
        gameResult.textContent = 'Too High!';
        userAttempts = userAttempts - 1;
        attemptsRemaining.textContent = userAttempts;
    }
    if (userAttempts === 0) {
        attemptsRemaining.textContent = 'Game Over.';
        return;

    }


    

});


