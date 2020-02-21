const form = document.getElementById('form')
const link = document.getElementById('link')
const container = document.querySelector('.links-container')
let allLinks = []

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
    const linkValue = link.value.trim();

    if (linkValue == '')
        form.classList.add('error')
    else
        sendRequest(linkValue)
}

function sendRequest(url) {

    fetch('https://rel.ink/api/links/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
        })
    }).then(function (response) {
        if (response.ok) {
            form.classList.remove('error')
            response.json().then((data) => {
                createLink(data)
            });
        } else {
            form.classList.add('error')
        }
    }).catch((err) => {
        form.classList.add('error')
    })
}

function createLink(response) {
    let originalLink = response.url;
    let newLink = `https:rel.ink/${response.hashid}`
    addNew(originalLink, newLink)
}

function addNew(original, shortened, newAdd = true) {
    let mainDiv = document.createElement("div")
    let firstDiv = document.createElement("div")
    firstDiv.textContent = original
    let secondDiv = document.createElement("div")
    let innerDiv = document.createElement("div")
    innerDiv.textContent = shortened;
    let button = document.createElement("button")
    button.textContent = "Copy"
    button.addEventListener('click', () => {
        copyToClipboard(shortened)
        button.textContent = "Copied!"
        button.classList.add('copied')
    })
    secondDiv.append(innerDiv);
    secondDiv.append(button)
    mainDiv.append(firstDiv)
    mainDiv.append(secondDiv)
    container.append(mainDiv)
    let newLink = {
        original: original,
        short: shortened
    }
    allLinks.push(newLink)
    if (newAdd = true)
        saveElement()
}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function saveElement() {
    window.localStorage.setItem('links', JSON.stringify(allLinks));
}


let localStorage = JSON.parse(window.localStorage.getItem('links'))
if (localStorage != null) {
    for (let storage of localStorage) {
        addNew(storage.original, storage.short, false)
    }
}

const hamburger = document.getElementById('hamburger')
const nav = document.querySelector('.navigation')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav')
})