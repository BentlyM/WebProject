const unorder = document.querySelector('ul');
const prompt = document.querySelector('.list');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let inputField = document.querySelector('#item').value;
    document.getElementById('item').value = '';

    let list = document.createElement('li');
    let text = document.createElement('span');
    let newBtn = document.createElement('button');

    newBtn.textContent = 'Delete';
    unorder.appendChild(list);
    list.appendChild(text)
    text.textContent = inputField;
    text.appendChild(newBtn);

    newBtn.addEventListener('click' , () => {
        list.parentNode.removeChild(list);
    });

    
});