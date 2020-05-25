const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

let game1;

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMsg;

  let txt = '';
  game1.puzzle.split('').forEach((letter) => {
    txt += `<span class="puzzle-span">${letter}</span>`;
  });
  puzzleEl.innerHTML = txt;
};

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector('#reset').addEventListener('click', startGame);

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

window.addEventListener('input', (event) => {
  console.log(event);
});

startGame();
