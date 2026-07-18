import ExternalLink from 'components/ui/ExternalLink';
import Icon from 'components/ui/Icon';
import { profile, socialLinks } from 'data/profile';

const stats = [
  { value: '1+', label: "Années d'expérience" },
  { value: '15+', label: 'Technologies maîtrisées' },
  { value: '5+', label: 'Projets livrés' },
];

const Hero = () => (
  <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-content">
      <p className="eyebrow">Portfolio</p>
      <h1 id="hero-title">{profile.shortName}</h1>
      <p className="hero-role gradient-text">{profile.role}</p>
      <p className="hero-intro">
        Spécialisé dans les architectures de données, le développement backend et les pratiques
        DevOps. Je transforme les données en solutions fiables et actionnables.
      </p>

      <div className="hero-buttons">
        <a href="#contact" className="btn-primary">
          Me contacter <Icon name="email" />
        </a>
        <ExternalLink href={profile.resume} download>
          Télécharger mon CV
        </ExternalLink>
      </div>

      <div className="social-links" aria-label="Réseaux sociaux">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={`${social.label} de ${profile.shortName}`}
          >
            <Icon name={social.icon} />
          </a>
        ))}
      </div>

      <dl className="hero-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <dt className="hero-stat-label">{stat.label}</dt>
            <dd className="hero-stat-value">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
