import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'À propos' },
    { href: '#experience', label: 'Expérience' },
    { href: '#projects', label: 'Projets' },
    { href: '#skills', label: 'Compétences' },
    { href: '#education', label: 'Formation' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="navbar-logo gradient-text">
            Chris.
          </a>

          {/* Desktop Menu */}
          <div className="navbar-desktop">
            <div className="navbar-links">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="navbar-link"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-burger"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`burger-line ${isMenuOpen ? 'is-open' : ''}`}></span>
              <span className={`burger-line ${isMenuOpen ? 'is-open' : ''}`}></span>
              <span className={`burger-line ${isMenuOpen ? 'is-open' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <div className="navbar-mobile-panel">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="navbar-mobile-link"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
