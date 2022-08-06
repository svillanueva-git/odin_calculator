let displayValue = 0;
let userNum1 = 0;
let userNum2 = 0;
let userOperator = "";

const operate = (operator, a, b) => {
  if (operator == 'add') {
    return a + b;
  } else if (operator == 'subtract') {
    return a - b;
  } else if (operator == 'multiply') {
    return a * b;
  } else {
    return a / b;
  }
};

const displayResult = () => {
  const display = document.querySelector('.display');
  display.textContent = `${displayValue}`;
};

const selectedNum = document.querySelectorAll('div.numpad > div');
selectedNum.forEach((number) => {
  number.addEventListener('click', () => {
    if (userNum1 == 0) {
      userNum1 = parseInt(number.innerHTML);
    } else if ((userNum1 != 0) && (userNum2 == 0)) {
      userNum2 = parseInt(number.innerHTML);
    } else if (userNum1 == displayValue) {
      userNum2 = parseInt(number.innerHTML);
    }
  });
});

const selectedOp = document.querySelectorAll('div.operators > div');
selectedOp.forEach((operator) => {
  operator.addEventListener('click', () => {
    if (operator.className == "equal" || operator.className == "clear") return;
    userOperator = operator.className;
  })
})

const calculate = document.querySelector('.equal');
calculate.addEventListener('click', () => {
  displayValue = operate(userOperator, userNum1, userNum2);
  userNum1 = displayValue;
  displayResult();
})

const clearDisplay = document.querySelector('.clear');
clearDisplay.addEventListener('click', () => {
  displayValue = 0;
  userNum1 = 0;
  userNum2 = 0;
  userOperator = "";
  displayResult();
})