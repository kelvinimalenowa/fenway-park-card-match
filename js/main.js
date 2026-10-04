const container = document.querySelector('.container')
container.addEventListener('click', whichCard)

document.querySelector('button').addEventListener('click', random)

let flipOne = undefined
let flipTwo = undefined


function random() {
    container.innerHTML = ''
    let cards = ['📊', '📊', '👍', '👍', 'match3', 'match3', 'match4', 'match4', 'match5', 'match5',]

    while (cards.length > 0) {
        const rando = Math.floor(Math.random() * cards.length)
        const div = document.createElement('div')
        container.appendChild(div)
        div.classList.add('card', cards[rando])
        div.innerText = ''
        cards.splice(rando, 1)
    }
    flipOne = undefined
    flipTwo = undefined
}
random()

function whichCard(e) {
    e.target.innerText = e.target.className

    if (flipOne != undefined) {
        flipTwo = e.target
    } else {
        flipOne = e.target
        return
    }

    if (flipOne.className === flipTwo.className) {
        console.log
    } else {
        flipOne.innerText = ''
        flipTwo.innerText = ''
    }
    flipOne = undefined
    flipTwo = undefined
}