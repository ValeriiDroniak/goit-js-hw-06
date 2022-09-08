const currentPageUrl = '.' + location.pathname;
const linkActive = document.querySelector(
    location.href === location.origin + '/'
        ? '.menu__link[href = "./index.html"]'
        : `.menu__link[href = "${currentPageUrl}"]`
)

linkActive.classList.add('current');