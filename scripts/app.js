const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

let game1;

const render = () => {
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMsg;

  let txt = '';
  game1.puzzle.split('').forEach((letter) => {
    txt += `<span>${letter}</span>`;
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

startGame();

// getPuzzle('2')
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error.message}`);
//   });

// getCountry('US')
//   .then((country) => {
//     console.log(`Country name: ${country.name}`);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

getCurrentCountry()
  .then((country) => {
    console.log(country.name);
  })
  .catch((error) => {
    console.log(error);
  });

// getLocation()
//   .then((location) => {
//     //print city, region and country
//     return getCountry(location.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(`Location Error: ${error}`);
//   });

// getLocation()
//   .then((location) => {
//     //print city, region and country
//     console.log(
//       `City: ${location.city}; Region: ${location.region}; Country: ${location.country}`
//     );
//   })
//   .catch((error) => {
//     console.log(`Location Error: ${error}`);
//   });

// getPuzzle('5').then(
//   (puzzle) => {
//     console.log(`Puzzle word: ${puzzle}`);
//   },
//   (err) => {
//     console.log(`Error: ${err}`);
//   }
// );

// getCountry('US').then(
//   (country) => {
//     console.log(`Country name: ${country.name}`);
//   },
//   (err) => {
//     console.log(`Error: ${err}`);
//   }
// );

// fetch('http://puzzle.mead.io/puzzle?wordCount=1', {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Unable to fetch the puzzle');
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getPuzzle('3', (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

// Making an http request

// getCountry('CO', (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(`Country name: ${country.name}`);
//   }
// });
