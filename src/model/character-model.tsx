import { Url } from 'url';
import { APIStatus } from '../shared/models/apistatus';

export interface Character {
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

export interface CharacterResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
}

export interface CharacterExtend extends Character {
  imgUrl: Url;
  id: string;
}

export interface Characters {
  count: number;
  characters: Character[];
}

export interface CharacterState extends Characters {
  currentPage: number;
  status: APIStatus;
}
