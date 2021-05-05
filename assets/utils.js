
//Functions

export function compareNumbers(userGuess, correctNum) {
    if (userGuess === correctNum)  {
        return 0;
    }
    if (userGuess < correctNum) {
        return -1;
    }
    if (userGuess > correctNum)
        return 1;
};