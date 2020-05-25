const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const inputEl = document.querySelector('.input');

let game1;

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMsg;

  let txt = `<div>`;
  game1.puzzle.split('').forEach((letter) => {
    txt += `<span class="puzzle-span">${letter}</span>`;
    if (letter === ' ') {
      txt += `</div><div>`;
    }
  });
  txt += `</div>`;
  puzzleEl.innerHTML = txt;
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
  inputEl.value = '';
};

const checkKey = (guess) => {
  if (game1.makeGuess(guess)) {
    document.querySelector('.input').value += guess.toUpperCase();
    render();
  }
};

document.querySelector('#reset').addEventListener('click', startGame);

window.addEventListener('keypress', (e) => {
  checkKey(String.fromCharCode(e.charCode));
});

startGame();
