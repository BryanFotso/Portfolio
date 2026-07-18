import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import { getAdditionalSkills, getSkillCategories } from 'data/skills';
import { useLanguage } from 'i18n/LanguageContext';

const Skills = () => {
  const { language, t } = useLanguage();
  const skillCategories = getSkillCategories(language);
  const additionalSkills = getAdditionalSkills(language);

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <Card key={category.id} className="skill-card">
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
          {additionalSkills.map((skill) => (
            <TechTag key={skill.id}>{skill.label}</TechTag>
          ))}
        </div>
      </Card>
    </Section>
  );
};

export default Skills;
