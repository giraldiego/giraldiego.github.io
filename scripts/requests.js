const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  );

  if (response.status === 200) {
    data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('An error has taken place');
  }
};