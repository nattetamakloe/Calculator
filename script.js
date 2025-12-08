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
function operate(operate, num1, num2) {
    switch(operate) {
        case "+": return add(num1, num2);
            
        case "-": return subtract(num1, num2);
        
        case "*": return multiply(num1, num2);
    
        case "/": return divide(num1, num2);

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
    let display = document.querySelector('#display');
    display.textContent = value;
};



