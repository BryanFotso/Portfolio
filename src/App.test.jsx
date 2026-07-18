import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import certifications from 'data/certifications';
import { LanguageProvider } from 'i18n/LanguageContext';

const renderApp = () =>
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );

test('affiche les informations principales du portfolio', () => {
  renderApp();

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

test('masque le menu mobile au clavier et permet de le fermer avec Échap', async () => {
  renderApp();

  const menuButton = screen.getByRole('button', { name: 'Ouvrir le menu' });
  const mobileNavigation = document.getElementById('mobile-navigation');
  expect(menuButton).toHaveAttribute('aria-controls', 'mobile-navigation');
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  expect(mobileNavigation).toHaveAttribute('hidden');

  await userEvent.click(menuButton);

  expect(screen.getByRole('button', { name: 'Fermer le menu' })).toHaveAttribute(
    'aria-expanded',
    'true'
  );
  expect(mobileNavigation).not.toHaveAttribute('hidden');

  fireEvent.keyDown(document, { key: 'Escape' });

  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  expect(mobileNavigation).toHaveAttribute('hidden');
  expect(menuButton).toHaveFocus();
});

test('permet de basculer entre les thèmes clair et sombre', async () => {
  renderApp();

  const themeButton = screen.getByRole('button', { name: 'Activer le mode sombre' });
  await userEvent.click(themeButton);

  expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
  expect(screen.getByRole('button', { name: 'Activer le mode clair' })).toHaveAttribute(
    'aria-pressed',
    'true'
  );
});

test('met en avant les projets GitHub sélectionnés', () => {
  renderApp();

  expect(screen.getByRole('heading', { name: 'RNIC Copro Analytics' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Price Comparator' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'PING-51' })).toBeInTheDocument();
  expect(screen.getByText(/développement backend, gestion des fichiers/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Portfolio Personnel' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Shooter (Pygame)' })).toBeInTheDocument();
  expect(screen.getByLabelText('Projets sélectionnés')).toHaveAttribute('id', 'projects-carousel');
  expect(screen.getByLabelText('Certifications et objectifs')).toHaveAttribute(
    'id',
    'certifications-carousel'
  );
});

test('affiche les logos des entreprises et la certification Airflow', () => {
  renderApp();

  expect(screen.getByRole('img', { name: 'SIMPLICITI' })).toHaveAttribute(
    'src',
    'company-logos/simpliciti.svg'
  );
  expect(screen.getByRole('img', { name: 'Capgemini – Sogeti' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Gautier Semences' })).toBeInTheDocument();
  const airflowCard = screen
    .getByRole('heading', { name: 'Astronomer Certification for Apache Airflow 3' })
    .closest('.certification-card');
  expect(within(airflowCard).getByText('Obtenue')).toBeInTheDocument();
  expect(within(airflowCard).getByRole('link', { name: /voir le programme/i })).toHaveAttribute(
    'href',
    'https://academy.astronomer.io/page/astronomer-certification'
  );
  expect(within(airflowCard).queryByRole('link', { name: /voir le certificat/i })).toBeNull();

  const azureCard = screen
    .getByRole('heading', { name: 'Microsoft Azure Data Engineer Associate' })
    .closest('.certification-card');
  expect(within(azureCard).getByText(/d319b1c8afd26f67/i)).toBeInTheDocument();
  expect(within(azureCard).getByRole('link', { name: /voir le certificat/i })).toHaveAttribute(
    'href',
    expect.stringContaining('/credentials/d319b1c8afd26f67')
  );
  expect(
    screen.getByRole('heading', {
      name: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    })
  ).toBeInTheDocument();
  const toeicCard = screen
    .getByRole('heading', { name: 'TOEIC Listening and Reading' })
    .closest('.certification-card');
  expect(within(toeicCard).getByText('950 / 990')).toBeInTheDocument();
  expect(within(toeicCard).getByRole('link', { name: /voir le programme/i })).toHaveAttribute(
    'href',
    'https://www.etsglobal.org/fr/en/test-type-family/toeic-listening-and-reading-test'
  );
  expect(screen.getByText('En préparation')).toBeInTheDocument();
});

test('permet de consulter le portfolio en anglais', async () => {
  renderApp();

  await userEvent.selectOptions(screen.getByRole('combobox', { name: 'Langue' }), 'en');

  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /contact me/i })).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute('lang', 'en');
  expect(window.localStorage.getItem('portfolio-language')).toBe('en');
  expect(screen.getByRole('img', { name: 'SIMPLICITI' })).toHaveAttribute(
    'src',
    'company-logos/simpliciti.svg'
  );
  expect(screen.getByRole('img', { name: 'Capgemini – Sogeti' })).toHaveAttribute(
    'src',
    'company-logos/sogeti.svg'
  );
  expect(screen.getByRole('img', { name: 'Gautier Semences' })).toHaveAttribute(
    'src',
    'company-logos/gautier-semences.svg'
  );
});

test.each([
  ['es', 'Proyectos'],
  ['de', 'Projekte'],
  ['zh', '项目'],
])('permet de consulter le portfolio dans la langue %s', async (locale, heading) => {
  renderApp();

  await userEvent.selectOptions(screen.getByRole('combobox'), locale);

  expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute('lang', locale);
});

test('conserve un modèle de certification explicite dans toutes les langues', () => {
  Object.values(certifications).forEach((localizedCertifications) => {
    localizedCertifications.forEach((certification) => {
      expect(['earned', 'inProgress']).toContain(certification.status);
      expect(certification).not.toHaveProperty('link');
      expect(certification).not.toHaveProperty('linkType');
      expect(certification).not.toHaveProperty('date');

      if (certification.credentialUrl) {
        expect(certification.credentialId).toBeTruthy();
      }

      if (certification.status === 'inProgress') {
        expect(certification.credentialUrl).toBeUndefined();
        expect(certification.programUrl).toBeTruthy();
      }
    });
  });
});
