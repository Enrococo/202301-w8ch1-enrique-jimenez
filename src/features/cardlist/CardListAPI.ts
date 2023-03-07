export const getCharactersList = async () => {
  const response = await fetch(`https://swapi.dev/api/people`);
  const responseList = await response.json();
  const charactersList = responseList.results;

  return charactersList;
};
