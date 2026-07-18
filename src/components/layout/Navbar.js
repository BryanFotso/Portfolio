import { useState } from 'react';

import Icon from 'components/ui/Icon';
import { useLanguage } from 'i18n/LanguageContext';

export const navItems = [
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
          <div className="language-switcher" role="group" aria-label={t.language.label}>
            {['fr', 'en'].map((locale) => (
              <button
                key={locale}
                type="button"
                className={`language-button ${language === locale ? 'is-active' : ''}`}
                aria-label={locale === 'fr' ? t.language.french : t.language.english}
                aria-pressed={language === locale}
                onClick={() => setLanguage(locale)}
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
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
