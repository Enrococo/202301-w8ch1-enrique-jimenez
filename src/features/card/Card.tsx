import { FC } from 'react';
import { CharacterResponse } from '../../model/character-model';
import { CardStyled } from './CardStyled';

interface CardProps {
  character: CharacterResponse;
  id: number;
}

export const Card: FC<CardProps> = ({ character, id }) => {
  return (
    <CardStyled>
      <div className="image-container">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${
            id + 1
          }.jpg`}
          className={'image'}
          alt={`${character.name}-pic`}
        />
      </div>
      <div className={'info'}>
        <div className={'properties'}>
          <span className={'property'}>Name:</span>
          <span className={'property__name'}> {character.name}</span>
        </div>
      </div>
    </CardStyled>
  );
};
