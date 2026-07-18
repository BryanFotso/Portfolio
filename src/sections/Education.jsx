import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import { getEducation } from 'data/education';
import { useLanguage } from 'i18n/LanguageContext';

const Education = () => {
  const { language, t } = useLanguage();
  const education = getEducation(language);

  return (
    <Section id="education" title={t.education.title}>
      <div className="card-grid">
        {education.map((item) => (
          <Card key={item.id} className="education-card">
            <span className="period">{item.period}</span>
            <h3>{item.degree}</h3>
            <p className="experience-company">
              <Icon name="building" /> {item.school}
            </p>
            <p className="meta">
              <Icon name="location" /> {item.location}
            </p>
            <ul className="highlight-list">
              {item.courses.map((course) => (
                <li key={course}>
                  <Icon name="check" /> {course}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Education;
