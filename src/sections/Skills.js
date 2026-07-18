import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import { additionalSkills, skillCategories } from 'data/skills';
import { useLanguage } from 'i18n/LanguageContext';

const Skills = () => {
  const { language, t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="skills-grid">
        {skillCategories[language].map((category) => (
          <Card key={category.title} className="skill-card">
            <div className="card-heading">
              <span className="icon-badge">
                <Icon name={category.icon} />
              </span>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Icon name="check" /> {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <Card className="cta-card">
        <h3>{t.skills.moreTitle}</h3>
        <p>{t.skills.moreText}</p>
        <div className="tag-list tag-list-centered">
          {additionalSkills[language].map((skill) => (
            <TechTag key={skill}>{skill}</TechTag>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default Skills;
