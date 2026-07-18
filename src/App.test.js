import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('affiche les informations principales du portfolio', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: 'Chris Fotso' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projets' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /télécharger mon cv/i })).toHaveAttribute(
    'href',
    'Data_engineer_FR.pdf'
  );
});

test('le menu mobile expose son état et sa cible', () => {
  render(<App />);

  const menuButton = screen.getByRole('button', { name: 'Ouvrir le menu' });
  expect(menuButton).toHaveAttribute('aria-controls', 'mobile-navigation');
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  userEvent.click(menuButton);

  expect(screen.getByRole('button', { name: 'Fermer le menu' })).toHaveAttribute(
    'aria-expanded',
    'true'
  );
});
