const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game = new Hangman('Car parts', 4)

const renderGame = () => {
    puzzleEl.textContent = game.puzzle
    guessesEl.textContent = game.statusMessage
}

renderGame()

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.guess(guess)
    renderGame()
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(err)
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log(`You are located in this country: ${country.name}`)
}).catch((err) => {
    console.log(err)
})