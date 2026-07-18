const experiences = [
  {
    title: 'Consultant Data Engineer',
    company: 'Capgemini',
    period: '09/2024 – 09/2025',
    location: 'Toulouse, France',
    description:
      'Conception, développement et maintenance de pipelines de données ETL/ELT en environnement de production.',
    highlights: [
      'Collecte et transformation depuis des bases relationnelles, API REST et fichiers plats',
      'Pipelines de transformation avec Python, pandas et SQL avancé',
      'Orchestration via Airflow et migration vers des architectures dbt',
      'Contrôles de qualité, CI/CD Azure DevOps et documentation technique',
    ],
    technologies: ['Python', 'Pandas', 'SQL', 'Airflow', 'dbt', 'Azure DevOps'],
  },
  {
    title: 'Data Engineer',
    company: 'Gautier Semences',
    period: '04/2024 – 08/2024',
    location: 'Avignon, France',
    description: 'Collecte, nettoyage et transformation de données issues de l’ERP Navision.',
    highlights: [
      'Requêtes SQL complexes pour alimenter les tables analytiques',
      'Préparation des données pour leur intégration dans Sage X3',
      'Automatisation des traitements et contrôles de cohérence métiers',
    ],
    technologies: ['SQL', 'ERP Navision', 'ETL', 'Data Quality'],
  },
  {
    title: 'Data Analyst',
    company: 'FOTAGI',
    period: '06/2022 – 08/2022',
    location: 'Cameroun',
    description:
      'Développement de scripts Python et VBA pour automatiser des indicateurs de performance.',
    highlights: [
      'Migration de tableaux de bord Excel vers Power BI',
      'Préparation et transformation de données pour les analyses',
      'Amélioration de la traçabilité et de la fiabilité des données',
    ],
    technologies: ['Python', 'VBA', 'Power BI', 'Excel'],
  },
];

export default experiences;
