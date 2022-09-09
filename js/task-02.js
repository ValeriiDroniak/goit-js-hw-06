const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsContainerRef = document.querySelector('#ingredients');

const items = ingredients.map(el => {
    const itemEl = document.createElement('li');
    itemEl.textContent = el;
    itemEl.classList.add('item');
    return itemEl;
})

ingredientsContainerRef.append(...items);