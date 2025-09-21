// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber, "secretNumber");

let guess;
let attempts = 0;

// Keep looping until the guess matches the secret number
while (guess !== secretNumber) {
  // Ask user for input
  guess = parseInt(prompt("Guess a number between 1 and 100:"));

  attempts++;

  if (guess === secretNumber) {
    alert(
      `🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempts.`
    );
  } else if (guess > secretNumber) {
    alert("📉 Too high! Try again.");
  } else if (guess < secretNumber) {
    alert("📈 Too low! Try again.");
  }
}
