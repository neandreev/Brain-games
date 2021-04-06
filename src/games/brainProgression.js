import _ from 'lodash';
import { progressionRules } from '../cli.js';
import playGame from '../engine.js';

const getQuestionAndAnswer = () => {
  const startPoint = _.random(20);
  const progressionGap = _.random(1, 20);
  const randomIndex = _.random(9);

  const makeQuestion = () => {
    const arrayQuestion = [];
    for (let i = 0; i < 10; i += 1) {
      if (i === randomIndex) arrayQuestion.push('..');
      else arrayQuestion.push(startPoint + progressionGap * i);
    }
    return arrayQuestion;
  };

  const answer = startPoint + progressionGap * randomIndex;

  return [makeQuestion().join(' '), answer.toString()];
};

export default () => {
  playGame(progressionRules, getQuestionAndAnswer);
};
