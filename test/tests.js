// IMPORT MODULES under test here:
//import { example } from '../example.js';

import { compareNumbers } from "../assets/utils.js"

const test = QUnit.test;

test('compares user guess matches correct number return correct', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(3,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns -1 if guessed number is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('returns 1 if guessed number is too high', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5,3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});