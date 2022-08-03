

// GLOBAL SCOPE
let currentResult = 0
let logResult = []


// Get's user input.
function getUserInput(){
   return parseInt(userInput.value)
}

// Displays calculation description
function getDescription(operator){
   return `${currentResult} ${operator} ${getUserInput()}`
}

function add(){ 
  const calcDescription = getDescription('+');
  currentResult +=  getUserInput();
  let resultObj = {
    result: currentResult,
    description: calcDescription
  }
  logResult.push(resultObj)
  outputResult(currentResult, calcDescription)
}


addBtn.addEventListener('click', add)

function subtract(){
    const calcDescription = getDescription('-')
    currentResult -= getUserInput();
    outputResult(currentResult, calcDescription)
}

subtractBtn.addEventListener('click',subtract)


function multiply(){
    const calcDescription = getDescription('*')
    currentResult *= getUserInput();
    outputResult(currentResult, calcDescription)
}

multiplyBtn.addEventListener('click', multiply)

function divide(){
    const calcDescription = getDescription('/')
    currentResult /= getUserInput();
    outputResult(currentResult, calcDescription)
}

divideBtn.addEventListener('click', divide);


// Numbers
// Strings
// Boolean 
// Arrays 
// Objects



