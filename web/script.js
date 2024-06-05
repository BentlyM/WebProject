// const add = (x , y) => x + y;
// const sub = (x , y) => x - y;
// const multi = (x , y) => x * y;
// const divide = (x , y) => x / y;


const createGridLayout = () => {
    const container = document.getElementById('numbers');
    for (let i = 0; i < 12; ++i) {
        const element = document.createElement('div');
        element.className = 'btn';
        container.append(element);
      }
}

const operate = (number1, number2, operator) => {
    switch (calc.operator) {
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

  createGridLayout();