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
    title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    date: '2024',
    description:
      'Concepts fondamentaux des données et services Azure pour les charges relationnelles, non relationnelles et analytiques.',
    technologies: ['Azure', 'Data Fundamentals', 'DP-900'],
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
    linkType: 'program',
    featured: true,
  },
  {
    title: 'TOEIC Listening and Reading',
    issuer: 'ETS Global',
    date: '950 / 990',
    description:
      'Niveau C1 en anglais professionnel, attestant une maîtrise avancée de la compréhension orale et écrite.',
    technologies: ['English', 'C1'],
  },
  {
    title: 'SnowPro Core Certification (COF-C03)',
    issuer: 'Snowflake',
    description:
      'Préparation à la certification portant sur l’architecture Snowflake AI Data Cloud, le chargement, la transformation et l’optimisation des données.',
    technologies: ['Snowflake', 'SQL', 'Data Warehousing'],
    link: 'https://learn.snowflake.com/en/certifications/snowpro-core-c03/',
    linkType: 'program',
    status: 'inProgress',
  },
];

const en = [
  {
    ...fr[0],
    description:
      'Design and implementation of data solutions with Data Factory, Data Lake, Synapse and Databricks.',
  },
  {
    ...fr[1],
    description:
      'Core data concepts and Azure services for relational, non-relational and analytical workloads.',
  },
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
  {
    ...fr[6],
    description:
      'C1 professional English level, demonstrating advanced listening and reading proficiency.',
  },
  {
    ...fr[7],
    description:
      'Preparation for the certification covering Snowflake AI Data Cloud architecture, data loading, transformation and optimization.',
  },
];

const es = [
  {
    ...fr[0],
    description:
      'Diseño e implementación de soluciones de datos con Data Factory, Data Lake, Synapse y Databricks.',
  },
  {
    ...fr[1],
    description:
      'Conceptos fundamentales de datos y servicios Azure para cargas relacionales, no relacionales y analíticas.',
  },
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
  {
    ...fr[6],
    description:
      'Nivel C1 de inglés profesional, que acredita un dominio avanzado de la comprensión oral y escrita.',
  },
  {
    ...fr[7],
    description:
      'Preparación para la certificación sobre arquitectura Snowflake AI Data Cloud, carga, transformación y optimización de datos.',
  },
];

const de = [
  {
    ...fr[0],
    description:
      'Entwurf und Implementierung von Datenlösungen mit Data Factory, Data Lake, Synapse und Databricks.',
  },
  {
    ...fr[1],
    description:
      'Grundlegende Datenkonzepte und Azure-Dienste für relationale, nicht relationale und analytische Workloads.',
  },
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
  {
    ...fr[6],
    description:
      'Professionelles Englischniveau C1 mit fortgeschrittenem Hör- und Leseverständnis.',
  },
  {
    ...fr[7],
    description:
      'Vorbereitung auf die Zertifizierung zu Snowflake AI Data Cloud, Datenladen, Transformation und Optimierung.',
  },
];

const zh = [
  {
    ...fr[0],
    description: '使用 Data Factory、Data Lake、Synapse 和 Databricks 设计并实施数据解决方案。',
  },
  { ...fr[1], description: '关系型、非关系型和分析工作负载的数据基础概念及 Azure 服务。' },
  { ...fr[2], description: '使用 Dataiku 设计、自动化并部署数据项目。' },
  { ...fr[3], description: '使用 Dataiku 进行数据准备、探索和建模。' },
  { ...fr[4], description: '使用 Python 和 pandas 进行高级数据分析、可视化和处理。' },
  { ...fr[5], description: '掌握 Apache Airflow 3 基础、DAG 编写和数据管道编排。' },
  { ...fr[6], description: '职业英语 C1 水平，具备高级听力和阅读理解能力。' },
  {
    ...fr[7],
    description: '准备涵盖 Snowflake AI Data Cloud 架构、数据加载、转换和优化的认证考试。',
  },
];

const certifications = { fr, en, es, de, zh };

export default certifications;
