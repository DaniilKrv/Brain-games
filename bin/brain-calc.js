#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/sayHello.js';
import getRandomInt from '../src/getRandomNumber.js';

const brainCalc = () => {
    console.log('Welcome to the Brain Games!');
    const nameOfGamer = sayHello();
    console.log('What is the result of the expression?');
    let bool = true;
    let countOfCorrectAnswers = 0;
    let correctAnswer;
    while (bool) {
        const randomNumber1 = getRandomInt(0, 100);
        const randomNumber2 = getRandomInt(0, 100);
        const operators = ["+", "-", "*"];
        const randomOperator = operators[getRandomInt(0, 2)];
        console.log('Question: ' + randomNumber1 + ' ' + randomOperator + ' ' +  randomNumber2);

        if (randomOperator === "+") {
            correctAnswer = randomNumber1 + randomNumber2;
        } else if (randomOperator === "-") {
            correctAnswer = randomNumber1 - randomNumber2;
        } else if (randomOperator === "*") {
            correctAnswer = randomNumber1 * randomNumber2;
        }

        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer == correctAnswer) {
            console.log('Correct!');
            countOfCorrectAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${nameOfGamer}!`);
            break;
        }

        if (countOfCorrectAnswers === 3) {
            console.log("Congratulations, " + nameOfGamer+ "!");
            break;
        } 
    }
};
export default brainCalc;
brainCalc();
