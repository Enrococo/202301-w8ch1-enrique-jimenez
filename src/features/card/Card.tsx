import { FC } from 'react';
import { Character } from '../../model/character-model';
import { CardStyled } from './CardStyled';

import useSound from 'use-sound';
import React from 'react';

interface CardProps {
  character: Character;
  id: number;
}

export const Card: FC<CardProps> = ({ character, id }) => {
  const soundUrl = '../../assets/lightsaber.mp3';
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });

  return (
    <CardStyled>
      <div
        className="image-container"
        onMouseEnter={() => stop()}
        onMouseLeave={() => play()}
      >
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
