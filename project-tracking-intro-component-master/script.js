const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navigation = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    close.style.display = 'block';
    navigation.classList.add('nav-mobile')
})

close.addEventListener('click', () => {
    close.style.display = 'none';
    hamburger.style.display = 'block';
    navigation.classList.remove('nav-mobile')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        navigation.classList.remove('nav-mobile')
        hamburger.style.display = 'none';
        close.style.display = 'none';
    } else {
        hamburger.style.display = 'block';
    }
});