import _ from 'lodash';
import { primeRules } from '../cli.js';
import playGame from '../engine.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const getCorrectAnswer = (boolean) => ((boolean) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const randomInt = _.random(100);
  const correctAnswer = getCorrectAnswer(isPrime(randomInt));

  return [randomInt, correctAnswer];
};

export default () => {
  playGame(primeRules, getQuestionAndAnswer);
};
