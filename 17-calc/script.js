const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const result = document.querySelector('#result');
const clear = document.querySelector('#clear');
const buttons = document.querySelectorAll('.btn');


function calculate(action) { 
    if (!value1.value || !value2.value) {
        return NaN;
    }
    const num1 = Number(value1.value);
    const num2 = Number(value2.value);
    switch (action) {
        case 'plus':
            return  num1 + num2;
        case 'minus':
            return  num1 - num2;
        case 'multiply':
            return  num1 * num2;
        case 'divide':
            return  num1 / num2;
        default:
            return NaN;
    }
}

function clearResult() {    
    value1.value = '';
    value2.value = '';
    result.innerText = 'Результат';
}

function updateResult(buttonId) {
  const calculation = buttonId === 'clear' ? clearResult : calculate;
  result.innerText = calculation(buttonId);
}

function attachEventListeners() {
  buttons.forEach(button => {
    button.addEventListener('click', () => updateResult(button.id));
  });
}

attachEventListeners();
