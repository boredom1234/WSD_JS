const randomNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = prompt("Guess a number between 1 and 10: ");

if (userGuess === randomNumber) {
  console.log("You guessed the correct number.");
} else {
  console.log("Not matched. The correct number is " + randomNumber);
}