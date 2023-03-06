import CardList from '../../features/cardlist/CardList';
import { HomeStyled } from './HomStyled';

export const Home = () => {
  return (
    <HomeStyled>
      <h1 className="menu">Home</h1>
      <CardList />
    </HomeStyled>
  );
};
