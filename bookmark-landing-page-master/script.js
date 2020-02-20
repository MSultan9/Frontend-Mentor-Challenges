const tabs = document.querySelectorAll('.tabs > div')
const images = document.querySelectorAll('.tab > div > img')
const title = document.querySelectorAll('.tab > div > .title')
const text = document.querySelectorAll('.tab > div > .text')

tabs.forEach(element => {
    element.addEventListener('click', (e) => {
        changeActive(e.target)
        changeTab(e.target.id)
    })
});

function changeActive(target) {
    tabs.forEach(element => {
        element.classList.remove('active')
    });
    target.classList.add('active')
}

function changeTab(id) {
    loopChange(images, id)
    loopChange(title, id)
    loopChange(text, id)
}

function loopChange(array, id) {
    array.forEach(element => {
        element.classList.add('hide')
        if (element.id.includes(id)) {
            element.classList.remove('hide')
            element.classList.add('show')
        }
    });
}

const questions = document.querySelectorAll('.questions > div');
let answers = [];
let arrows = [];

questions.forEach(element => {
    element.addEventListener('click', (e) => {
        let answer = e.currentTarget.querySelector('.answer')
        let arrow = e.currentTarget.querySelector('svg')
        openAnswer(answers, answer, answer.classList.contains('open'))
        openAnswer(arrows, arrow, arrow.classList.contains('open'))
    })
    answers.push(element.querySelector('.answer'))
    arrows.push(element.querySelector('svg'))
});

function openAnswer(array, target, contains) {
    array.forEach(element => {
        element.classList.remove('open')
    });
    if (contains == false)
        target.classList.add('open')
}

const form = document.getElementById('form')
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();

    if (emailValue === '' || !isEmail(emailValue)) {
        form.classList.add('error')
    } else {
        form.classList.remove('error')
    }

}

function isEmail(email) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
}

const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close')
const navMobile = document.getElementById('nav-mobile')
const mainNav = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none'
    close.style.display = 'block'
    navMobile.classList.add('mobile-nav')
    mainNav.classList.add('layer')
})

close.addEventListener('click', () => {
    close.style.display = 'none'
    hamburger.style.display = 'block'
    navMobile.classList.remove('mobile-nav')
    mainNav.classList.remove('layer')
})

window.addEventListener('resize', () => {
    close.style.display = 'none'
    hamburger.style.display = 'none'
    navMobile.classList.remove('mobile-nav')
    mainNav.classList.remove('layer')
    if (window.innerWidth < 1024) {
        hamburger.style.display = 'block'
    }
})