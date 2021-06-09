"use strict";

// logic to +1 our number

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

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
    document.querySelector(".number").textContent = hiddenNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
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

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  hiddenNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
