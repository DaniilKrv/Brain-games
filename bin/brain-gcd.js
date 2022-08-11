#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/sayHello.js';
import getRandomInt from '../src/getRandomNumber.js';

function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

const gcd = () => {
    console.log('Welcome to the Brain Games!');
    const nameOfGamer = sayHello();
    console.log('Find the greatest common divisor of given numbers.');
    let bool = true;
    let countOfCorrectAnswers = 0;
    let correctAnswer;
    while (bool) {
        const randomNumber1 = getRandomInt(0, 100);
        const randomNumber2 = getRandomInt(0, 100);
        console.log('Question: ' + randomNumber1 + ' ' +  randomNumber2);
        correctAnswer = NOD(randomNumber1, randomNumber2);
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
export default gcd;
gcd();
