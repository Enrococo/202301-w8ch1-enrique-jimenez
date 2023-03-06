import { Url } from 'url';

export interface CharacterResponse {
  name: string;
  birth_year: string;
  height: string;
  mass: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface CharacterPic extends CharacterResponse {
  thumb: Url;
}
