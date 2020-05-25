class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing'; // 'playing', 'finished', 'failed'
  }

  get statusMsg() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      console.log('---Game failed---');
      return `Nice try! The word was "${this.word.join('')}"`;
    } else {
      console.log('---Game won---');
      return `Great work! You guessed the word`;
    }
  }

  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === ' '
    );

    if (this.remainingGuesses < 1) {
      this.status = 'failed';
    } else if (finished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }

  get puzzle() {
    let puzzle = '';

    this.word.forEach((letter) => {
      this.guessedLetters.includes(letter) || letter === ' '
        ? (puzzle += letter)
        : (puzzle += '*');
    });

    return puzzle;
  }

  makeGuess(guess) {
    if (this.status !== 'playing') {
      return false;
    }

    if (!guess.match(/^[A-Za-z]+$/)) {
      return false;
    }

    guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.guessedLetters.push(guess);
    } else {
      return false;
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses -= 1;
      console.log(
        `You missed '${guess}', now you have ${this.remainingGuesses} guesses left`
      );
    }
    this.calculateStatus();
    return true;
  }
}
