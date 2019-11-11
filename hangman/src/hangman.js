class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    guess(letter) {
        if (this.status === 'playing') {
            letter = letter.toLowerCase()
            const isUnique = !this.guessedLetters.includes(letter)
            const isIncorrect = !this.word.includes(letter)
        
            if (isUnique) {
                this.guessedLetters.push(letter)
        
                if (isIncorrect) {
                    this.remainingGuesses--
                }
            }
        
            this.calculateStatus()
        }
    }
    calculateStatus() {
        const isOutOfGuesses = this.remainingGuesses === 0
        const finished = !this.puzzle.includes('*')

        if (finished) {
            this.status = 'finished'
        } else if (isOutOfGuesses) {
            this.status = 'failed'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        let message = ''

        if (this.status === 'playing') {
            message = `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            message = `Nice try! The word was "${this.word.join('')}"`
        } else {
            message = 'Great work! You guessed the word.'
        }

        return message
    }
}

export { Hangman as default }