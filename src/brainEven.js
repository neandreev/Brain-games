import readlineSync from 'readline-sync';
import { getRandomInt } from './util.js';
import {
  getName, evenRules, wrong, correct,
} from './cli.js';

const isEven = (num) => (num % 2 === 0);
const getCorrectAnswer = (boolean) => ((boolean) ? 'yes' : 'no');

const playGame = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt = getRandomInt(0, 20);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(isEven(randomInt));

    if (answer === correctAnswer) {
      correct();
    } else {
      wrong(name, answer, correctAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

export default () => {
  const name = getName();
  evenRules();

  playGame(name);
};
