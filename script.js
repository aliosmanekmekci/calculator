const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

let firstValue = "";
let currentOperator = null;
let secondValue = "";

function bindClick(value) {
  const targetNode = value.target;
  const intTargetNode = parseInt(targetNode.textContent);
  if (isNaN(intTargetNode) && firstValue) {
    handleSymbol(value);
  }
  currentOperator
    ? firstValue && currentOperator && !isNaN(intTargetNode)
      ? (secondValue += targetNode.textContent)
      : secondValue
    : (firstValue += targetNode.textContent);

  console.log(`first value: ${firstValue} & second value: ${secondValue}`);
}

function handleSymbol(symbol) {
  const targetNode = symbol.target;
  const symbolValue = targetNode.textContent;
  currentOperator = symbolValue;

  if (symbolValue === "=") {
  } else {
    switch (symbolValue) {
      case "+":
        break;

      default:
        break;
    }
  }
  console.log(currentOperator);
}

button.forEach((btn) => btn.addEventListener("click", (e) => bindClick(e)));

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}
