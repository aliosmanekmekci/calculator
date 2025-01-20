const display = document.querySelector(".screen");
const button = document.querySelectorAll(".btn");
let firstValue;
let secondValue;
let operation;

// view in logic e baglanmasi
// logic orkestrasi

function calculatorButtonHandler(e) {
  const targetNode = e.target;
  const operationType = targetNode.getAttribute("data-type");
  const operationPayload = targetNode.textContent;
  console.table(operationType, typeof operationType);

  if (operationType === "value" || operationType === "operation") {
    const operationPayload = targetNode.textContent;
    operate(operationType, operationPayload);
  } else {
    operate(operationType);
  }
}

function bindViewHandlers() {
  button.forEach((btn) => {
    btn.addEventListener("click", (e) => calculatorButtonHandler(e));
  });
}

// operate bizim state/logic olaylarina ilk giris noktamiz fonksiyonumuz
function operate(operationType, payload) {
  if (operationType === "value") {
  } else if (operationType === "operation") {
    // ilk deger varsa sikinti yoksa
    operationTyoe = payload;
  } else if (operationType === "calculate") {
    // aga sen claculate demissin ama deger girmemsin => bisey yapma ya da hata bas
    // degerler varsa
    // calculate()
  } else if (operationType === "reset") {
  }
}

// orkestra ve state isleri => view dan bagimsiz ama sonucu viewa yansitilacak

function add(a, b) {
  return a + b;
}
function substract() {}
function divide() {}
function multiply() {}

bindViewHandlers();
