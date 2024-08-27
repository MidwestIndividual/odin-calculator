let register = [""];

const digitDisplay = document.querySelector(".digit-display");

function updateDigitDisplay(register) {
    digitDisplay.textContent = register.length <= 2 ? register[0] : register[2];
}

function numericButton(eventTarget) {
    let registerIndex = register.length == 1 ? 0 : 2;

    if (register.length == registerIndex) {
        register.push('');
    }

    if (eventTarget.textContent == '.'){
        // Call dot code
        return;
    }

    if (eventTarget.textContent == '0'){
        if (register[registerIndex] != '0') {
            register[registerIndex] += '0';
        }
    } else {
        if (register[registerIndex] == '0') {
            register[registerIndex] = '';
        }
        register[registerIndex] += eventTarget.textContent;
    }
}

function blueButton(eventTarget) {
    let registerIndex = register.length == 1 ? 0 : 2;

    switch (eventTarget.textContent){
        case 'AC':
            register = ['0'];
            break;
        case '+/-':
            register[registerIndex] = (-register[registerIndex]).toString();
            break;
        case '%':
            register[registerIndex] = (+register[registerIndex]/100).toString();
            break;
    }
}

function evaluate() {
    let operator = register[1];
    switch (operator) {
        case '/':
            register = [+register[0] / +register[2]];
            break;
        case '*':
            register = [+register[0] * +register[2]];
            break;
        case '-':
            register = [+register[0] - +register[2]];
            break;
        case '+':
            register = [+register[0] + +register[2]];
            break;
    }
}

function operatorButton(eventTarget) {
    let registerIndex = register.length == 1 ? 0 : 2;

    switch (eventTarget.textContent){
        case '/':
        case '*':
        case '-':
        case '+':
            if (registerIndex == 2) {
                evaluate();
            }
            register[1] = eventTarget.textContent;
            break;
        case '=':
            if (registerIndex == 2) {
                evaluate();
            }
            break;
    }
}

const orangeButtons = Array.from(document.querySelectorAll(".orange-button, .teal-button, .blue-button"));
orangeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const className = event.target.className.split(' ')[0];
        switch (className) {
            case 'orange-button':
                operatorButton(event.target);
                break;
            case 'teal-button':
                numericButton(event.target);
                break;
            case 'blue-button':
                blueButton(event.target);
                break;
            default:
                alert("Critical Error");
        }
        updateDigitDisplay(register);
    });
});

