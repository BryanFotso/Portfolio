const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Chris Fotso</h1>
        <div className="gradient-text">Data Engineer</div>
        <p>
          Spécialisé dans les architectures de données, le développement backend et les pratiques
          DevOps. Je transforme les données en insights actionnables pour des solutions innovantes.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            <i className="fas fa-envelope"></i>
            Me contacter
          </a>
          <a href="Data_engineer_FR.pdf" className="btn-outline" download>
            <i className="fas fa-download"></i>
            Télécharger CV
          </a>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <a
            href="https://www.linkedin.com/in/chris-fotso/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#007aff',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'rgba(0, 122, 255, 0.1)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.1)';
              e.target.style.background = 'rgba(0, 122, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.background = 'rgba(0, 122, 255, 0.1)';
            }}
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/BryanFotso"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#007aff',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              padding: '0.5rem',
              borderRadius: '50%',
              background: 'rgba(0, 122, 255, 0.1)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.1)';
              e.target.style.background = 'rgba(0, 122, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.background = 'rgba(0, 122, 255, 0.1)';
            }}
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">1+</div>
            <div className="hero-stat-label">Années d'expérience</div>
          </div>

          <div className="hero-stat">
            <div className="hero-stat-value">15+</div>
            <div className="hero-stat-label">Technologies maîtrisées</div>
          </div>

          <div className="hero-stat hero-stat--wide">
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Projets livrés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
