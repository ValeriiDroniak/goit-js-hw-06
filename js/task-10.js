const box = document.querySelector('#boxes')
const input = document.querySelector('#controls input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

const boxes = [];
let size = 30;

btnCreate.addEventListener('click', onCreate);
btnDestroy.addEventListener('click', onDestroyBoxes);

function onCreate() {
    createBoxes(input.value)
}

function createBoxes(amount) {
    if (amount <= 0) {
        return 0;
    } else {
        const divBox = document.createElement('div');

        divBox.style.backgroundColor = getRandomHexColor();
        divBox.style.width = size + 'px';
        divBox.style.height = size + 'px';

        size += 10;
        createBoxes(amount - 1);
        boxes.unshift(divBox);
    }

    return addElementsToPage(box, boxes);
}

function addElementsToPage(element, addElements) {
    return element.append(...addElements); // Нерозумію чому append працю так дивно підчас повторного створення елементів. (при першій спробі додаємо приміром 2 бокси і після цього достворюємо ще 2 бокси, він кидає останні створені на початок. Хоча повинен кидати їх після всіх дітей)
}

function onDestroyBoxes() {
    // input.value = 0;
    size = 30;
    boxes.splice(0, boxes.length);
    box.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}