const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Whoops! It looks like you forgot to add your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Please provide a valid email address');
    } else {
        setSuccessFor(email);
    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    input.classList.add('error')
    if (window.innerWidth <= 1024) {
        const small = formControl.querySelector('.warning');
        small.style.display = 'block';
        small.innerText = message;
    } else {
        const error = document.getElementById('warning')
        error.style.visibility = 'visible'
        error.innerText = message
    }
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    input.classList.remove('error')
    if (window.innerWidth <= 1024) {
        const small = formControl.querySelector('.warning');
        small.style.display = 'none';
    } else {
        const error = document.getElementById('warning')
        error.style.visibility = 'hidden'
    }
}

function isEmail(email) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
}