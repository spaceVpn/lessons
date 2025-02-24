// burger-menu
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('open-menu');
        e.preventDefault();
    }

    if (targetElement.closest('.menu__item')) {
        document.documentElement.classList.remove('open-menu');
        document.body.style.overflow = '';
    }
})
