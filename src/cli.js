import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  return name;
};

const evenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const wrong = (name, answer, correctAnswer) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
};

const correct = () => console.log('Correct!');

export {
  getName, evenRules, wrong, correct,
};
