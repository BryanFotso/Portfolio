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

const es = [
  {
    ...fr[0],
    title: 'Integrador de datos',
    period: '11/2025 – Actualidad',
    description:
      'Integración, automatización y fiabilización de flujos de datos de clientes y operaciones en el ERP STYX.',
    highlights: [
      'Controles de coherencia SQL antes de producción para reducir anomalías operativas',
      'Automatización de procesos recurrentes con Python y cron jobs',
      'Monitorización de tareas automatizadas para detectar errores con mayor rapidez',
      'Mejora de los flujos entre sistemas externos y el ERP STYX',
      'Contribución a una prueba de concepto de migración a Azure Data Factory',
    ],
  },
  {
    ...fr[1],
    title: 'Consultor Data Engineer',
    description:
      'Diseño de servicios y pipelines de datos robustos para responder a las necesidades de los equipos de Data Science.',
    highlights: [
      'Migración de flujos de ingesta tras cambios en API de origen, incluida Atlassian Jira',
      'Diseño de un pipeline de recopilación multifuente para plataformas de aprendizaje',
      'Desarrollo de servicios Python y FastAPI para recopilar, procesar y exponer datos',
      'Industrialización en Kubernetes con CI/CD, seguridad y calidad de código',
      'Pruebas unitarias integradas en CI con una cobertura de hasta el 85 %',
      'Taller interno sobre dbt para consultores de datos',
    ],
  },
  {
    ...fr[2],
    title: 'Ingeniero de bases de datos',
    description:
      'Preparación de datos ERP y automatización de procesos internos para asegurar una migración a Sage X3.',
    highlights: [
      'Colaboración con producción, I+D y supply chain para estructurar las transformaciones',
      'Personalización y mantenimiento de módulos de Microsoft Navision',
      'Extracción, limpieza y estructuración de datos antes de migrar a Sage X3',
      'Controles de coherencia para garantizar la fiabilidad antes de la integración',
      'Automatización de procesos, reduciendo cuatro horas a menos de tres minutos',
      'Creación de un panel de seguimiento de equipos',
    ],
  },
];

const de = [
  {
    ...fr[0],
    title: 'Datenintegrationsingenieur',
    period: '11/2025 – Heute',
    description:
      'Integration, Automatisierung und Qualitätssicherung von Kunden- und Betriebsdatenflüssen im STYX-ERP.',
    highlights: [
      'SQL-Konsistenzprüfungen vor Produktivsetzungen zur Reduzierung betrieblicher Fehler',
      'Automatisierung wiederkehrender Abläufe mit Python und Cronjobs',
      'Monitoring automatisierter Aufgaben zur schnelleren Fehlererkennung',
      'Verbesserung der Datenflüsse zwischen externen Systemen und STYX ERP',
      'Mitwirkung an einem Proof of Concept zur Migration auf Azure Data Factory',
    ],
  },
  {
    ...fr[1],
    title: 'Data-Engineer-Berater',
    description:
      'Entwicklung robuster Datendienste und Pipelines für die Anforderungen von Data-Science-Teams.',
    highlights: [
      'Migration von Ingestion-Flows nach Änderungen an Quell-APIs, darunter Atlassian Jira',
      'Entwicklung einer Multi-Source-Datenerfassung für Lernplattformen',
      'Entwicklung von Python- und FastAPI-Diensten zur Erfassung, Verarbeitung und Bereitstellung von Daten',
      'Produktivsetzung auf Kubernetes mit CI/CD, Sicherheit und Codequalität',
      'In CI integrierte Unit-Tests mit bis zu 85 % Abdeckung',
      'Interner dbt-Workshop für Datenberater',
    ],
  },
  {
    ...fr[2],
    title: 'Datenbankingenieur',
    description:
      'ERP-Datenaufbereitung und Automatisierung interner Prozesse für eine sichere Migration auf Sage X3.',
    highlights: [
      'Zusammenarbeit mit Produktion, F&E und Supply Chain zur Strukturierung der Transformationen',
      'Anpassung und Wartung von Microsoft-Navision-Geschäftsmodulen',
      'Extraktion, Bereinigung und Strukturierung der Navision-Daten vor der Migration auf Sage X3',
      'Konsistenzprüfungen zur Sicherung der Datenqualität vor der Integration',
      'Prozessautomatisierung von vier Stunden auf unter drei Minuten',
      'Entwicklung eines Dashboards zur Geräteverfolgung',
    ],
  },
];

const zh = [
  {
    ...fr[0],
    title: '数据集成工程师',
    period: '2025/11 – 至今',
    description: '在 STYX ERP 中集成、自动化并保障客户及运营数据流的可靠性。',
    highlights: [
      '上线前执行 SQL 一致性检查，减少运营异常',
      '使用 Python 和 cron jobs 自动化周期性处理',
      '建立自动化任务监控，更快发现错误',
      '提升外部系统与 STYX ERP 之间数据流的可靠性',
      '参与迁移至 Azure Data Factory 的概念验证',
    ],
  },
  {
    ...fr[1],
    title: '数据工程顾问',
    description: '设计稳健的数据服务和管道，满足 Data Science 团队的需求。',
    highlights: [
      '在源 API（包括 Atlassian Jira）变更后迁移数据摄取流程',
      '为学习平台设计多源数据采集管道',
      '开发 Python 和 FastAPI 服务以采集、处理并提供数据',
      '通过 Kubernetes、CI/CD、安全和代码质量实现生产化',
      '将单元测试集成到 CI，覆盖率最高达到 85%',
      '为数据顾问开展内部 dbt 培训',
    ],
  },
  {
    ...fr[2],
    title: '数据库工程师',
    description: '准备 ERP 数据并自动化内部流程，保障向 Sage X3 的迁移。',
    highlights: [
      '与生产、研发和供应链团队合作设计数据转换',
      '定制并维护 Microsoft Navision 业务模块',
      '在迁移至 Sage X3 前提取、清洗和整理 Navision 数据',
      '集成前执行一致性检查以保障数据可靠性',
      '将流程耗时从四小时缩短至三分钟以内',
      '创建设备跟踪仪表板',
    ],
  },
];

const experiences = { fr, en, es, de, zh };

export default experiences;
