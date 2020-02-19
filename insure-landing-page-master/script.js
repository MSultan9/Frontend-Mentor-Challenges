const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    close.style.display = 'block';
    nav.classList.add('nav-mobile')
})

close.addEventListener('click', () => {
    close.style.display = 'none';
    hamburger.style.display = 'block';
    nav.classList.remove('nav-mobile')
})

window.addEventListener('resize', () => {
    close.style.display = 'none';
    nav.classList.remove('nav-mobile')
    if (window.innerWidth > 1024) {
        hamburger.style.display = 'none';
    } else {
        hamburger.style.display = 'block';
    }
})