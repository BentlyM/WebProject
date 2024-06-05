// const add = (x , y) => x + y;
// const sub = (x , y) => x - y;
// const multi = (x , y) => x * y;
// const divide = (x , y) => x / y;


const createGridLayout = () => {
    const container = document.getElementById('numbers');
    const child = container.children;
    for (let i = 0; i < 9; ++i) {
        const element = document.createElement('div');
        element.className = 'btn';
        element.innerHTML = i + 1;
        container.append(element);
      }
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