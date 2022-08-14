#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/sayHello.js';
import getRandomInt from '../src/getRandomNumber.js';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfGamer = sayHello();
  console.log('What number is missing in the progression?');
  const bool = true;
  let countOfCorrectAnswers = 0;
  let correctAnswer;
  while (bool) {
    const progression = [];
    const randomFirstElement = getRandomInt(0, 100);
    const randomDifference = getRandomInt(1, 10);
    const randomNumberOfHiddenElement = getRandomInt(0, 9);
    progression.push(randomFirstElement);
    for (let i = 0; i < 10; i += 1) {
      progression.push(randomFirstElement + randomDifference * (i + 1));
      if (randomNumberOfHiddenElement === i) {
        correctAnswer = progression[i];
        progression[i] = '..';
      }
    }

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer == correctAnswer) {
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
export default progression;
progression();
