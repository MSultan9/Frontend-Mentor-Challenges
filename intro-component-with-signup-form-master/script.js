const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue === '') {
        setErrorFor(firstname);
    } else {
        setSuccessFor(firstname);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname);
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email);
    } else if (!isEmail(emailValue)) {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password);
    } else {
        setSuccessFor(password);
    }

}

function setErrorFor(input) {
    const formControl = input.parentElement;
    const image = formControl.querySelector('.error');
    const warning = formControl.querySelector('.warning');
    image.style.display = 'block';
    warning.style.display = 'block'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const image = formControl.querySelector('.error');
    const warning = formControl.querySelector('.warning');
    image.style.display = 'none';
    warning.style.display = 'none'
}

function isEmail(email) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
}