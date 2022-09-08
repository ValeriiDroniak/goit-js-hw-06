/* Пункт 1 */
const categoriesRef = document.querySelector('#categories');
const itemsOfCategoriesEl = categoriesRef.children;

console.log('Number of categories: ', itemsOfCategoriesEl.length);

/* Пункт 2 - варіант 1*/
const galeriesItemsRef = document.querySelectorAll('.item');
galeriesItemsRef.forEach(el => {
    //Який варіант краще використовувати?
    console.log('Category: ', el.firstElementChild.textContent); // el.querySelector('h2').textContent
    console.log('Elements: ', el.lastElementChild.children.length); // el.querySelector('ul').children.length
});

/* Пункт 2 - варіант 2*/
// const galeryAndNumberItemsEl = [...itemsOfCategoriesEl].map(el => {
//     // console.log('Category: ', el.firstElementChild.textContent);
//     // console.log('Elements: ', el.lastElementChild.children.length);

//     return {
//         Category: el.firstElementChild.textContent,
//         Elements: el.lastElementChild.children.length
//     }
// })

/* Пункт 2 - варіант 3*/
// const itemsOfCategories = document.querySelectorAll('.item');
// const categoryAndNumberElementsOfCategories = [...galeriesItemsRef].map(el => {
//     console.log('Category: ', el.querySelector('h2').textContent);
//     console.log('Elements: ', el.querySelectorAll('li').length);

//     return {
//         Category: el.querySelector('h2').textContent,
//         Elements: el.querySelectorAll('li').length
//     }
// })