import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import experiences from 'data/experiences';

const Experience = () => (
  <Section id="experience" title="Expérience">
    <div className="timeline">
      {experiences.map((experience) => (
        <div key={`${experience.company}-${experience.period}`} className="timeline-item">
          <Card className="experience-card">
            <header className="experience-header">
              <div>
                <h3>{experience.title}</h3>
                <p className="experience-company">
                  <Icon name="building" /> {experience.company}
                </p>
                <p className="meta">
                  <Icon name="location" /> {experience.location}
                </p>
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
            <div className="tag-list" aria-label="Technologies utilisées">
              {experience.technologies.map((technology) => (
                <TechTag key={technology}>{technology}</TechTag>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
    <Card className="cta-card">
      <h3>Prêt pour de nouveaux défis</h3>
      <p>Je suis ouvert aux opportunités de collaboration et aux projets innovants.</p>
      <a href="#contact" className="btn-primary">
        Discutons de votre projet <Icon name="email" />
      </a>
    </Card>
  </Section>
);

export default Experience;
