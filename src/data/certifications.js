const fr = [
  {
    title: 'Microsoft Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: '2024',
    description:
      'Conception et mise en œuvre de solutions de données avec Data Factory, Data Lake, Synapse et Databricks.',
    technologies: ['Azure', 'Data Factory', 'Databricks'],
    link: 'https://learn.microsoft.com/fr-fr/users/fotsotalachrisbryan-6351/credentials/d319b1c8afd26f67',
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Fondamentaux du cloud Azure, de ses services et de la sécurité.',
    technologies: ['Azure', 'Cloud'],
    link: 'https://learn.microsoft.com/api/credentials/share/en-us/FOTSOTALAChrisBryan-6351/69F61393D42A9B0F?sharingId=64AB8BAE904A9F5B',
  },
  {
    title: 'Dataiku Advanced Designer',
    issuer: 'Dataiku',
    date: '2024',
    description: 'Conception de projets data, automatisation et déploiement avec Dataiku.',
    technologies: ['Dataiku', 'Automation'],
    link: 'https://verify.skilljar.com/c/vhzhvb3pfhdd',
  },
  {
    title: 'Dataiku Core Designer',
    issuer: 'Dataiku',
    date: '2023',
    description: 'Préparation, exploration et modélisation de données dans Dataiku.',
    technologies: ['Dataiku', 'Data Prep'],
    link: 'https://verify.skilljar.com/c/r8gwv2dz3pd5',
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    date: '2022',
    description:
      'Analyse, visualisation et manipulation avancée des données avec Python et pandas.',
    technologies: ['Python', 'Pandas'],
  },
  {
    title: 'Astronomer Certification for Apache Airflow 3',
    issuer: 'Astronomer',
    date: '2026',
    description:
      'Maîtrise des fondamentaux d’Apache Airflow 3, de la création de DAGs et de l’orchestration de pipelines de données.',
    technologies: ['Apache Airflow 3', 'DAGs', 'Data Orchestration'],
    link: 'https://academy.astronomer.io/page/astronomer-certification',
    featured: true,
  },
];

const en = [
  {
    ...fr[0],
    description:
      'Design and implementation of data solutions with Data Factory, Data Lake, Synapse and Databricks.',
  },
  { ...fr[1], description: 'Fundamentals of Azure cloud services, architecture and security.' },
  { ...fr[2], description: 'Data project design, automation and deployment with Dataiku.' },
  { ...fr[3], description: 'Data preparation, exploration and modeling with Dataiku.' },
  {
    ...fr[4],
    description: 'Advanced data analysis, visualization and manipulation with Python and pandas.',
  },
  {
    ...fr[5],
    description:
      'Mastery of Apache Airflow 3 fundamentals, DAG authoring and data pipeline orchestration.',
  },
];

const es = [
  {
    ...fr[0],
    description:
      'Diseño e implementación de soluciones de datos con Data Factory, Data Lake, Synapse y Databricks.',
  },
  { ...fr[1], description: 'Fundamentos de Azure, sus servicios cloud, arquitectura y seguridad.' },
  {
    ...fr[2],
    description: 'Diseño, automatización y despliegue de proyectos de datos con Dataiku.',
  },
  { ...fr[3], description: 'Preparación, exploración y modelado de datos con Dataiku.' },
  {
    ...fr[4],
    description: 'Análisis, visualización y manipulación avanzada de datos con Python y pandas.',
  },
  {
    ...fr[5],
    description:
      'Dominio de los fundamentos de Apache Airflow 3, la creación de DAGs y la orquestación de pipelines de datos.',
  },
];

const de = [
  {
    ...fr[0],
    description:
      'Entwurf und Implementierung von Datenlösungen mit Data Factory, Data Lake, Synapse und Databricks.',
  },
  { ...fr[1], description: 'Grundlagen von Azure, Cloud-Diensten, Architektur und Sicherheit.' },
  {
    ...fr[2],
    description: 'Entwurf, Automatisierung und Bereitstellung von Datenprojekten mit Dataiku.',
  },
  { ...fr[3], description: 'Datenaufbereitung, Exploration und Modellierung mit Dataiku.' },
  {
    ...fr[4],
    description:
      'Fortgeschrittene Datenanalyse, Visualisierung und Verarbeitung mit Python und pandas.',
  },
  {
    ...fr[5],
    description:
      'Beherrschung der Grundlagen von Apache Airflow 3, der DAG-Erstellung und der Orchestrierung von Datenpipelines.',
  },
];

const zh = [
  {
    ...fr[0],
    description: '使用 Data Factory、Data Lake、Synapse 和 Databricks 设计并实施数据解决方案。',
  },
  { ...fr[1], description: 'Azure 云服务、架构和安全基础。' },
  { ...fr[2], description: '使用 Dataiku 设计、自动化并部署数据项目。' },
  { ...fr[3], description: '使用 Dataiku 进行数据准备、探索和建模。' },
  { ...fr[4], description: '使用 Python 和 pandas 进行高级数据分析、可视化和处理。' },
  { ...fr[5], description: '掌握 Apache Airflow 3 基础、DAG 编写和数据管道编排。' },
];

const certifications = { fr, en, es, de, zh };

export default certifications;
