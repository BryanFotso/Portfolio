import { localizeCollection } from 'data/localization';

export const certificationDefinitions = [
  {
    id: 'azure-data-engineer-dp203',
    title: 'Microsoft Azure Data Engineer Associate',
    issuer: 'Microsoft',
    earnedAt: '2024',
    status: 'earned',
    credentialId: 'd319b1c8afd26f67',
    technologies: ['Azure', 'Data Factory', 'Databricks'],
    credentialUrl:
      'https://learn.microsoft.com/fr-fr/users/fotsotalachrisbryan-6351/credentials/d319b1c8afd26f67',
  },
  {
    id: 'azure-data-fundamentals-dp900',
    title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    earnedAt: '2024',
    status: 'earned',
    credentialId: '69F61393D42A9B0F',
    technologies: ['Azure', 'Data Fundamentals', 'DP-900'],
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/FOTSOTALAChrisBryan-6351/69F61393D42A9B0F?sharingId=64AB8BAE904A9F5B',
  },
  {
    id: 'dataiku-advanced-designer',
    title: 'Dataiku Advanced Designer',
    issuer: 'Dataiku',
    earnedAt: '2024',
    status: 'earned',
    credentialId: 'vhzhvb3pfhdd',
    technologies: ['Dataiku', 'Automation'],
    credentialUrl: 'https://verify.skilljar.com/c/vhzhvb3pfhdd',
  },
  {
    id: 'dataiku-core-designer',
    title: 'Dataiku Core Designer',
    issuer: 'Dataiku',
    earnedAt: '2023',
    status: 'earned',
    credentialId: 'r8gwv2dz3pd5',
    technologies: ['Dataiku', 'Data Prep'],
    credentialUrl: 'https://verify.skilljar.com/c/r8gwv2dz3pd5',
  },
  {
    id: 'freecodecamp-data-analysis-python',
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    earnedAt: '2022',
    status: 'earned',
    technologies: ['Python', 'Pandas'],
    programUrl: 'https://www.freecodecamp.org/learn/data-analysis-with-python',
  },
  {
    id: 'airflow-3',
    title: 'Astronomer Certification for Apache Airflow 3',
    issuer: 'Astronomer',
    earnedAt: '2026',
    status: 'earned',
    technologies: ['Apache Airflow 3', 'DAGs', 'Data Orchestration'],
    programUrl: 'https://academy.astronomer.io/page/astronomer-certification',
    featured: true,
  },
  {
    id: 'toeic-listening-reading',
    title: 'TOEIC Listening and Reading',
    issuer: 'ETS Global',
    status: 'earned',
    score: '950 / 990',
    technologies: ['English', 'C1'],
    programUrl: 'https://www.etsglobal.org/fr/en/test-type-family/toeic-listening-and-reading-test',
  },
  {
    id: 'snowpro-core-cof-c03',
    title: 'SnowPro Core Certification (COF-C03)',
    issuer: 'Snowflake',
    status: 'inProgress',
    technologies: ['Snowflake', 'SQL', 'Data Warehousing'],
    programUrl: 'https://learn.snowflake.com/en/certifications/snowpro-core-c03/',
  },
];

