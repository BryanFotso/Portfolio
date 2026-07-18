import { localizeCollection } from 'data/localization';

export const skillCategoryDefinitions = [
  {
    id: 'languages-frameworks',
    icon: 'code',
    skills: ['Python', 'FastAPI', 'SQL', 'JavaScript', 'React'],
  },
  {
    id: 'devops-cloud',
    icon: 'cloud',
    skills: ['Azure', 'Docker', 'Git', 'CI/CD', 'Kubernetes'],
  },
  {
    id: 'data-analytics',
    icon: 'chart',
    skills: ['Pandas', 'dbt', 'Power BI', 'Apache Airflow', 'PostgreSQL'],
  },
  {
    id: 'testing-quality',
    icon: 'check',
    skills: ['Pytest', 'Unit Testing', 'Code Quality', 'Documentation', 'Code Review'],
  },
];

export const skillCategoryContent = {
  fr: {
    'languages-frameworks': { title: 'Langages & Frameworks' },
    'devops-cloud': { title: 'DevOps & Cloud' },
    'data-analytics': { title: 'Data & Analytics' },
    'testing-quality': { title: 'Testing & Quality' },
  },
  en: {
    'languages-frameworks': { title: 'Languages & Frameworks' },
    'devops-cloud': { title: 'DevOps & Cloud' },
    'data-analytics': { title: 'Data & Analytics' },
    'testing-quality': { title: 'Testing & Quality' },
  },
  es: {
    'languages-frameworks': { title: 'Lenguajes y Frameworks' },
    'devops-cloud': { title: 'DevOps y Cloud' },
    'data-analytics': { title: 'Datos y Analítica' },
    'testing-quality': { title: 'Pruebas y Calidad' },
  },
  de: {
    'languages-frameworks': { title: 'Sprachen & Frameworks' },
    'devops-cloud': { title: 'DevOps & Cloud' },
    'data-analytics': { title: 'Daten & Analytik' },
    'testing-quality': { title: 'Tests & Qualität' },
  },
  zh: {
    'languages-frameworks': { title: '语言与框架' },
    'devops-cloud': { title: 'DevOps 与云' },
    'data-analytics': { title: '数据与分析' },
    'testing-quality': { title: '测试与质量' },
  },
};

export const additionalSkillDefinitions = [
  { id: 'machine-learning' },
  { id: 'api-design' },
  { id: 'microservices' },
  { id: 'data-modeling' },
  { id: 'performance-optimization' },
  { id: 'security-best-practices' },
  { id: 'agile-scrum' },
  { id: 'technical-writing' },
  { id: 'mentoring' },
  { id: 'problem-solving' },
];

export const additionalSkillContent = {
  fr: {
    'machine-learning': { label: 'Machine Learning' },
    'api-design': { label: 'API Design' },
    microservices: { label: 'Microservices' },
    'data-modeling': { label: 'Data Modeling' },
    'performance-optimization': { label: 'Performance Optimization' },
    'security-best-practices': { label: 'Security Best Practices' },
    'agile-scrum': { label: 'Agile/Scrum' },
    'technical-writing': { label: 'Technical Writing' },
    mentoring: { label: 'Mentoring' },
    'problem-solving': { label: 'Problem Solving' },
  },
  en: {
    'machine-learning': { label: 'Machine Learning' },
    'api-design': { label: 'API Design' },
    microservices: { label: 'Microservices' },
    'data-modeling': { label: 'Data Modeling' },
    'performance-optimization': { label: 'Performance Optimization' },
    'security-best-practices': { label: 'Security Best Practices' },
    'agile-scrum': { label: 'Agile/Scrum' },
    'technical-writing': { label: 'Technical Writing' },
    mentoring: { label: 'Mentoring' },
    'problem-solving': { label: 'Problem Solving' },
  },
  es: {
    'machine-learning': { label: 'Machine Learning' },
    'api-design': { label: 'Diseño de API' },
    microservices: { label: 'Microservicios' },
    'data-modeling': { label: 'Modelado de datos' },
    'performance-optimization': { label: 'Optimización del rendimiento' },
    'security-best-practices': { label: 'Buenas prácticas de seguridad' },
    'agile-scrum': { label: 'Agile/Scrum' },
    'technical-writing': { label: 'Redacción técnica' },
    mentoring: { label: 'Mentoría' },
    'problem-solving': { label: 'Resolución de problemas' },
  },
  de: {
    'machine-learning': { label: 'Machine Learning' },
    'api-design': { label: 'API-Design' },
    microservices: { label: 'Microservices' },
    'data-modeling': { label: 'Datenmodellierung' },
    'performance-optimization': { label: 'Leistungsoptimierung' },
    'security-best-practices': { label: 'Sicherheitsstandards' },
    'agile-scrum': { label: 'Agile/Scrum' },
    'technical-writing': { label: 'Technische Dokumentation' },
    mentoring: { label: 'Mentoring' },
    'problem-solving': { label: 'Problemlösung' },
  },
  zh: {
    'machine-learning': { label: '机器学习' },
    'api-design': { label: 'API 设计' },
    microservices: { label: '微服务' },
    'data-modeling': { label: '数据建模' },
    'performance-optimization': { label: '性能优化' },
    'security-best-practices': { label: '安全最佳实践' },
    'agile-scrum': { label: 'Agile/Scrum' },
    'technical-writing': { label: '技术写作' },
    mentoring: { label: '指导与培养' },
    'problem-solving': { label: '问题解决' },
  },
};

export const getSkillCategories = (language) =>
  localizeCollection(skillCategoryDefinitions, skillCategoryContent, language);

export const getAdditionalSkills = (language) =>
  localizeCollection(additionalSkillDefinitions, additionalSkillContent, language);
