import { useState } from 'react';

import Icon from 'components/ui/Icon';
import { useLanguage } from 'i18n/LanguageContext';

const navItems = [
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#projects', key: 'projects' },
  { href: '#skills', key: 'skills' },
  { href: '#education', key: 'education' },
  { href: '#certifications', key: 'certifications' },
  { href: '#contact', key: 'contact' },
];

const Navbar = ({ theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" aria-label={t.navigation}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo gradient-text" onClick={closeMenu}>
          Chris.
        </a>

        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="navbar-link">
              {t.nav[item.key]}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <label className="language-switcher">
            <span className="sr-only">{t.language.label}</span>
            <select
              className="language-select"
              value={language}
              aria-label={t.language.label}
              onChange={(event) => setLanguage(event.target.value)}
            >
              <option value="fr">FR · Français</option>
              <option value="en">EN · English</option>
              <option value="es">ES · Español</option>
              <option value="de">DE · Deutsch</option>
              <option value="zh">中文</option>
            </select>
          </label>
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'dark' ? t.theme.enableLight : t.theme.enableDark}
            aria-pressed={theme === 'dark'}
            onClick={onThemeToggle}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
            <span className="theme-toggle-label">
              {theme === 'dark' ? t.theme.light : t.theme.dark}
            </span>
          </button>

          <button
            type="button"
            className="navbar-burger"
            aria-label={isMenuOpen ? t.menu.close : t.menu.open}
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
              {t.nav[item.key]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
