import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

const getAnswer = () => readlineSync.question('Your answer: ');
const showQuestion = (question) => console.log(`Question: ${question}`);

const evenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const calcRules = () => console.log('What is the result of the expression?');

const wrong = (name, answer, correctAnswer) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};

const correct = () => console.log('Correct!');
const congrats = (name) => console.log(`Congratulations, ${name}!`);

export {
  getName, getAnswer, showQuestion, evenRules, calcRules, wrong, correct, congrats,
};
