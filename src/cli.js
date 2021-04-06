import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

export const getAnswer = () => readlineSync.question('Your answer: ');
export const showQuestion = (question) => console.log(`Question: ${question}`);

export const evenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const calcRules = () => console.log('What is the result of the expression?');
export const gcdRules = () => console.log('Find the greatest common divisor of given numbers.');
export const progressionRules = () => console.log('What number is missing in the progression?');
export const primeRules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const wrong = (name, answer, correctAnswer) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};

export const correct = () => console.log('Correct!');
export const congrats = (name) => console.log(`Congratulations, ${name}!`);
