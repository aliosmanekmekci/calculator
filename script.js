const display = document.querySelector("#display");
const button = document.querySelectorAll(".btn");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.textContent);
  });
  console.log(btn.textContent);
});

//

function add() {}
function substract() {}
function divide() {}
function multiply() {}
