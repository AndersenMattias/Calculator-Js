let result = document.getElementById('result');
let number = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let operatorDark = document.querySelectorAll('.operatorOne');
let valueOne;
let valueTwo;
let sum;
let currentOperator = '';

document
  .querySelectorAll('.btn')
  .forEach((elem) => elem.addEventListener('click', handleClick));

function handleClick(e) {
  e.preventDefault();

  if (e.target.className.indexOf('result') >= 0) {
    valueOne = undefined;
    valueTwo = undefined;
    sum = undefined;
    currentOperator = '';
    result.innerText = '';
  }

  if (e.target.className.indexOf('number') >= 0) {
    result.innerText = result.innerText + e.target.innerText;
  }

  if (e.target.className.indexOf('operator') >= 0) {
    if (currentOperator.length > 0 && valueTwo === undefined && valueOne) {
      valueTwo = +result.innerText;
      if (currentOperator === 'addition') {
        result.innerText = addition();
      }
      if (currentOperator === 'subtraction') {
        result.innerText = subtraction();
      }
      if (currentOperator === 'multiply') {
        result.innerText = multiply();
      }
      if (currentOperator === 'division') {
        result.innerText = division();
      }
    }
    if (valueOne === undefined && result.innerText.length > 0) {
      valueOne = +result.innerText;
      currentOperator = e.target.value;
      result.innerText = '';
    }
  }
}

function addition() {
  return valueOne + valueTwo;
}
function subtraction() {
  return valueOne - valueTwo;
}
function multiply() {
  return valueOne * valueTwo;
}
function division() {
  if (valueTwo > 0) {
    return valueOne / valueTwo;
  }
}

/*
const displayNumbers = numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    let x = e.currentTarget.value;
    resultNumb.innerHTML = x;
  });
});

const displayOperators = operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    let y = e.target.value;
    resultNumb.innerHTML = y;
  });
}); */
