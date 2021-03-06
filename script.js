function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};
function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function addition(firstNumber, secondNumber) {
    return parseFloat(firstNumber) + parseFloat(secondNumber);
}
function subtraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function generateRandomColor() {

    let rand1 = Math.floor((Math.random() * 255) + 1);
    let rand2 = Math.floor((Math.random() * 255) + 1);
    let rand3 = Math.floor((Math.random() * 255) + 1);
    return `rgb(${rand1}, ${rand2}, ${rand3})`;
}

document.addEventListener('submit', e => {
    e.preventDefault();
    let amountFirstNumber = document.querySelector('#first-number-input').value;
    let amountSecondNumber = document.querySelector('#second-number-input').value;
    let calAmount
        if (document.querySelector('#multiplication').checked) {
           calAmount = multiplication(amountFirstNumber, amountSecondNumber);            
        } else if (document.querySelector('#division').checked) {
            calAmount = division(amountFirstNumber, amountSecondNumber);
        } else if (document.querySelector('#addition').checked) {
            calAmount = addition(amountFirstNumber, amountSecondNumber);
        } else {
            calAmount = subtraction(amountFirstNumber, amountSecondNumber);
        }
    document.querySelector('#calculator-results').innerText = calAmount;
    document.querySelector('#first-number-input').value = null;
    document.querySelector('#second-number-input').value = null;

    let color = generateRandomColor();

    document.body.style.backgroundColor = color;
} )

