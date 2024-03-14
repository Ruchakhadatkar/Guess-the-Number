const userInput = document.querySelector("input");
const form = document.querySelector("form");

let randomNumber = Math.round(Math.random() * 100);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInputValue = parseInt(userInput.value);
  if (userInputValue < randomNumber) {
    console.log("Too Low");
  } else if (userInputValue > randomNumber) {
    console.log("Too High");
  } else {
    console.log("Congrats");
  }
  userInput.value = "";
});
