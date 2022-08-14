#!/usr/bin/env node
import readlineSync from 'readline-sync';
import sayHello from '../src/sayHello.js';
import getRandomInt from '../src/getRandomNumber.js';

function Prime(num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}

const isPrime = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfGamer = sayHello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const bool = true;
  let countOfCorrectAnswers = 0;
  let correctAnswer;
  while (bool) {
    const randomElement = getRandomInt(0, 100);
    console.log(`Question: ${randomElement}`);
    const userAnswer = readlineSync.question('Your answer: ');
    correctAnswer = Prime(randomElement);

    if (correctAnswer == true) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

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
export default isPrime;
isPrime();
