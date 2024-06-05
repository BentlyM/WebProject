const add = (x , y) => x + y;
const sub = (x , y) => x - y;
const multi = (x , y) => x * y;
const divide = (x , y) => x / y;

let number1;
let number2;
let operator;

const operate = (number1, number2, operator) => {
    switch (operator) {
      case '+':
        return add(number1, number2);
      case '-':
        return sub(number1, number2);
      case '*':
        return multi(number1, number2);
      case '/':
        return divide(number1, number2);
      default:
        throw new Error('Invalid operator');
    }
  };