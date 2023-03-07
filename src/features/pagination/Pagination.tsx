import { Link } from 'react-router-dom';
import { PaginationStyled } from './PaginationStyled';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Pagination = () => {
  return (
    <PaginationStyled>
      <ul className="pagination__letters">
        {pages.map((page, i) => (
          <li key={page}>
            <Link to={`/${page}`} className="pagination__letter">
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </PaginationStyled>
  );
};
