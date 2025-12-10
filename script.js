let num1;
let operator;
let num2;
let newNumber = false;

const display = document.querySelector('#display');

const buttons = document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.dataset.value;
        const op = btn.dataset.op;
        const action = btn.dataset.action;

        updateDisplay(value, op, action);
    })
});

function updateDisplay(value, op, action) {

    if (value !== undefined) {
        appendNumber(value);
    }

    if (op !== undefined) {
        chooseOperator(op);
    }

    if (action === "equals") {
        compute();
    }

};

function appendNumber(value) {
    if (newNumber) {
        display.textContent = value;
        newNumber = false;
        return;

    }
    if (display.textContent == 0) {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
};

function chooseOperator(op) {
    if (operator !== undefined && display.textContent !== '0') {
        compute();
        operator = op;
    } else {
        num1 = Number(display.textContent);
        display.textContent = 0;
        operator = op;
    }
    newNumber = true


}

function compute() {
    num2 = Number(display.textContent);
    display.textContent = operate(operator, num1, num2);
    num1 = Number(display.textContent);
    num2 = undefined;
    operator = undefined;
    newNumber = true
};

function operate(operator, num1, num2) {
    switch (operator) {
        case "add": return add(num1, num2);

        case "subtract": return subtract(num1, num2);

        case "multiply": return multiply(num1, num2);

        case "divide": return divide(num1, num2);

        default: return "Invalid operator"
    }
}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};


