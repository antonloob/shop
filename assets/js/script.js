(function() {
    let btn = document.querySelector('.nav-toggle');
    let nav = document.querySelector('.header__nav')

    btn.addEventListener('click', function() {
        nav.classList.toggle('active');
    })
}())