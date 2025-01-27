const display = document.querySelector(".screen");
const button = document.querySelectorAll("button");

let prevOperator = null;
let currentOperator = null;
let prevNum = null;
let nextNum = null;

function bindClick(param) {
  const targetNode = param.target;
  const targetValue = targetNode.textContent;
  const targetAttribute = targetNode.getAttribute("data-type");

  targetAttribute.includes("number") ? handleNumber(targetValue) : handleSymbol(targetNode);
}

function handleNumber(number) {
  display.textContent === "0" ? (display.textContent = number) : (display.textContent += number);
}

function handleSymbol(symbol) {
  currentOperator = symbol.textContent;
  switch (currentOperator) {
    case "C":
      reset();
      break;
    case "←":
      let displayContent = display.textContent;
      display.textContent = displayContent.slice(0, -1);
      display.textContent ? display.textContent : (display.textContent = "0");
      break;
    case "=":
      getResult();
      break;
    case "+":
      prevOperator = "+";
      prevNum = parseInt(display.textContent);
      display.textContent = "0";
      break;
    case "-":
      prevOperator = "-";
      prevNum = parseInt(display.textContent);
      display.textContent = "0";
      break;
    case "/":
      prevNum = parseInt(display.textContent);
      prevOperator = "/";
      display.textContent = "0";
      break;
    case "×":
      prevOperator = "×";
      prevNum = parseInt(display.textContent);
      display.textContent = "0";
      break;
  }
}

function getResult() {
  nextNum = parseInt(display.textContent);
  let result;

  switch (prevOperator) {
    case "+":
      result = prevNum + nextNum;
      break;
    case "-":
      result = prevNum - nextNum;
      break;
    case "/":
      result = prevNum / nextNum;
      break;
    case "×":
      result = prevNum * nextNum;
      break;
  }
  display.textContent = result;
  return result;
}

function reset() {
  display.textContent = "0";

  prevOperator = null;
  currentOperator = null;
  prevNum = null;
  nextNum = null;
}

button.forEach((btn) => btn.addEventListener("click", (e) => bindClick(e)));
