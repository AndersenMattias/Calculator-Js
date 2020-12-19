let outputNumb = document.getElementById('output');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');

const displayNumbers = numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    let x = e.target.value;
    outputNumb.innerHTML = x;
    console.log('hihi');
  });
});

const displayOperators = operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    let y = e.target.value;
    outputNumb.innerHTML = y;
  });
});
