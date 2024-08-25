let register = [];

const digitDisplay = document.querySelector(".digit-display");

digitDisplay.textContent = "Testing Content";

function updateDigitDisplay(register) {
    digitDisplay.textContent = register[0];
}

const orangeButtons = Array.from(document.querySelectorAll(".orange-button"));
orangeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(event);
    });
});