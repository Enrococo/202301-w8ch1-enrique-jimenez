import { render, screen } from '@testing-library/react';
import { CharacterMock } from '../../mocks/character-mock';
import { Card } from './Card';

describe('Given a card component', () => {
  const character = CharacterMock;
  test('When the card is rendered, it should have a character on it', () => {
    render(<Card character={character} id={1} />);
    expect(screen.getByText('LukeSW')).toBeInTheDocument();
  });
});
