const operations = [
  {value: '/'},
  {value: '*'},
  {value: '-'},
  {value: '+'},
  {value: '='}
]

const division = document.getElementById('division').value = operations[0].value;;
const multiply = document.getElementById('multiplication').value = operations[1].value;
const subtraction = document.getElementById('subtraction').value = operations[2].value;
const addition = document.getElementById('addition').value = operations[3].value;
const equal = document.getElementById('equal').value = operations[4].value;
const digit = document.getElementById('digit');
let number1 , number2, operator; 

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

const add = (x , y) => x + y;
const sub = (x , y) => x - y;
const multi = (x , y) => x * y;
const divide = (x , y) => x / y;

const createNumberLayout = () => {
    const container = document.getElementById('numbers');
    // const children = container.childNodes; // for grab children node values
    buttons.forEach((button) => {
      const buttonElement = document.createElement('div');
      buttonElement.className = 'btn';
      buttonElement.textContent = button.value;
      buttonElement.value = button.value;
      container.appendChild(buttonElement);
      buttonElement.onclick = () => {
        if(digit.innerHTML === '0'){digit.innerHTML = ''}
        digit.innerHTML += buttonElement.value;
      };
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

  createNumberLayout();