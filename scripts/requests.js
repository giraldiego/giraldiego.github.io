const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  );

  if (response.status === 200) {
    data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('An error has taken place');
  }
};

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all', {});

  if (response.status === 200) {
    data = await response.json();
    return data.find((element) => element.alpha2Code === countryCode);
  } else {
    throw new Error('Unable to fetch data');
  }
};

const getLocation = async () => {
  response = await fetch('http://ipinfo.io/json?token=f2b4b077c5ba0a', {});

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unable to fetch your location');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};

// const getCountryOld = (countryCode) =>
//   fetch('https://restcountries.eu/rest/v2/all', {})
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error('Unable to fetch data');
//       }
//     })
//     .then((data) => {
//       return data.find((element) => element.alpha2Code === countryCode);
//     });

// const getLocationOld = () => {
//   return fetch('https://ipinfo.io/json?token=f2b4b077c5ba0a', {}).then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error('Unable to fetch your location');
//       }
//     }
//   );
// };
// const getCountryOld = (countryCode) =>
//   new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(
//           (element) => element.alpha2Code === countryCode
//         );
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject('Unable to fetch data');
//       }
//     });

//     countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
//     countryRequest.send();
//   });

// const countryCode = 'CO';

// const getPuzzle = (wordCount) =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//         reject('An error has taken place');
//       }
//     });

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//   });
