const Hangman = function (word, remainingGuesses) {
    this.answer = word
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getPuzzle = function () {
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

Hangman.prototype.guess = function (letter) {
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

Hangman.prototype.calculateStatus = function () {
    const isOutOfGuesses = this.remainingGuesses === 0
    const finished = !this.getPuzzle().includes('*')

    if (finished) {
        this.status = 'finished'
    } else if (isOutOfGuesses) {
        this.status = 'failed'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    let message = ''

    if (this.status === 'playing') {
        message = `Remaining guesses: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        message = `Nice try! The word was "${this.answer}"`
    } else {
        message = 'Great work! You guessed the word.'
    }

    return message
}