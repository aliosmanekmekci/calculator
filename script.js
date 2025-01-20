let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector(".screen");
/*
Orada almis sayiyi buttona klik fonsiyonu atamis
isNaN ise handleSymbol fonsiyonu yazmis degilse farkli
*/

function buttonClick(value) {
  isNaN(parseInt(value)) ? handleSymbol(value) : handleNumber(value);
}

function handleNumber(value) {
  buffer === "0" ? (buffer = value) : (buffer += value);
}
function handleSymbol(value) {}
