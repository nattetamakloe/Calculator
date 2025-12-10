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

    if (action === "clear") {
        clearDisplay();
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

    if (operator !== undefined && newNumber === true) {
        operator = op;
        return;
    }

    if (operator !== undefined && !newNumber) {
        compute();
    }

    num1 = Number(display.textContent);
    operator = op;
    newNumber = true; 
}

function compute() {

    if (operator === "divide" && Number(display.textContent) === 0) {
        display.textContent = "Nope!";
        num1 = undefined;
        num2 = undefined;
        operator = undefined;
        newNumber = true;
        return;
    }

    num2 = Number(display.textContent);

    let result = operate(operator, num1, num2);

    result = roundNumber(result);

    display.textContent = result;

    num1 = result;
    num2 = undefined;
    operator = undefined;
    newNumber = true;
}


function clearDisplay() {
    display.textContent = 0;
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    newNumber = false;
}

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

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}