export const certificationContent = {
  fr: {
    'azure-data-engineer-dp203': {
      description:
        'Conception et mise en œuvre de solutions de données avec Data Factory, Data Lake, Synapse et Databricks.',
    },
    'azure-data-fundamentals-dp900': {
      description:
        'Concepts fondamentaux des données et services Azure pour les charges relationnelles, non relationnelles et analytiques.',
    },
    'dataiku-advanced-designer': {
      description: 'Conception de projets data, automatisation et déploiement avec Dataiku.',
    },
    'dataiku-core-designer': {
      description: 'Préparation, exploration et modélisation de données dans Dataiku.',
    },
    'freecodecamp-data-analysis-python': {
      description:
        'Analyse, visualisation et manipulation avancée des données avec Python et pandas.',
    },
    'airflow-3': {
      description:
        'Maîtrise des fondamentaux d’Apache Airflow 3, de la création de DAGs et de l’orchestration de pipelines de données.',
    },
    'toeic-listening-reading': {
      description:
        'Niveau C1 en anglais professionnel, attestant une maîtrise avancée de la compréhension orale et écrite.',
    },
    'snowpro-core-cof-c03': {
      description:
        'Préparation à la certification portant sur l’architecture Snowflake AI Data Cloud, le chargement, la transformation et l’optimisation des données.',
    },
  },
  en: {
    'azure-data-engineer-dp203': {
      description:
        'Design and implementation of data solutions with Data Factory, Data Lake, Synapse and Databricks.',
    },
    'azure-data-fundamentals-dp900': {
      description:
        'Core data concepts and Azure services for relational, non-relational and analytical workloads.',
    },
    'dataiku-advanced-designer': {
      description: 'Data project design, automation and deployment with Dataiku.',
    },
    'dataiku-core-designer': {
      description: 'Data preparation, exploration and modeling with Dataiku.',
    },
    'freecodecamp-data-analysis-python': {
      description: 'Advanced data analysis, visualization and manipulation with Python and pandas.',
    },
    'airflow-3': {
      description:
        'Mastery of Apache Airflow 3 fundamentals, DAG authoring and data pipeline orchestration.',
    },
    'toeic-listening-reading': {
      description:
        'C1 professional English level, demonstrating advanced listening and reading proficiency.',
    },
    'snowpro-core-cof-c03': {
      description:
        'Preparation for the certification covering Snowflake AI Data Cloud architecture, data loading, transformation and optimization.',
    },
  },
  es: {
    'azure-data-engineer-dp203': {
      description:
        'Diseño e implementación de soluciones de datos con Data Factory, Data Lake, Synapse y Databricks.',
    },
    'azure-data-fundamentals-dp900': {
      description:
        'Conceptos fundamentales de datos y servicios Azure para cargas relacionales, no relacionales y analíticas.',
    },
    'dataiku-advanced-designer': {
      description: 'Diseño, automatización y despliegue de proyectos de datos con Dataiku.',
    },
    'dataiku-core-designer': {
      description: 'Preparación, exploración y modelado de datos con Dataiku.',
    },
    'freecodecamp-data-analysis-python': {
      description: 'Análisis, visualización y manipulación avanzada de datos con Python y pandas.',
    },
    'airflow-3': {
      description:
        'Dominio de los fundamentos de Apache Airflow 3, la creación de DAGs y la orquestación de pipelines de datos.',
    },
    'toeic-listening-reading': {
      description:
        'Nivel C1 de inglés profesional, que acredita un dominio avanzado de la comprensión oral y escrita.',
    },
    'snowpro-core-cof-c03': {
      description:
        'Preparación para la certificación sobre arquitectura Snowflake AI Data Cloud, carga, transformación y optimización de datos.',
    },
  },
  de: {
    'azure-data-engineer-dp203': {
      description:
        'Entwurf und Implementierung von Datenlösungen mit Data Factory, Data Lake, Synapse und Databricks.',
    },
    'azure-data-fundamentals-dp900': {
      description:
        'Grundlegende Datenkonzepte und Azure-Dienste für relationale, nicht relationale und analytische Workloads.',
    },
    'dataiku-advanced-designer': {
      description: 'Entwurf, Automatisierung und Bereitstellung von Datenprojekten mit Dataiku.',
    },
    'dataiku-core-designer': {
      description: 'Datenaufbereitung, Exploration und Modellierung mit Dataiku.',
    },
    'freecodecamp-data-analysis-python': {
      description:
        'Fortgeschrittene Datenanalyse, Visualisierung und Verarbeitung mit Python und pandas.',
    },
    'airflow-3': {
      description:
        'Beherrschung der Grundlagen von Apache Airflow 3, der DAG-Erstellung und der Orchestrierung von Datenpipelines.',
    },
    'toeic-listening-reading': {
      description:
        'Professionelles Englischniveau C1 mit fortgeschrittenem Hör- und Leseverständnis.',
    },
    'snowpro-core-cof-c03': {
      description:
        'Vorbereitung auf die Zertifizierung zu Snowflake AI Data Cloud, Datenladen, Transformation und Optimierung.',
    },
  },
  zh: {
    'azure-data-engineer-dp203': {
      description: '使用 Data Factory、Data Lake、Synapse 和 Databricks 设计并实施数据解决方案。',
    },
    'azure-data-fundamentals-dp900': {
      description: '关系型、非关系型和分析工作负载的数据基础概念及 Azure 服务。',
    },
    'dataiku-advanced-designer': { description: '使用 Dataiku 设计、自动化并部署数据项目。' },
    'dataiku-core-designer': { description: '使用 Dataiku 进行数据准备、探索和建模。' },
    'freecodecamp-data-analysis-python': {
      description: '使用 Python 和 pandas 进行高级数据分析、可视化和处理。',
    },
    'airflow-3': { description: '掌握 Apache Airflow 3 基础、DAG 编写和数据管道编排。' },
    'toeic-listening-reading': { description: '职业英语 C1 水平，具备高级听力和阅读理解能力。' },
    'snowpro-core-cof-c03': {
      description: '准备涵盖 Snowflake AI Data Cloud 架构、数据加载、转换和优化的认证考试。',
    },
  },
};

export const getCertifications = (language) =>
  localizeCollection(certificationDefinitions, certificationContent, language);
