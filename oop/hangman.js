const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const hangman1 = new Hangman('obstreporous', 5)
const hangman2 = new Hangman('vindicate', 4)

console.log(hangman1)
console.log(hangman2)