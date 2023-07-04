/* eslint-disable indent */
import readlineSync from 'readline-sync';
export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const evenGame = () => {
   console.log('Welcome to the Brain Games!');
   const userName = readlineSync.question('May I have your name? ');
	console.log('Hello,' + userName + '!');
   console.log('Answer "yes" if the number is even, otherwise answer "no".');
   for (let i = 0; i < 3; i += 1) {
      const number = getRandomNum(1, 100);
      console.log('Question:', number);
      const answerUser = readlineSync.question('Your answer: ');

      const checking1 = (number % 2 === 0) && (answerUser === 'yes');
      const checking2 = (number % 2 !== 0) && (answerUser === 'no');

      if (checking1 === true || checking2 === true) {
         console.log('Correct!');
      } else {
         const opposite = (answerUser === 'yes' ? 'no' : 'yes');
         const errorMessage = `${answerUser} is wrong answer ;(. Correct answer was ${opposite} \nLet's try again ${userName}!`;
         console.log(errorMessage);
         return errorMessage;
      }
   }

   console.log(`Congratulations, ${userName}`);
};

export default evenGame;
