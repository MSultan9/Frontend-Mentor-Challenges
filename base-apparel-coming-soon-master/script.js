const form = document.getElementById('form');
const email = document.getElementById('email-input');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();

    if (!isEmail(emailValue)) {
        form.classList.add('error')
    } else {
        form.classList.remove('error')
    }

}

function isEmail(email) {
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email));
}