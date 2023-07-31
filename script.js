let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        expression = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('result').value = expression;
}
