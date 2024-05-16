let currentNumber = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

function calculateResult() {
    secondNumber = currentNumber;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        default:
            return;
    }
    document.getElementById('display').value = result;
}

function clearDisplay() {
    currentNumber = '';
    operator = '';
    firstNumber = '';
    secondNumber = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}