import _ from 'lodash';
import { gcdRules } from '../cli.js';
import startGame from '../engine.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const firstRandomInt = _.random(1, 20);
  const secondRandomInt = _.random(1, 20);
  const question = `${firstRandomInt} ${secondRandomInt}`;
  const correctAnswer = getGcd(firstRandomInt, secondRandomInt).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(gcdRules, getQuestionAndAnswer);
};
