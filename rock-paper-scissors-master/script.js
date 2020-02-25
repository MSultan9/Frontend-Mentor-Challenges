const rulesBtn = document.getElementById('rules');
const close = document.getElementById('close');
const modal = document.querySelector('.modal-container')
const options = document.querySelectorAll('.game > div > div')

const gameDiv = document.querySelector('.game')
const matchDiv = document.querySelector('.match')
const myPick = document.getElementById('myPick')
const housePick = document.getElementById('housePick')
const result = document.querySelector('.result')
const score = document.getElementById('score')
const reset = document.getElementById('reset')

let allOptions = [
    {
        id: 1,
        src: "./images/icon-scissors.svg",
        color: "hsl(40, 84%, 53%)",
    },
    {
        id: 2,
        src: "./images/icon-paper.svg",
        color: "hsl(230, 89%, 65%)",
    },
    {
        id: 3,
        src: "./images/icon-rock.svg",
        color: "hsl(349, 70%, 56%)",
    },
    {
        id: 4,
        src: "./images/icon-lizard.svg",
        color: "hsl(261, 72%, 63%)",
    },
    {
        id: 5,
        src: "./images/icon-spock.svg",
        color: "hsl(189, 58%, 57%)",
    },
]

rulesBtn.addEventListener('click', () => {
    setTimeout(() => {
        modal.classList.add('show-modal')
    });
    modal.style.display = 'flex'
})

close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
    setTimeout(() => {
        modal.style.display = 'none'
    }, 1000);
})

options.forEach(option => {
    option.addEventListener('click', () => {
        let clicked = option.id.replace(/\D/g, '')
        let chosen = allOptions.find(element => element.id == clicked)
        let random = Math.floor(Math.random() * 5) + 1
        let housePick = allOptions.find(element => element.id == random)
        let winner;
        if (Math.abs(clicked - random) == 1 || Math.abs(clicked - random) == 3)
            winner = clicked > random ? housePick : chosen
        else if (Math.abs(clicked - random) == 4 || Math.abs(clicked - random) == 2)
            winner = clicked > random ? chosen : housePick
        else
            winner = "tie"
        displayResult(chosen, housePick, winner)
    })
});

function displayResult(chosen, house, winner) {
    gameDiv.classList.add('hide')
    addStyles(chosen, myPick)
    addStyles(house, housePick)
    setTimeout(() => {
        gameDiv.style.display = 'none'
        matchDiv.style.display = 'grid'
        setTimeout(() => {
            matchDiv.classList.remove('hide')
            setTimeout(() => {
                housePick.classList.remove('appear')
                getResult(chosen, winner)
            }, 300);
        }, 300);
    }, 300);
}

function addStyles(player, element) {
    element.querySelector('img').src = player.src
    element.style.borderColor = player.color
    for (let i = 1; i <= 5; i++) {
        element.classList.remove(`option${i}`)
    }
    element.classList.add(`option${player.id}`)
}

function getResult(chosen, winner) {
    let picks = document.querySelectorAll('.pick')
    let backgrounds = document.querySelectorAll('.emptyPick')
    backgrounds[1].style.opacity = 0
    backgrounds[0].style.opacity = 0
    setTimeout(() => {
        if (window.innerWidth > 1024) {
            picks[0].classList.add('translateLeft')
            picks[1].classList.add('translateRight')
        }
        result.style.display = 'flex';
        let getScore = parseInt(score.textContent)
        if (winner == "tie") {
            result.querySelector('div').textContent = 'DRAW'
        } else if (winner.id == chosen.id) {
            result.querySelector('div').textContent = 'YOU WIN'
            score.textContent = getScore + 1;
            backgrounds[0].classList.add('winner')

            setTimeout(() => {
                backgrounds[0].style.opacity = 1
            }, 500);
        } else {
            result.querySelector('div').textContent = 'YOU LOSE'
            if (getScore > 0)
                score.textContent = getScore - 1
            backgrounds[1].classList.add('winner')

            setTimeout(() => {
                backgrounds[1].style.opacity = 1
            }, 500);
        }
        setTimeout(() => {
            result.classList.remove('hide')
        }, 300);
    }, 1000);
}

reset.addEventListener('click', () => {
    result.classList.add('hide')
    let backgrounds = document.querySelectorAll('.emptyPick')
    let picks = document.querySelectorAll('.pick')
    picks[0].classList.remove('translateLeft')
    picks[1].classList.remove('translateRight')
    backgrounds[0].classList.remove('winner')
    backgrounds[1].classList.remove('winner')
    setTimeout(() => {
        result.style.display = 'none'
        matchDiv.classList.add('hide')
        setTimeout(() => {
            housePick.classList.add('appear')
            gameDiv.style.display = 'grid'
            matchDiv.style.display = 'none'
            backgrounds[1].style.opacity = 1
            backgrounds[0].style.opacity = 1
            setTimeout(() => {
                gameDiv.classList.remove('hide')
            }, 300);
        }, 100);
    }, 300);
}) 