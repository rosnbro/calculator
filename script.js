// Constants and Variables
/*
const devButton = document.querySelector("#divide");
const multiButton = document.querySelector("#multiply");
const subButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");
const allClearButton = document.querySelector("#allClear");
*/

const numButtons = document.querySelectorAll(".numButton");

let buttonSelection;

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonSelection = button.textContent
    })
});

// possible plan of attack
// Get input from buttons/keyboard into the display value as a string, 
// then convert to number or float depending on decimal. convert upon action 
// taken by pressing an operation button

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}