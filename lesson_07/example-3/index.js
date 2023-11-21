// мы можем создавать элементы с нуля и прикреплять их к документу html
// создадим пустой элемент p

const newElement = document.createElement('p');
newElement.textContent = 'I was created by JavaScript!';
newElement.style.color = 'red';
newElement.style.border = '2px solid black';
newElement.style.backgroundColor = 'yellow';

document.body.append(newElement);

const targetElement = document.getElementById('target-element');

const newBtn = document.createElement('button');
newBtn.type = 'button';
newBtn.textContent = 'Click me!';

document.body.append(newBtn);