
//Functions

export function compareNumbers(userGuess, correctNum) {
    if (userGuess === correctNum)  {
        return 'You win';
    }
    if (userGuess < correctNum) {
        return 'Too low';
    }
    if (userGuess > correctNum)
        return 'Too high';
};

export function toggleClass(a) {
    const resetButton = document.getElementById('reset-button');
    const subButton = document.getElementById('sub-button');
    resetButton.classList.toggle('hide');
    subButton.classList.toggle('hide');
};