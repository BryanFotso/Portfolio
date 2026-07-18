import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';

const education = [
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

const Education = () => (
  <Section id="education" title="Formation">
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

export default Education;
