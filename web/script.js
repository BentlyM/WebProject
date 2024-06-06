const division = document.getElementById('division');
const multiply = document.getElementById('multiplication');
const subtraction = document.getElementById('subtraction');
const addition = document.getElementById('addition');
const equal = document.getElementById('equal');
const digit = document.getElementById('digit');
const clear = document.querySelector('#clear');
let num1, num2 , operator;
let sum = 0; 

const operations = [
  {value: '/'},
  {value: '*'},
  {value: '-'},
  {value: '+'},
  {value: '='},
]

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

const add = (x , y) => x + y;
const sub = (x , y) => x - y;
const multi = (x , y) => x * y;
const divide = (x , y) => x / y;

const handleOperatorClick = (currentOperator) => {
  num1 = +digit.innerHTML;
  operator = currentOperator;
  digit.innerHTML = '';
}

clear.addEventListener('click', ()=>{
  if(digit.innerHTML != ''){
    sum = 0;
    num1 = '';
    num2 = '';
    operator = '';
    digit.innerHTML = '0';
  };
})

division.addEventListener('click',()=>{
  division.value = operations[0].value;
  handleOperatorClick(division.value);
})

multiply.addEventListener('click',()=>{
  multiply.value = operations[1].value;
  handleOperatorClick(multiply.value);
})

subtraction.addEventListener('click', ()=> {
  subtraction.value = operations[2].value
  handleOperatorClick(subtraction.value);
})

addition.addEventListener('click', ()=>{
  addition.value = operations[3].value
  handleOperatorClick(addition.value);
})

equal.addEventListener('click', ()=> {
  num2 = +digit.innerHTML;  
  sum = operate(num1, num2, operator);
  console.log(`${num1} ${operator} ${num2} is ${sum}`);
  digit.innerHTML = sum.toPrecision(3);
  if(sum === 1/0) {digit.innerHTML = 'HeHe'}
})

const createNumberLayout = () => {
    const container = document.getElementById('numbers');
    // const children = container.childNodes; // for grab children node values
    buttons.forEach((button) => {
      const buttonElement = document.createElement('div');
      buttonElement.className = 'btn';
      buttonElement.textContent = button.value;
      buttonElement.value = button.value;
      container.appendChild(buttonElement);
      buttonElement.onmousedown = () => {
        if(digit.innerHTML === '0'){digit.innerHTML = ''};
        digit.innerHTML += buttonElement.value;
      };
  });
}

createNumberLayout();