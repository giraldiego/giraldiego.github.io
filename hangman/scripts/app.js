const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const inputEl = document.querySelector('.input');

let game1;
let words = '3';

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMsg;

  let txt = `<div class="word">`;
  game1.puzzle.split('').forEach((letter) => {
    txt += `<span class="puzzle-span">${letter}</span>`;
    if (letter === ' ') {
      txt += `</div><div class="word">`;
    }
  });
  txt += `</div>`;
  puzzleEl.innerHTML = txt;
};

const startGame = async () => {
  const puzzle = await getPuzzle(words);
  game1 = new Hangman(puzzle, 5);
  render();
  inputEl.value = '';
};

const checkKey = (guess) => {
  if (game1.makeGuess(guess)) {
    document.querySelector('.input').value += guess.toUpperCase();
  }
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

window.addEventListener('keypress', (e) => {
  checkKey(String.fromCharCode(e.charCode));
});

document.querySelector('#words').addEventListener('change', (e) => {
  words = e.target.value;
  //console.log(words);
  startGame();
});

startGame();
