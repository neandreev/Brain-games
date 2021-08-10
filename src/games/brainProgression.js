import _ from 'lodash';
import { progressionRules } from '../cli.js';
import playGame from '../engine.js';

const makeProgression = (startNum, progressionGap) => {
  const progressionArray = [];
  for (let i = 0; i < 10; i += 1) {
    const nextNum = startNum + progressionGap * i;
    progressionArray.push(nextNum);
  }

  return progressionArray;
};

const hideMissingNum = (indexOfMissingNum) => (num, index) => (
  (index === indexOfMissingNum) ? '..' : num
);

const getQuestionAndAnswer = () => {
  const startNum = _.random(20);
  const progressionGap = _.random(1, 20);
  const indexOfMissingNum = _.random(9);

  const progression = makeProgression(startNum, progressionGap);
  const questionArray = progression.map(hideMissingNum(indexOfMissingNum));
  const question = questionArray.join(' ');

  const correctNum = (startNum + progressionGap * indexOfMissingNum);
  const correctAnswer = correctNum.toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  playGame(progressionRules, getQuestionAndAnswer);
};
