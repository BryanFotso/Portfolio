const categoriesFr = [
  {
    title: 'Langages & Frameworks',
    icon: 'code',
    skills: ['Python', 'FastAPI', 'SQL', 'JavaScript', 'React'],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'cloud',
    skills: ['Azure', 'Docker', 'Git', 'CI/CD', 'Kubernetes'],
  },
  {
    title: 'Data & Analytics',
    icon: 'chart',
    skills: ['Pandas', 'dbt', 'Power BI', 'Apache Airflow', 'PostgreSQL'],
  },
  {
    title: 'Testing & Quality',
    icon: 'check',
    skills: ['Pytest', 'Unit Testing', 'Code Quality', 'Documentation', 'Code Review'],
  },
];

const categoriesEn = categoriesFr.map((category, index) => ({
  ...category,
  title: ['Languages & Frameworks', 'DevOps & Cloud', 'Data & Analytics', 'Testing & Quality'][
    index
  ],
}));

const additionalFr = [
  'Machine Learning',
  'API Design',
  'Microservices',
  'Data Modeling',
  'Performance Optimization',
  'Security Best Practices',
  'Agile/Scrum',
  'Technical Writing',
  'Mentoring',
  'Problem Solving',
];

const additionalEn = [
  'Machine Learning',
  'API Design',
  'Microservices',
  'Data Modeling',
  'Performance Optimization',
  'Security Best Practices',
  'Agile/Scrum',
  'Technical Writing',
  'Mentoring',
  'Problem Solving',
];

export const skillCategories = { fr: categoriesFr, en: categoriesEn };
export const additionalSkills = { fr: additionalFr, en: additionalEn };
