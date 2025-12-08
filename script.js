/* 2. Variabler för en operation
Skapa tre variabler: */
let num1;
let operator;
let num2;

const buttons = document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.dataset.value;
        const op = btn.dataset.op;
        const action = btn.dataset.action;

        updateDisplay(value, op, action);
    })

});

const display = document.querySelector('#display');


/* 1. Grundläggande funktioner */
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

/* 3. Skapa funktionen operate som:
tar en operator och två nummer
anropar motsvarande matematiska funktion */
function operate(operator, num1, num2) {
    switch (operator) {
        case "add": return add(num1, num2);

        case "subtract": return subtract(num1, num2);

        case "multiply": return multiply(num1, num2);

        case "divide": return divide(num1, num2);

        default: return "Invalid operator"
    }
}



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
    if (display.textContent == 0) {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
};

function chooseOperator(op) {
    num1 = Number(display.textContent);
    operator = op;
    display.textContent = 0;

}

function compute() {
    num2 = Number(display.textContent);
    display.textContent = operate(operator, num1, num2);    
};



