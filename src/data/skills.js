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

const localizedCategories = (titles) =>
  categoriesFr.map((category, index) => ({ ...category, title: titles[index] }));

const categoriesEs = localizedCategories([
  'Lenguajes y Frameworks',
  'DevOps y Cloud',
  'Datos y Analítica',
  'Pruebas y Calidad',
]);
const categoriesDe = localizedCategories([
  'Sprachen & Frameworks',
  'DevOps & Cloud',
  'Daten & Analytik',
  'Tests & Qualität',
]);
const categoriesZh = localizedCategories(['语言与框架', 'DevOps 与云', '数据与分析', '测试与质量']);

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

const additionalEs = [
  'Machine Learning',
  'Diseño de API',
  'Microservicios',
  'Modelado de datos',
  'Optimización del rendimiento',
  'Buenas prácticas de seguridad',
  'Agile/Scrum',
  'Redacción técnica',
  'Mentoría',
  'Resolución de problemas',
];
const additionalDe = [
  'Machine Learning',
  'API-Design',
  'Microservices',
  'Datenmodellierung',
  'Leistungsoptimierung',
  'Sicherheitsstandards',
  'Agile/Scrum',
  'Technische Dokumentation',
  'Mentoring',
  'Problemlösung',
];
const additionalZh = [
  '机器学习',
  'API 设计',
  '微服务',
  '数据建模',
  '性能优化',
  '安全最佳实践',
  'Agile/Scrum',
  '技术写作',
  '指导与培养',
  '问题解决',
];

export const skillCategories = {
  fr: categoriesFr,
  en: categoriesEn,
  es: categoriesEs,
  de: categoriesDe,
  zh: categoriesZh,
};
export const additionalSkills = {
  fr: additionalFr,
  en: additionalEn,
  es: additionalEs,
  de: additionalDe,
  zh: additionalZh,
};
