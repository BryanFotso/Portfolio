import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import { useLanguage } from 'i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const icons = ['code', 'chart', 'cloud'];

  return (
    <Section id="about" title={t.about.title}>
      <Card className="about-card">
        <div className="card-heading">
          <Icon name="user" />
          <h3>{t.about.heading}</h3>
        </div>
        <p className="lead">{t.about.intro}</p>
        <div className="speciality-grid">
          {t.about.specialities.map(([title, description], index) => (
            <div key={title} className="speciality">
              <Icon name={icons[index]} />
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default About;
