let output = document.getElementById('output');
let number = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let valueOne;
let valueTwo;
let result;
let currentOperator = '';

document
  .querySelectorAll('.btn')
  .forEach((elem) => elem.addEventListener('click', handleClick));

function handleClick(e) {
  e.preventDefault();

  if (e.target.className.indexOf('reset') >= 0) {
    valueOne = undefined;
    valueTwo = undefined;
    result = undefined;
    currentOperator = '';
    output.innerText = '';
  }

  if (e.target.className.indexOf('number') >= 0) {
    output.innerText = output.innerText + e.target.innerText;
  }

  if (e.target.className.indexOf('operator') >= 0) {
    if (currentOperator.length > 0 && valueTwo === undefined && valueOne) {
      valueTwo = +output.innerText;
      if (currentOperator === 'addition') {
        output.innerText = addition();
      }
      if (currentOperator === 'subtraction') {
        output.innerText = subtraction();
      }
      if (currentOperator === 'multiply') {
        output.innerText = multiply();
      }
      if (currentOperator === 'division') {
        output.innerText = division();
      }
    }
    if (valueOne === undefined && output.innerText.length > 0) {
      valueOne = +output.innerText;
      currentOperator = e.target.value;
      output.innerText = '';
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
    outputNumb.innerHTML = x;
  });
});

const displayOperators = operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    let y = e.target.value;
    outputNumb.innerHTML = y;
  });
}); */
