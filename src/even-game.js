import readlineSync from 'readline-sync';
import isEven from './utils.js';
import playGame from './index.js';

const briefing = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const playOneRound = () => {
  const num = (Math.floor(Math.random() * 100) + 1);
  const userAnswer = getAnswer(num).toLowerCase();
  const correctAnswer = isEven(num);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

const startGame = () => playGame(playOneRound, briefing);

export default startGame;
