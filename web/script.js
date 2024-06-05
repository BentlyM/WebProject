const division = document.getElementById('division');
const multiply = document.getElementById('multiplication');
const subtraction = document.getElementById('subtraction');
const addition = document.getElementById('addition');
const equal = document.getElementById('equal');

const buttons = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '7' },
  { value: '8' },
  { value: '9' },
];

const operations = [
  {value: '/'},
  {value: '*'},
  {value: '-'},
  {value: '+'}
]

const add = (x , y) => x + y;
const sub = (x , y) => x - y;
const multi = (x , y) => x * y;
const divide = (x , y) => x / y;
let number1 , number2, operator; 

const createGridLayout = () => {
    const container = document.getElementById('numbers');
    // const children = container.childNodes; // for grab children node values
    buttons.forEach((button) => {
      const buttonElement = document.createElement('div');
      buttonElement.className = 'btn';
      buttonElement.textContent = button.value;
      buttonElement.value = button.value;
      container.appendChild(buttonElement);
    });
}

const operate = (x, y, op) => {
    switch (op) {
      case '+':
        return add(x, y);
      case '-':
        return sub(x, y);
      case '*':
        return multi(x, y);
      case '/':
        return divide(x, y);
      default:
        throw new Error('Invalid operator');
    }
  };

  createGridLayout();