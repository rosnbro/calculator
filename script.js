// Constants and Variables

const numOneDisplay = document.querySelector("#numOne");
const operatorDisplay = document.querySelector("#operator")
const numTwoDisplay = document.querySelector("#numTwo");
const activeNumDispaly = document.querySelector("#activeNum")
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".operator");
const deciButton = document.querySelector("#decimal");
const signButton = document.querySelector("#sign");
const equalButton = document.querySelector("#equal");
const allClearButton = document.querySelector("#allClear");
const backButton = document.querySelector("#backspace");

let displayValue = "";
let operator = null;
let num1 = null;
let num2 = null;

// Event listeners

document.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9 || e.key == ".") {
        displayValue += e.key;
        display(displayValue, num1, num2, operator);
    } else if (e.key == "Enter") {
        if (num1 != null && displayValue != "") calculate(num1, displayValue);
    } else if (e.key == "Backspace") {
        backSpace();
    }
});

numButtons.forEach((numButton) => {
    numButton.addEventListener("click", () => {
        if (num2 != null && displayValue != "") clearAll();
        displayValue += numButton.textContent;
        display(displayValue, num1, num2, operator);
    });
});

opButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        if (num2 == null && num1 != null) calculate();
        operator = opButton.id;
        assignNumber();
    });
});

deciButton.addEventListener("click", () => {
    if (!displayValue.includes(".")) {
        if (displayValue == "") displayValue += 0;
        displayValue += ".";
    }
    display(displayValue, num1, num2, operator);
});

signButton.addEventListener("click", () => {
    displayValue = "-" + displayValue;
    display(displayValue, num1, num2, operator);
});

equalButton.addEventListener("click", () => {
    if (num1 != null && displayValue != "") calculate();
});

allClearButton.addEventListener("click", () => clearAll());

backButton.addEventListener("click", () => backSpace(displayValue));

// Default display

display(displayValue, num1, num2, operator);

// Functions

function display(active, num1, num2, operator) {
    let operatorSymbol;

    switch (operator) {
        case "add":
            operatorSymbol = "+";
            break;
        case "subtract":
            operatorSymbol = "-";
            break;
        case "multiply":
            operatorSymbol = "*";
            break;
        case "divide":
            operatorSymbol = "&#247";
            break;
        case "pow":
            operatorSymbol = "^";
            break;
        case "squareRoot":
            operatorSymbol = "&#8730(&#8592)";
            break;
        case "factorial":
            operatorSymbol = "!";
            break;
        case "commonLog":
            operatorSymbol = "log(&#8592)";
            break;
        case "naturalLog":
            operatorSymbol = "ln(&#8592)";
            break;
        case "exponent":
            operatorSymbol = "e^(&#8592)";
            break;
        case null:
            operatorSymbol = null;
            break;
    }

    activeNumDispaly.innerHTML = active;
    numOneDisplay.innerHTML = num1;
    numTwoDisplay.innerHTML = num2;
    operatorDisplay.innerHTML = operatorSymbol;
}

function assignNumber() {
    if (displayValue != "") {
        num1 = parseFloat(displayValue);
        displayValue = "";
    }
    if (num2 != null) num2 = null;
    switch (operator) {                         // Single number operations
        case "squareRoot":
            displayValue = squareRoot();
            break;
        case "factorial":
            displayValue = factorial();
            break;
        case "commonLog":
            displayValue = commonLog();
            break;
        case "naturalLog":
            displayValue = naturalLog();
            break;
        case "exponent":
            displayValue = exponent();
            break;
    }
    display(displayValue, num1, num2, operator);
}

function backSpace(value) {
    displayValue = value.slice(0, -1);
    display(displayValue, num1, num2, operator);
}

function clearAll() {
    displayValue = "";
    operator = null;
    num1 = null;
    num2 = null;
    display(displayValue, num1, num2, operator);
}

function calculate() {
    num2 = parseFloat(displayValue);
    switch (operator) {
        case "add":
            displayValue = add(num2);
            break;
        case "subtract":
            displayValue = subtract(num2);
            break;
        case "multiply":
            displayValue = multiply(num2);
            break;
        case "divide":
            displayValue = divide(num2);
            break;
        case "pow":
            displayValue = power(num2);
            break;
    }
    display(displayValue, num1, num2, operator);
}

function add(num2) {
    return num1 + num2;
}

function subtract(num2) {
    return num1 - num2;
}

function multiply(num2) {
    return num1 * num2;
}

function divide(num2) {
    if (num2 != 0) {
        return num1 / num2;
    } else return "lol nope"
}

function power(num2) {
    return Math.pow(num1, num2);
}

function squareRoot() {
    if (num1 > 0) {
        return Math.sqrt(num1);
    } else return "use your imagination.";
}

function factorial() {
    let a = 1;
    if (num1 == 0 || num1 == 1) {
        return a;
    } else {
        for (let i = num1; i > 0; i--) {
            a *= i;
        }
        return a;
    }
}

function naturalLog() {
    return Math.log(num1);
}

function commonLog() {
    return Math.log10(num1);
}

function exponent() {
    return Math.exp(num1);
}