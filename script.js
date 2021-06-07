"use strict";

const guess = function () {
  console.log(document.querySelector(".guess").value);
};

document.querySelector(".check").addEventListener("click", guess);
