import styled from 'styled-components';

export const PaginationStyled = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 5%;

  .pagination__letters {
    width: 100%;
    display: flex;
    gap: 2rem;
    text-decoration: none;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .pagination__letter {
    color: #ffe81f;
    font-size: larger;
  }

  .pagination__letter_clicked {
    color: #ff642f;
    font-size: larger;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
