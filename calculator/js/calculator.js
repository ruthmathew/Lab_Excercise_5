// create a calculator object
const calculate = {
  display: '0',
  firstNumber: null,
  waitSecondNumber: false,
  operator: null,
};

// accept an number(digit)
function inputNumber(number) {
  const { display, waitSecondNumber } = calculate;

  if (waitSecondNumber === true) {
    calculate.display = number;
    calculate.waitSecondNumber = false;
  } else {
    calculate.display = display === '0' ? number : display + number;
  }
}

// accept a point

function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!calculate.display.includes(dot)) {
    // Append the decimal point
    calculate.display += dot;
  }
}

// accept and handle operator
function operator(nextOp) {
  const { firstNumber, display, operator } = calculate
  const input = parseFloat(display);

  if (operator && calculate.waitSecondNumber)  {
    calculate.operator = nextOp;
    return;
  }

  if (firstNumber == null) {
    calculate.firstNumber = input;
  } else if (operator) {
    const current = firstNumber || 0;
    const result = calculation[operator](current, input) || calculation[operator](input) ;
    calculate.display = String(result);
    calculate.firstNumber = result;
  }

  calculate.waitSecondNumber = true;
  calculate.operator = nextOp;
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
  calculate.display = '0';
  calculate.firstNumber = null;
  calculate.waitSecondNumber = false;
  calculate.operator = null;
}

// function that updates the screen whenever there is a change

function update() {
  const display = document.querySelector('.input');
  display.value = calculate.display;
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