const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsListRef = document.querySelector('#ingredients');

const items = ingredients.map(el => {
    const itemEl = document.createElement('li');
    itemEl.textContent = el;
    itemEl.classList.add('item');
    return itemEl;
})

ingredientsListRef.append(...items);