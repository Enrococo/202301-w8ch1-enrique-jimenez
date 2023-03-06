import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from './MainLayout';
import { BrowserRouter } from 'react-router-dom';

test('When rendering mainlayout, then navbar and outlet must be in the document', () => {
  render(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
  const title = screen.getByText('STAR-WARS');
  expect(title).toBeInTheDocument();
  const footer = screen.getByText('Made by @enroco');
  expect(footer).toBeInTheDocument();
});
