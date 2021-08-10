import readlineSync from 'readline-sync';

export const requestName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}`);

  return playerName;
};

export const requestAnswer = () => readlineSync.question('Your answer: ');
export const showQuestion = (question) => console.log(`Question: ${question}`);

export const evenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const calcRules = () => console.log('What is the result of the expression?');
export const gcdRules = () => console.log('Find the greatest common divisor of given numbers.');
export const progressionRules = () => console.log('What number is missing in the progression?');
export const primeRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const declaration = {
  wrong: (name, answer, correctAnswer) => {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${name}!`);
  },
  correct: () => console.log('Correct!'),
  congrats: (name) => console.log(`Congratulations, ${name}!`),
};
