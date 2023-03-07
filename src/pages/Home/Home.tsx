import CardList from '../../features/cardlist/CardList';
import { Pagination } from '../../features/pagination/Pagination';
import { HomeStyled } from './HomStyled';

export const Home = () => {
  return (
    <HomeStyled>
      <h1 className="menu">Home</h1>
      <Pagination />
      <CardList />
    </HomeStyled>
  );
};
