let num1 = null;
let num2 = null;
let output = [];
let outputJoin = [];
let operand = [];
let result = [];

let display = document.querySelector('#display');

let btns = document.querySelectorAll('button');
btns.forEach(button => button.addEventListener('click', function (e) {
  const value = e.target.textContent;  

  populate(value);

  if (value === 'CLEAR') {
    clear();
  } else if ((num1 === null) &&
    (value === '+' ||
    value === '-' ||
    value === '*' ||
    value === '/')) {
    operand = output.pop();
    num1 = output.join('');
    output = [];
  } else if ((num1 !== null) &&
    (value === '+' ||
    value === '-' ||
    value === '*' ||
    value === '/')) {
    num2 = output.slice(0, -1).join('');
    num1 = Number(num1);
    num2 = Number(num2);
    result = operate(num1, operand, num2);
    operand = output.pop();
    display.textContent = result + operand;
    num1 = result;
    num2 = [];
    output = [];
    
  } else if (value === '=') {
    output.pop();
    num2 = output.join('');
    num1 = Number(num1);
    num2 = Number(num2);
    display.textContent = operate(num1, operand, num2);
    
  }
  }))

function populate(input) {
  output.push(input);
  outputJoin = output.join('');
  display.textContent = outputJoin;
}

function clear() {
  output = [];
    outputJoin = [];
    num1 = null;
    num2 = null;
    operand = '';
    display.textContent = '';
}

function operate(first, op, second) {
    if (op === '+') {
      return add(first, second);
    } else if (op === '-') {
      return sub(first, second)
    } else if (op === '*') {
      return mult(first, second)
    } else {
      return div(first, second);
    }
  }

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}