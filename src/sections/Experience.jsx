import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import experiences from 'data/experiences';
import { useLanguage } from 'i18n/LanguageContext';

const Experience = () => {
  const { language, t } = useLanguage();

  return (
    <Section id="experience" title={t.experience.title}>
      <div className="timeline">
        {experiences[language].map((experience) => (
          <div key={`${experience.company}-${experience.period}`} className="timeline-item">
            <Card className="experience-card">
              <header className="experience-header">
                <div className="experience-identity">
                  <span className={`experience-logo ${experience.logoClass || ''}`}>
                    <img src={experience.logo} alt={experience.company} loading="lazy" />
                  </span>
                  <div>
                    <h3>{experience.title}</h3>
                    <p className="experience-company">
                      <Icon name="building" /> {experience.company}
                    </p>
                    <p className="meta">
                      <Icon name="location" /> {experience.location}
                    </p>
                  </div>
                </div>
                <span className="period">{experience.period}</span>
              </header>
              <p>{experience.description}</p>
              <ul className="highlight-list">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Icon name="check" /> <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="tag-list" aria-label={t.experience.technologies}>
                {experience.technologies.map((technology) => (
                  <TechTag key={technology}>{technology}</TechTag>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Card className="cta-card">
        <h3>{t.experience.ctaTitle}</h3>
        <p>{t.experience.ctaText}</p>
        <a href="#contact" className="btn-primary">
          {t.experience.ctaButton} <Icon name="email" />
        </a>
      </Card>
    </Section>
  );
};

export default Experience;
