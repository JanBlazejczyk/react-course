
const readlineSync = require('readline-sync');
const correctNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = Number(readlineSync.question('Type in the number between 1 to 10: '));

if (userGuess === correctNumber) {
    console.log(`Correct, the number was ${correctNumber}`);
} else {
    console.log(`Wrong! The correct number was ${correctNumber}`);
}


