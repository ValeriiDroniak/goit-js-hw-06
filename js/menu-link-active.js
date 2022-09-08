const linkActive = (document.querySelectorAll('.menu__link').forEach(el => {
    if (!(/.html$/).test(location.href)) {
        document.querySelector('.menu__link[href = "./index.html"]').classList.add('current');
    }
    if (el.href === location.href) {
        el.classList.add('current');
    }
}))