let a;
let b;
let operator;

const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

function operate(first, op, second) {
    if (op === '-') {
        subtract(first, second);
    } else if (op === '+') {
        add(first, second);
    } else if (op === '*') {
        multiply(first, second);
    } else if (op === '/') {
        divide(first, second);
    }
    
}