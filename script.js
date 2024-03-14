const userInput = document.querySelector("input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const allGuess = document.querySelector(".allGuesses");
const submitBtn = document.querySelector(".submitBtn");
const startGameBtn = document.querySelector(".startGame");

function a() {
  const allGuessArray = [];

  let randomNumber = Math.round(Math.random() * 100);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    if (userInputValue < randomNumber) {
      result.innerText = "Too Low !";
    } else if (userInputValue > randomNumber) {
      result.innerText = "Too High !";
    } else {
      result.innerText = "You got it, Congrats !!!";
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    allGuessArray.push(userInputValue);
    allGuess.innerText = "Your Guesses : " + allGuessArray.join(" ,");
    form.reset();
  });

  startGameBtn.addEventListener("click", () => {
    allGuess.innerText = "";
    result.innerText = "";
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.round(Math.random() * 100);
  });
}

a();
