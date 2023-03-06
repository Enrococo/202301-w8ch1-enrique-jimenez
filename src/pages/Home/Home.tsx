import { Card } from '../../features/card/Card';
import { CharacterMock } from '../../mocks/character-mock';
import { HomeStyled } from './HomStyled';

export const Home = () => {
  return (
    <HomeStyled>
      <h1 className="menu">Home</h1>
      <Card character={CharacterMock} />
    </HomeStyled>
  );
};
