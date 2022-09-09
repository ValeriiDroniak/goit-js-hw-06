const counterValue = {
    value: 0
};

const counterValueRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementRef = document.querySelector('[data-action="increment"]');

btnDecrementRef.addEventListener('click', decrementValue);
btnIncrementRef.addEventListener('click', incrementValue);

function decrementValue() {
    counterValue.value -= 1;
    updateCounter()
}

function incrementValue() {
    counterValue.value += 1;
    updateCounter()
}

function updateCounter() {
    counterValueRef.textContent = counterValue.value;
}