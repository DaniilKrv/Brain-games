#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/sayHello.js';
import getRandomInt from '../src/getRandomNumber.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfGamer = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const bool = true;
  let countOfCorrectAnswers = 0;
  let correctAnswer;
  while (bool) {
    const randomNumber = getRandomInt(-100, 100);
    console.log(`Question: ${randomNumber}`);

    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${nameOfGamer}!`);
      break;
    }

    if (countOfCorrectAnswers === 3) {
      console.log(`Congratulations, ${nameOfGamer}!`);
      break;
    }
  }
};
export default brainEven;
brainEven();
