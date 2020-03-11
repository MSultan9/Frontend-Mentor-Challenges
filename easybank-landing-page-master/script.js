const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navigation = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    close.style.display = 'block';
    navigation.classList.add('mobile')
})

close.addEventListener('click', () => {
    close.style.display = 'none';
    hamburger.style.display = 'block';
    navigation.classList.remove('mobile')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        close.style.display = 'none';
        hamburger.style.display = 'none';
        navigation.classList.remove('mobile')
    } else
        hamburger.style.display = 'block';
})