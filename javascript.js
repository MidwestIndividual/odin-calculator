let register = [];

const digitDisplay = document.querySelector(".digit-display");

digitDisplay.textContent = "Testing Content";

function updateDigitDisplay(register) {
    digitDisplay.textContent = register[0];
}