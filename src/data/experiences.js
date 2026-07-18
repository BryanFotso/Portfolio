const fr = [
  {
    title: 'Intégrateur de données',
    company: 'SIMPLICITI',
    period: '11/2025 – Présent',
    location: 'Montpellier, France',
    description:
      'Intégration, automatisation et fiabilisation de flux de données clients et opérationnels dans l’ERP STYX.',
    highlights: [
      'Contrôles de cohérence SQL avant mise en production pour limiter les anomalies d’exploitation',
      'Automatisation de traitements récurrents avec Python et cron jobs',
      'Mise en place d’un monitoring des tâches automatisées pour détecter plus rapidement les erreurs',
      'Participation à la fiabilisation des flux entre systèmes externes et ERP STYX',
      'Contribution à un POC de migration vers Azure Data Factory',
    ],
    technologies: ['SQL', 'Python', 'cron jobs', 'GitLab', 'Azure Data Factory'],
  },
  {
    title: 'Consultant Data Engineer',
    company: 'Capgemini – Sogeti',
    period: '09/2024 – 09/2025',
    location: 'Toulouse, France',
    description:
      'Conception de services et pipelines de données robustes pour répondre aux besoins des équipes Data Science.',
    highlights: [
      'Migration de flux d’ingestion après l’évolution d’API sources, dont Atlassian Jira',
      'Conception d’un pipeline de collecte multi-sources pour des plateformes de learning',
      'Développement de services Python et FastAPI pour collecter, traiter et exposer les données',
      'Industrialisation sur Kubernetes avec CI/CD, sécurité et qualité de code',
      'Tests unitaires intégrés à la CI, avec une couverture atteignant 85 %',
      'Animation d’un atelier interne sur dbt pour les consultants data',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Pytest',
      'Docker',
      'Azure DevOps',
      'dbt Core',
      'PostgreSQL',
      'Kubernetes',
    ],
  },
  {
    title: 'Ingénieur Base de Données',
    company: 'Gautier Semences',
    period: '04/2024 – 08/2024',
    location: 'Avignon, France',
    description:
      'Préparation de données ERP et automatisation de processus internes pour sécuriser une migration vers Sage X3.',
    highlights: [
      'Collaboration avec la production, la R&D et la supply chain pour structurer les transformations',
      'Personnalisation et maintenance de modules métiers Microsoft Navision',
      'Extraction, nettoyage et structuration des données Navision avant migration vers Sage X3',
      'Contrôles de cohérence pour fiabiliser les données avant intégration',
      'Automatisation des processus, passant de quatre heures à moins de trois minutes',
      'Création d’un tableau de bord de suivi du matériel et des équipements',
    ],
    technologies: ['SQL', 'MySQL', 'SQL Server', 'VBA', 'Excel', 'Microsoft Navision'],
  },
];

const en = [
  {
    title: 'Data Integration Engineer',
    company: 'SIMPLICITI',
    period: '11/2025 – Present',
    location: 'Montpellier, France',
    description:
      'Integration, automation and reliability of customer and operational data flows within the STYX ERP.',
    highlights: [
      'SQL consistency checks before production releases to reduce operational anomalies',
      'Automation of recurring processing with Python and cron jobs',
      'Monitoring of automated tasks to detect errors faster',
      'Improvement of data flows between external systems and the STYX ERP',
      'Contribution to an Azure Data Factory migration proof of concept',
    ],
    technologies: ['SQL', 'Python', 'cron jobs', 'GitLab', 'Azure Data Factory'],
  },
  {
    title: 'Data Engineer Consultant',
    company: 'Capgemini – Sogeti',
    period: '09/2024 – 09/2025',
    location: 'Toulouse, France',
    description: 'Design of robust data services and pipelines to support Data Science teams.',
    highlights: [
      'Migration of ingestion flows following source API changes, including Atlassian Jira',
      'Design of a multi-source collection pipeline for learning platforms',
      'Development of Python and FastAPI services to collect, process and expose data',
      'Kubernetes production deployment with CI/CD, security and code quality',
      'Unit tests integrated into CI with up to 85% coverage',
      'Internal dbt workshop delivered to data consultants',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Pytest',
      'Docker',
      'Azure DevOps',
      'dbt Core',
      'PostgreSQL',
      'Kubernetes',
    ],
  },
  {
    title: 'Database Engineer',
    company: 'Gautier Semences',
    period: '04/2024 – 08/2024',
    location: 'Avignon, France',
    description:
      'ERP data preparation and internal process automation to secure a migration to Sage X3.',
    highlights: [
      'Collaboration with production, R&D and supply chain teams to structure transformations',
      'Customization and maintenance of Microsoft Navision business modules',
      'Extraction, cleaning and structuring of Navision data before migration to Sage X3',
      'Consistency checks to improve data reliability before integration',
      'Process automation reducing execution time from four hours to under three minutes',
      'Creation of an equipment tracking dashboard',
    ],
    technologies: ['SQL', 'MySQL', 'SQL Server', 'VBA', 'Excel', 'Microsoft Navision'],
  },
];

const experiences = { fr, en };

export default experiences;
