import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import { useLanguage } from 'i18n/LanguageContext';

const educationFr = [
  {
    degree: 'Cycle Ingénieur – Big Data pour la Transformation Numérique',
    school: 'ESIGELEC',
    location: 'Rouen, France',
    period: '2022 – 2025',
    courses: [
      'Data engineering et data analytics',
      'Systèmes distribués, cloud et DevOps',
      'Traitement de données à grande échelle',
      'Python, SQL et Spark',
    ],
  },
  {
    degree: 'Prépa MPSI',
    school: 'PREPAVOGT',
    location: 'Yaoundé, Cameroun',
    period: '2020 – 2022',
    courses: [
      'Algorithmique et structures de données',
      'Mathématiques avancées',
      'Physique et modélisation',
      'Programmation Python et C',
    ],
  },
];

const educationEn = [
  {
    ...educationFr[0],
    degree: 'Engineering Degree – Big Data for Digital Transformation',
    courses: [
      'Data engineering and data analytics',
      'Distributed systems, cloud and DevOps',
      'Large-scale data processing',
      'Python, SQL and Spark',
    ],
  },
  {
    ...educationFr[1],
    degree: 'MPSI Preparatory Program',
    location: 'Yaoundé, Cameroon',
    courses: [
      'Algorithms and data structures',
      'Advanced mathematics',
      'Physics and modeling',
      'Python and C programming',
    ],
  },
];

const Education = () => {
  const { language, t } = useLanguage();
  const education = language === 'fr' ? educationFr : educationEn;

  return (
    <Section id="education" title={t.education.title}>
      <div className="card-grid">
        {education.map((item) => (
          <Card key={`${item.school}-${item.period}`} className="education-card">
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
