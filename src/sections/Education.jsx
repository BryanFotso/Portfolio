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

const educationEs = [
  {
    ...educationFr[0],
    degree: 'Ingeniería – Big Data para la Transformación Digital',
    courses: [
      'Data engineering y data analytics',
      'Sistemas distribuidos, cloud y DevOps',
      'Procesamiento de datos a gran escala',
      'Python, SQL y Spark',
    ],
  },
  {
    ...educationFr[1],
    degree: 'Programa preparatorio MPSI',
    location: 'Yaundé, Camerún',
    courses: [
      'Algoritmos y estructuras de datos',
      'Matemáticas avanzadas',
      'Física y modelado',
      'Programación en Python y C',
    ],
  },
];

const educationDe = [
  {
    ...educationFr[0],
    degree: 'Ingenieurstudium – Big Data für die digitale Transformation',
    courses: [
      'Data Engineering und Data Analytics',
      'Verteilte Systeme, Cloud und DevOps',
      'Datenverarbeitung im großen Maßstab',
      'Python, SQL und Spark',
    ],
  },
  {
    ...educationFr[1],
    degree: 'MPSI-Vorbereitungsstudium',
    location: 'Yaoundé, Kamerun',
    courses: [
      'Algorithmen und Datenstrukturen',
      'Höhere Mathematik',
      'Physik und Modellierung',
      'Programmierung mit Python und C',
    ],
  },
];

const educationZh = [
  {
    ...educationFr[0],
    degree: '工程师学位 — 数字化转型大数据方向',
    courses: [
      '数据工程与数据分析',
      '分布式系统、云与 DevOps',
      '大规模数据处理',
      'Python、SQL 与 Spark',
    ],
  },
  {
    ...educationFr[1],
    degree: 'MPSI 预科课程',
    location: '喀麦隆雅温得',
    courses: ['算法与数据结构', '高等数学', '物理与建模', 'Python 与 C 编程'],
  },
];

const educationByLanguage = {
  fr: educationFr,
  en: educationEn,
  es: educationEs,
  de: educationDe,
  zh: educationZh,
};

const Education = () => {
  const { language, t } = useLanguage();
  const education = educationByLanguage[language];

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
