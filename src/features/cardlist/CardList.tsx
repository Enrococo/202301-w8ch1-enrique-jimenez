import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CharacterResponse } from '../../model/character-model';
import { Card } from '../card/Card';
import { fetchCharacters, selectCharacters } from './CardListSlice';
import { CardListStyled } from './CardListStyled';

const CardList = () => {
  const characters = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <CardListStyled role="cardlist">
      <ul className="robots__container">
        {characters.map((character: CharacterResponse, i) => (
          <li key={character.name + 'list'}>
            <Card character={character} id={i} />
          </li>
        ))}
      </ul>
    </CardListStyled>
  );
};

export default CardList;
