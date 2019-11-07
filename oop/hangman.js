const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '*' * this.word.length
    return puzzle
}

const hangman1 = new Hangman('ObStRepErous', 5)
const hangman2 = new Hangman('vinDIcate', 4)

console.log(hangman1.word)
console.log(hangman2)
console.log(hangman1.getPuzzle())