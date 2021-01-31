import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const playGame = (func, greeting) => {
  let counter = 0;

  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(greeting);
  while (counter < 3) {
    const round = func();
    if (!round) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${name}`);
};

export default playGame;
