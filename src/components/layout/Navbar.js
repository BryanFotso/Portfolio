import { useState } from 'react';

import Icon from 'components/ui/Icon';

export const navItems = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#education', label: 'Formation' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo gradient-text" onClick={closeMenu}>
          Chris.
        </a>

        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="navbar-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={
              theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'
            }
            aria-pressed={theme === 'dark'}
            onClick={onThemeToggle}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
            <span className="theme-toggle-label">{theme === 'dark' ? 'Clair' : 'Sombre'}</span>
          </button>

          <button
            type="button"
            className="navbar-burger"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon name={isMenuOpen ? 'x' : 'menu'} />
          </button>
        </div>

        <div id="mobile-navigation" className={`navbar-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="navbar-mobile-link" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
