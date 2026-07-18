const experiences = [
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

export default experiences;
