import {
  requestAnswer, requestName, showQuestion, declaration,
} from './cli.js';

const startGame = (showRules, getQuestionAndAnswer) => {
  const playerName = requestName();
  showRules();

  const amountOfPlays = 3;
  for (let i = 0; i < amountOfPlays; i += 1) {
    const { question, correctAnswer } = getQuestionAndAnswer();

    showQuestion(question);
    const answer = requestAnswer();

    if (answer === correctAnswer) {
      declaration.correct();
    } else {
      declaration.wrong(playerName, answer, correctAnswer);
      return;
    }
  }

  declaration.congrats(playerName);
};

export default startGame;
