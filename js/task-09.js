const body = document.querySelector('body');
const color = body.querySelector('.color');
const btnChangeColor = body.querySelector('.change-color');

btnChangeColor.addEventListener('click', onChangeColor)

function onChangeColor() {
    color.textContent = getRandomHexColor();
    body.style.backgroundColor = color.textContent;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
