const plusBtnElement = document.getElementById('plus');
const minusBtnElement = document.getElementById('minus');
const counterElement = document.getElementById('counter');

let counter = 99999999;

const plusHandler =()=>{
    counter++;
    counterElement.innerText = counter;
}

const minusHandler =()=>{
    counterElement.innerText = --counter;
}

const resetHandler =()=>{
    counter = 0;
    counterElement.innerText = counter;
}

plusBtnElement.addEventListener('click', plusHandler);
minusBtnElement.addEventListener('click', minusHandler);

const resetBtnElement = document.getElementById('reset');
resetBtnElement.addEventListener('click', resetHandler);