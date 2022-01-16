// Constants and Variables
/*
const allClearButton = document.querySelector("#allClear");
*/

const numOneDisplay = document.querySelector(".numOne");
const operatorDisplay = document.querySelector(".operator")
const numTwoDisplay = document.querySelector(".numTwo");
const activeNumDispaly = document.querySelector(".activeNum")
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".operator");
const deciButton = document.querySelector("#decimal");
const backButton = document.querySelector("#backspace");
const equalButton = document.querySelector("#equal");

let displayValue = "";
let operator;
let num1;
let num2;

// Event listeners

document.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9 || e.key == ".") {
        displayValue += e.key;
        display(displayValue, num1, num2, operatorSymbol(operator));
    } else if (e.key == "Enter") {
        if (num1 != null && displayValue != "") calculate(num1, displayValue);
    } else if (e.key == "Backspace") {
        backSpace();
    }
});

numButtons.forEach((numButton) => {
    numButton.addEventListener("click", () => {
        displayValue += numButton.textContent
        display(displayValue, num1, num2, operatorSymbol(operator));
    })
});

opButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        operator = opButton.id
        assignNumber()
    })
});

deciButton.addEventListener("click", () => {
    if (!displayValue.includes(".")) {
        if (displayValue == "") displayValue += 0;
        displayValue += ".";
    }
    display(displayValue, num1, num2, operatorSymbol(operator));
});

backButton.addEventListener("click", () => backSpace(displayValue));

equalButton.addEventListener("click", () => {
    if (num1 != null && displayValue != "") calculate(num1, displayValue);
});

// Add ability to use shift+num operators when typed
display(displayValue, num1, num2, operatorSymbol(operator));

// Functions

function display(active, num1, num2, operator) {
    if (active == null) activeNumDispaly.innerHTML = "";
    if (num1 == null) numOneDisplay.innerHTML = "";
    if (num2 == null) numTwoDisplay.innerHTML = "";
    if (operator == null) operatorDisplay.innerHTML = "";

    activeNumDispaly.innerHTML = active;
    numOneDisplay.innerHTML = num1;
    numTwoDisplay.innerHTML = num2;
    operatorDisplay.innerHTML = operator;
}

function assignNumber() {
    if (num2 != null) num2 = "";
    num1 = parseFloat(displayValue);
    displayValue = "";
    display(displayValue, num1, num2, operatorSymbol(operator));
}

function backSpace(value) {
    displayValue = value.slice(0, -1);
    display(displayValue, num1, num2, operatorSymbol(operator));
}

function calculate() {
    let num2 = parseFloat(displayValue);
    switch (operator) {
        case "add":
            displayValue = add(num2);
            display(displayValue, num1, num2, operatorSymbol(operator));
            break;
        case "subtract":
            displayValue = subtract(num2);
            display(displayValue, num1, num2, operatorSymbol(operator));
            break;
        case "multiply":
            displayValue = multiply(num2);
            display(displayValue, num1, num2, operatorSymbol(operator));
            break;
        case "divide":
            displayValue = divide(num2);
            display(displayValue, num1, num2, operatorSymbol(operator));
            break;
    }
}

function operatorSymbol(operator) {
    switch (operator) {
        case "add":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "x";
        case "divide":
            return "&#247";
    }
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

function squareRoot() {

}

function factorial() {

}

function exp() {

}