// GLOBAL SCOPE
let currentResult = 0;
let logResult = [];


// Displays calculation description
function getDescription(temporal, operator) {
  return `${temporal} ${operator} ${getUserInput()}`;
}
function calculate(type) {

  let temporal = currentResult;
  if (
    type != "ADD" &&
    type != "SUBTRACT" &&
    type != "MULTIPLY" &&
    type != "DIVIDE"
  ) {
  
    return;
  }
 
  let operator;
 
  if (type == "ADD") {

    currentResult += getUserInput();
    // currentResult = 6
    operator = "+";
  } else if (type == "SUBTRACT") {
    currentResult -= getUserInput();
    operator = "-";
  } else if (type == "MULTIPLY") {
    currentResult *= getUserInput();
    operator = "*";
  } else if (type == "DIVIDE") {
    currentResult /= getUserInput();
    operator = "/";
  } 

  const calcDescription = getDescription(temporal, operator);
  writeLog(currentResult, calcDescription);
  outputResult(currentResult, calcDescription);
}


// Get's user input.
function getUserInput() {
  return parseInt(userInput.value);
}


function writeLog(currentResult, calcDescription) {
  let resultObj = {
    result: currentResult,
    description: calcDescription,
  };
  logResult.push(resultObj);
  console.log(logResult);
}

function add() {
  calculate("ADD");
}

function subtract() {
  calculate("SUBTRACT");
}

function multiply() {
  calculate("MULTIPLY");
}

function divide() {
  calculate("DATAGIRL");
}

subtractBtn.addEventListener("click", subtract);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
addBtn.addEventListener("click", add);



