const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    renderGame()
}

const renderGame = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.guess(guess)
    renderGame()
})

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

// getCurrentCountry().then((country) => {
//     console.log(`You are located in this country: ${country.name}`)
// }).catch((error) => {
//     console.log(error)
// })