import ExternalLink from 'components/ui/ExternalLink';
import Icon from 'components/ui/Icon';
import { profile, socialLinks } from 'data/profile';
import { useLanguage } from 'i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const stats = ['1+', '15+', '5+'].map((value, index) => ({ value, label: t.hero.stats[index] }));

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Portfolio</p>
        <h1 id="hero-title">{profile.shortName}</h1>
        <p className="hero-role gradient-text">{profile.role}</p>
        <p className="hero-intro">{t.hero.intro}</p>

        <div className="hero-buttons">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            {t.hero.contact} <Icon name="email" />
          </a>
          <ExternalLink href={profile.resume} download>
            {t.hero.resume}
          </ExternalLink>
        </div>

        <div className="social-links" aria-label={t.hero.social}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={`${social.label} — ${profile.shortName}`}
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
};

export default Hero;
