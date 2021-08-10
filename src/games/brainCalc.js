import _ from 'lodash';
import { calcRules } from '../cli.js';
import startGame from '../engine.js';

const getRandomExpression = () => {
  const expressions = [
    ['+', ((a, b) => a + b)],
    ['-', ((a, b) => a - b)],
    ['*', ((a, b) => a * b)],
  ];

  return expressions[_.random(2)];
};

const getQuestionAndAnswer = () => {
  const firstRandomInt = _.random(20);
  const secondRandomInt = _.random(20);
  const randomExpression = getRandomExpression();

  const question = `${firstRandomInt} ${randomExpression[0]} ${secondRandomInt}`;
  const correctAnswer = randomExpression[1](firstRandomInt, secondRandomInt).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startGame(calcRules, getQuestionAndAnswer);
};
