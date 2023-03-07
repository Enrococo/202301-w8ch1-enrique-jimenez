import styled from 'styled-components';

export const CardStyled = styled.div`
  position: relative;
  display: grid;
  width: 200px;
  height: 250px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  gap: 5px;
  padding: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  align-items: center;
  justify-items: center;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.01);
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }
  :hover::after {
    left: 100%;
  }

  .image-container {
    width: 100%;
    height: 180px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    justify-self: center;
    background: radial-gradient(
      circle,
      rgba(255, 232, 31, 0.5) 0%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .info {
    font-family: 'Orbitron', Times, serif, sans-serif;
    color: #ffe81f;
  }

  .property {
    font-size: smaller;
  }

  .property__name {
    font-weight: bolder;
  }
`;
