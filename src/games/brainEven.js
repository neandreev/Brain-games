import _ from 'lodash';
import { evenRules } from '../cli.js';
import playGame from '../engine.js';

const isEven = (num) => (num % 2 === 0);
const getCorrectAnswer = (boolean) => ((boolean) ? 'yes' : 'no');

const getQuestionAndAnswer = () => {
  const randomInt = _.random(20);
  const correctAnswer = getCorrectAnswer(isEven(randomInt));

  return {
    question: randomInt,
    correctAnswer,
  };
};

export default () => {
  playGame(evenRules, getQuestionAndAnswer);
};
