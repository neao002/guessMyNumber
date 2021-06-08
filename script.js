"use strict";

// logic to +1 our number

const hiddenNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".number").textContent = hiddenNumber;

const guess = function () {
  console.log(Number(document.querySelector(".guess").value));
};

document.querySelector(".check").addEventListener("click", guess);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "no number!";
  } else if (guess === hiddenNumber) {
    document.querySelector(".message").textContent = "Correct Number! ";
  } else if (guess > hiddenNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To high! ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lose :( the game ";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < hiddenNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "To low! ";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lose :( the game ";
      document.querySelector(".score").textContent = 0;
    }
  }
});
