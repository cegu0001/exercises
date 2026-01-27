const randomNumber = Math.floor(Math.random() * 101);
console.log("Random number:", randomNumber);

const guessInput = document.getElementById("guess");
const guessBtn = document.getElementById("guess-btn");
const feedback = document.getElementById("feedback");
const celebration = document.getElementById("celebration");

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (userGuess < randomNumber) {
    feedback.textContent = "Too low!";
    celebration.textContent = "";
    celebration.className = "";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "Too high!";
    celebration.textContent = "";
    celebration.className = "";
  } else {
    feedback.textContent = "You guessed correctly!";
    celebration.textContent = "CONGRATS!";
    celebration.className = "celebrate";
  }
});
