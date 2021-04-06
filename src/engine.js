import {
  getAnswer, getName, showQuestion, correct, wrong, congrats,
} from './cli.js';

const playGame = (rules, getQuestionAndAnswer) => {
  const name = getName();
  rules();

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    showQuestion(question);
    const answer = getAnswer();

    if (answer === correctAnswer) {
      correct();
    } else {
      wrong(name, answer, correctAnswer);
      return;
    }
  }

  congrats(name);
};

export default playGame;
