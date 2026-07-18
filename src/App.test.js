import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('affiche les informations principales du portfolio', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1, name: 'Chris Fotso' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projets' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /télécharger mon cv/i })).toHaveAttribute(
    'href',
    'Chris_Fotso_Data_Engineer_FR.pdf'
  );
  expect(screen.getByRole('link', { name: /me contacter/i })).toHaveAttribute(
    'href',
    'mailto:chrisfotso@icloud.com'
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

test('met en avant les projets GitHub sélectionnés', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'RNIC Copro Analytics' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Price Comparator' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'PING-51' })).toBeInTheDocument();
  expect(screen.getByText(/développement backend, gestion des fichiers/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Portfolio Personnel' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Shooter (Pygame)' })).toBeInTheDocument();
  expect(screen.getByLabelText('Projets sélectionnés')).toHaveAttribute('id', 'projects-carousel');
  expect(screen.getByLabelText('Certifications obtenues')).toHaveAttribute(
    'id',
    'certifications-carousel'
  );
});
