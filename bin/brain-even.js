#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const sayHello = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
    return name;
};

const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const nameOfGamer = sayHello();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let bool = true;
    let countOfCorrectAnswers = 0;
    let correctAnswer;
    while (bool) {
        const randomNumber = getRandomInt(-100, 100);
        console.log('Question: ' + randomNumber);

        if (randomNumber % 2 === 0) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }

        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === correctAnswer) {
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
export default brainEven;
brainEven();
