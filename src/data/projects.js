const fr = [
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
    technologies: ['React', 'Tailwind CSS', 'Vitest', 'Vite', 'GitHub Actions'],
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

const en = [
  {
    ...fr[0],
    category: 'Data Engineering · Featured project',
    description:
      'End-to-end analytics pipeline to study changes in French condominiums using RNIC open data, with bronze and silver layer modeling.',
  },
  {
    ...fr[1],
    category: 'Data Collection · Web application',
    description:
      'Multi-source price comparison platform using Scrapy for e-commerce product collection, MySQL storage and a web interface highlighting the best deals.',
  },
  {
    ...fr[2],
    category: 'DevOps · Infrastructure as Code',
    description:
      'Idempotent toolbox for installing and configuring DevOps tools on Ubuntu/Debian, organized into roles and driven by environments.',
  },
  {
    ...fr[3],
    category: 'DevOps · Local environment',
    description:
      'Collection of ready-to-use Docker Compose stacks for running open-source tools on a shared network with persistent volumes and environment-based configuration.',
  },
  {
    ...fr[4],
    category: 'Team project · Data Platform',
    description:
      'Open-source web application for preparing, analyzing and visualizing data, with a Flask backend, React frontend and MySQL storage.',
    contribution:
      'Backend development, file and log management, multi-format processing and platform containerization.',
  },
  {
    ...fr[5],
    title: 'Personal Portfolio',
    category: 'Frontend · Personal Branding',
    description:
      'Responsive portfolio designed to showcase my profile, experience and work through an accessible interface and a complete CI/CD pipeline.',
  },
  {
    ...fr[6],
    category: 'Python development · 2D game',
    description:
      '2D game built with Pygame, featuring collision handling, a scoring system and visual effects.',
  },
];

const es = [
  {
    ...fr[0],
    category: 'Data Engineering · Proyecto destacado',
    description:
      'Pipeline analítico end-to-end para estudiar la evolución de las comunidades de propietarios francesas a partir de datos abiertos del RNIC, con modelado en capas bronze y silver.',
  },
  {
    ...fr[1],
    category: 'Recopilación de datos · Aplicación web',
    description:
      'Comparador de precios multifuente con Scrapy, almacenamiento MySQL y una interfaz web que destaca las mejores ofertas.',
  },
  {
    ...fr[2],
    description:
      'Toolbox idempotente para instalar y configurar herramientas DevOps en Ubuntu/Debian, organizada por roles y entornos.',
  },
  {
    ...fr[3],
    category: 'DevOps · Entorno local',
    description:
      'Colección de stacks Docker Compose listas para usar, con red compartida, volúmenes persistentes y configuración por entorno.',
  },
  {
    ...fr[4],
    category: 'Proyecto en equipo · Data Platform',
    description:
      'Aplicación web open source para preparar, analizar y visualizar datos con Flask, React y MySQL.',
    contribution:
      'Desarrollo backend, gestión de archivos y logs, procesamiento multiformato y contenerización.',
  },
  {
    ...fr[5],
    title: 'Portfolio personal',
    description:
      'Portfolio responsive para presentar mi perfil, experiencia y proyectos mediante una interfaz accesible y una cadena CI/CD completa.',
  },
  {
    ...fr[6],
    category: 'Desarrollo Python · Juego 2D',
    description: 'Juego 2D desarrollado con Pygame, con colisiones, puntuación y efectos visuales.',
  },
];

const de = [
  {
    ...fr[0],
    category: 'Data Engineering · Top-Projekt',
    description:
      'End-to-End-Analysepipeline zur Untersuchung französischer Wohnungseigentümergemeinschaften anhand offener RNIC-Daten mit Bronze- und Silver-Modellierung.',
  },
  {
    ...fr[1],
    category: 'Datenerfassung · Webanwendung',
    description:
      'Preisvergleich aus mehreren Quellen mit Scrapy, MySQL-Speicherung und einer Weboberfläche für die besten Angebote.',
  },
  {
    ...fr[2],
    description:
      'Idempotente Toolbox zur Installation und Konfiguration von DevOps-Werkzeugen auf Ubuntu/Debian, strukturiert nach Rollen und Umgebungen.',
  },
  {
    ...fr[3],
    category: 'DevOps · Lokale Umgebung',
    description:
      'Sammlung einsatzbereiter Docker-Compose-Stacks mit gemeinsamem Netzwerk, persistenten Volumes und umgebungsbasierter Konfiguration.',
  },
  {
    ...fr[4],
    category: 'Teamprojekt · Datenplattform',
    description:
      'Open-Source-Webanwendung zur Aufbereitung, Analyse und Visualisierung von Daten mit Flask, React und MySQL.',
    contribution:
      'Backend-Entwicklung, Datei- und Logverwaltung, Verarbeitung mehrerer Formate und Containerisierung.',
  },
  {
    ...fr[5],
    title: 'Persönliches Portfolio',
    description:
      'Responsives Portfolio zur Präsentation meines Profils, meiner Erfahrung und Projekte mit barrierefreier Oberfläche und vollständiger CI/CD-Pipeline.',
  },
  {
    ...fr[6],
    category: 'Python-Entwicklung · 2D-Spiel',
    description:
      'Mit Pygame entwickeltes 2D-Spiel mit Kollisionen, Punktesystem und visuellen Effekten.',
  },
];

const zh = [
  {
    ...fr[0],
    category: '数据工程 · 重点项目',
    description:
      '基于 RNIC 开放数据研究法国共管物业变化的端到端分析管道，采用 bronze 和 silver 分层建模。',
  },
  {
    ...fr[1],
    category: '数据采集 · Web 应用',
    description:
      '多来源价格比较平台，使用 Scrapy 采集电商产品、MySQL 存储，并通过 Web 界面突出最佳优惠。',
  },
  {
    ...fr[2],
    description:
      '用于在 Ubuntu/Debian 上安装和配置 DevOps 工具的幂等工具箱，按角色组织并由环境驱动。',
  },
  {
    ...fr[3],
    category: 'DevOps · 本地环境',
    description: '可直接使用的 Docker Compose 服务栈集合，支持共享网络、持久化存储卷和环境化配置。',
  },
  {
    ...fr[4],
    category: '团队项目 · 数据平台',
    description: '用于准备、分析和可视化数据的开源 Web 应用，采用 Flask、React 和 MySQL。',
    contribution: '负责后端开发、文件与日志管理、多格式处理以及平台容器化。',
  },
  {
    ...fr[5],
    title: '个人作品集',
    description:
      '用于展示个人资料、工作经历和项目的响应式作品集，具备无障碍界面和完整的 CI/CD 流程。',
  },
  {
    ...fr[6],
    category: 'Python 开发 · 2D 游戏',
    description: '使用 Pygame 开发的 2D 游戏，包含碰撞处理、计分系统和视觉效果。',
  },
];

const projects = { fr, en, es, de, zh };

export default projects;
