// const linkActive = (document.querySelectorAll('.menu__link').forEach(el => {
//     if (!(/.html$/).test(location.href)) {
//         document.querySelector('.menu__link[href = "./index.html"]').classList.add('current');
//     }
//     if (el.href === location.href) {
//         el.classList.add('current');
//     }
// }))

//////////////////////////// Варіант 2 ////////////////////////////
const refs = {
    homeLink: document.querySelector('.menu__link[href = "./index.html"]'),
    navLinks: document.querySelectorAll('.menu__link')
}

function activeLink({ homeLink, navLinks }) {
    !(/.html$/).test(location.href)
        ? homeLink.classList.add('current')
        : navLinks.forEach(el => {
            if (location.href === el.href) {
                el.classList.add('current');
            }
        })
}

activeLink(refs)