import _ from 'lodash';
import { gcdRules } from '../cli.js';
import playGame from '../engine.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const firstRandomInt = _.random(20);
  const secondRandomInt = _.random(20);
  const question = `${firstRandomInt} ${secondRandomInt}`;
  const correctAnswer = getGcd(firstRandomInt, secondRandomInt);

  return [question, correctAnswer.toString()];
};

export default () => {
  playGame(gcdRules, getQuestionAndAnswer);
};
