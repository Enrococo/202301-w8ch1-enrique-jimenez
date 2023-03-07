import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Character } from '../../model/character-model';
import Loading from '../../shared/Loading/Loading';
import { APIStatus } from '../../shared/models/apistatus';

import { Card } from '../card/Card';
import { fetchCharacters, selectCharacters } from './CardListSlice';
import { CardListStyled } from './CardListStyled';

const CardList = () => {
  const characters = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters(1));
  }, [dispatch]);

  const generateCardListComponent = () => {
    switch (characters.status) {
      case APIStatus.LOADING:
        return <Loading />;
      case APIStatus.ERROR:
        return <p role="paragraph">Error</p>;
      default:
        return (
          <CardListStyled role="cardlist">
            <ul className="robots__container">
              {characters.characters.map((character: Character, i) => (
                <li key={character.name + 'list'}>
                  <Card character={character} id={i} />
                </li>
              ))}
            </ul>
          </CardListStyled>
        );
    }
  };
  return <>{generateCardListComponent()}</>;
};
export default CardList;
