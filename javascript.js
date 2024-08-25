let register = [];

const digitDisplay = document.querySelector(".digit-display");

digitDisplay.textContent = "Testing Content";

function updateDigitDisplay(register) {
    digitDisplay.textContent = register[0];
}

const orangeButtons = Array.from(document.querySelectorAll(".orange-button, .teal-button, .blue-button"));
orangeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const className = event.target.className.split(' ')[0];
        switch (className) {
            case 'orange-button':
                // Run Operator Function
                break;
            case 'teal-button':
                // Run numeric function
                break;
            case 'blue-button':
                // Run alt function
                break;
            default:
                alert("Critical Error");
        }
    });
});