const projects = [
  {
    title: 'RNIC Copro Analytics',
    category: 'Data Engineering · Projet phare',
    description:
      'Pipeline analytique end-to-end pour étudier l’évolution des copropriétés françaises à partir des données ouvertes du RNIC, avec modélisation en couches bronze et silver.',
    technologies: ['DuckDB', 'dbt Core', 'Metabase', 'Docker', 'SQLFluff'],
    repository: 'https://github.com/BryanFotso/rnic-copro-analytics',
    featured: true,
  },
  {
    title: 'Price Comparator',
    category: 'Data Collection · Application web',
    description:
      'Comparateur de prix multi-sources : collecte de produits e-commerce avec Scrapy, stockage MySQL et interface web mettant en évidence les meilleures offres.',
    technologies: ['Python', 'Scrapy', 'MySQL', 'PHP', 'Docker Compose'],
    repository: 'https://github.com/BryanFotso/Price-Comparator',
  },
  {
    title: 'Ansible Toolbox',
    category: 'DevOps · Infrastructure as Code',
    description:
      'Toolbox idempotente pour installer et configurer des outils DevOps sur Ubuntu/Debian, structurée en rôles et pilotée par environnement.',
    technologies: ['Ansible', 'YAML', 'Docker', 'Terraform', 'Linux'],
    repository: 'https://github.com/BryanFotso/Ansible-Toolbox',
  },
  {
    title: 'Docker Utils',
    category: 'DevOps · Environnement local',
    description:
      'Collection de stacks Docker Compose prêtes à l’emploi pour centraliser des outils open source sur un réseau partagé avec volumes persistants et configuration par environnement.',
    technologies: ['Docker Compose', 'PostgreSQL', 'pgAdmin', 'n8n', 'Ollama'],
    repository: 'https://github.com/BryanFotso/Docker-utils',
  },
  {
    title: 'PING-51',
    category: 'Projet d’équipe · Data Platform',
    description:
      'Application web de préparation, d’analyse et de visualisation de données open source, avec backend Flask, frontend React et stockage MySQL.',
    contribution:
      'Développement backend, gestion des fichiers et des logs, traitement de plusieurs formats et conteneurisation de la plateforme.',
    technologies: ['Python', 'Flask', 'React', 'TypeScript', 'MySQL', 'Docker'],
    repository: 'https://github.com/BryanFotso/PING-51',
  },
  {
    title: 'Portfolio Personnel',
    category: 'Frontend · Personal Branding',
    description:
      'Portfolio responsive conçu pour présenter mon profil, mes expériences et mes réalisations avec une interface accessible et une chaîne CI/CD complète.',
    technologies: ['React', 'Tailwind CSS', 'Jest', 'Docker', 'GitHub Actions'],
    repository: 'https://github.com/BryanFotso/Portfolio',
    demo: 'https://bryanfotso.github.io/Portfolio/',
  },
  {
    title: 'Shooter (Pygame)',
    category: 'Développement Python · Jeu 2D',
    description:
      'Jeu 2D développé avec Pygame, intégrant gestion des collisions, système de score et effets visuels.',
    technologies: ['Python', 'Pygame'],
    repository: 'https://github.com/BryanFotso/SHOOTER',
  },
];

export default projects;
