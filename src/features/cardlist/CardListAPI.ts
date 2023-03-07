import {
  Character,
  CharacterResponse,
  Characters,
} from '../../model/character-model';

const getIdFromCharacter = (character: Character): string => {
  const urlSplitted = character.url.split('/');
  return urlSplitted[urlSplitted.length - 2];
};

export const getCharactersList = async (page: number): Promise<Characters> => {
  const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
  if (!response.ok) {
    throw new Error('General Error');
  }
  const characters: CharacterResponse = await response.json();
  return {
    count: characters.count,
    characters: characters.results.map((character) => {
      const id = getIdFromCharacter(character);
      return {
        ...character,
        id,
        imgUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
      };
    }),
  };
};
