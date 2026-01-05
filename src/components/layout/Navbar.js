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
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Logo */}
          <div>
            <a href="#home" className="gradient-text" style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              textDecoration: 'none'
            }}>
              Chris.
            </a>
          </div>

          {/* Desktop Menu */}
          <div style={{ 
            display: 'none', 
            '@media (min-width: 768px)': { display: 'block' } 
          }}>
            <div style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center'
            }}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  style={{
                    color: '#8e8e93',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#007aff';
                    e.target.style.background = 'rgba(0, 122, 255, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#8e8e93';
                    e.target.style.background = 'transparent';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div style={{ 
            display: 'block', 
            '@media (min-width: 768px)': { display: 'none' } 
          }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                color: '#8e8e93',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#007aff'}
              onMouseLeave={(e) => e.target.style.color = '#8e8e93'}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{
                  width: '1.5rem',
                  height: '2px',
                  background: 'currentColor',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none'
                }}></span>
                <span style={{
                  width: '1.5rem',
                  height: '2px',
                  background: 'currentColor',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isMenuOpen ? 0 : 1
                }}></span>
                <span style={{
                  width: '1.5rem',
                  height: '2px',
                  background: 'currentColor',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none'
                }}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{
          display: isMenuOpen ? 'block' : 'none',
          '@media (min-width: 768px)': { display: 'none' }
        }}>
          <div style={{
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            marginTop: '0.5rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  color: '#8e8e93',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.75rem 1rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '8px',
                  marginBottom: '0.25rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#007aff';
                  e.target.style.background = 'rgba(0, 122, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#8e8e93';
                  e.target.style.background = 'transparent';
                }}
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
