// create a calculator object
const calculator = {
  display: '0',
  firstNumber: null,
  waitSecondNumber: false,
  operator: null,
};

// accept an number(digit)
function inputNumber(number) {
  const { display, waitSecondNumber } = calculator;

  if (waitSecondNumber === true) {
    calculator.display = number;
    calculator.waitSecondNumber = false;
  } else {
    calculator.display = display === '0' ? number : display + number;
  }
}

// accept a point

function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!calculator.display.includes(dot)) {
    // Append the decimal point
    calculator.display += dot;
  }
}

// accept and handle operator
function operator(nextOp) {
  const { firstNumber, display, operator } = calculator
  const input = parseFloat(display);

  if (operator && calculator.waitSecondNumber)  {
    calculator.operator = nextOp;
    return;
  }

  if (firstNumber == null) {
    calculator.firstNumber = input;
  } else if (operator) {
    const current = firstNumber || 0;
    const result = calculation[operator](current, input) || calculation[operator](input) ;
    calculator.display = String(result);
    calculator.firstNumber = result;
  }

  calculator.waitSecondNumber = true;
  calculator.operator = nextOp;
}

// the calculating function
const calculation = {
  '/': (firstNumber, secondNumber) => firstNumber / secondNumber,

  'x': (firstNumber, secondNumber) => firstNumber * secondNumber,

  '+': (firstNumber, secondNumber) => firstNumber + secondNumber,

  '-': (firstNumber, secondNumber) => firstNumber - secondNumber,

  '%':(firstNumber, secondNumber) => firstNumber % secondNumber,

  '^':(firstNumber, secondNumber) => Math.pow(firstNumber,secondNumber),
   
  '√':(firstNumber) => Math.sqrt(firstNumber),

  '=': (firstNumber, secondNumber) => secondNumber
};

// function for clear 
function reset() {
  calculator.display = '0';
  calculator.firstNumber = null;
  calculator.waitSecondNumber = false;
  calculator.operator = null;
}

// function that updates the screen whenever there is a change

function update() {
  const display = document.querySelector('.input');
  display.value = calculator.display;
}

update();

// accept and atach a listnew to the buttons

const keys = document.querySelector('.key');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    operator(target.value);
        update();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    update();
    return;
  }

  if (target.classList.contains('clear')) {
    reset();
    update();
    return;
  }

  inputNumber(target.value);
  update();
});