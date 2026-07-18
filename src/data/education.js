import { formatYearPeriod, localizeCollection } from 'data/localization';

export const educationDefinitions = [
  {
    id: 'esigelec-engineering',
    school: 'ESIGELEC',
    dates: { start: '2022', end: '2025' },
  },
  {
    id: 'prepavogt-mpsi',
    school: 'PREPAVOGT',
    dates: { start: '2020', end: '2022' },
  },
];

export const educationContent = {
  fr: {
    'esigelec-engineering': {
      degree: 'Cycle Ingénieur – Big Data pour la Transformation Numérique',
      location: 'Rouen, France',
      courses: [
        'Data engineering et data analytics',
        'Systèmes distribués, cloud et DevOps',
        'Traitement de données à grande échelle',
        'Python, SQL et Spark',
      ],
    },
    'prepavogt-mpsi': {
      degree: 'Prépa MPSI',
      location: 'Yaoundé, Cameroun',
      courses: [
        'Algorithmique et structures de données',
        'Mathématiques avancées',
        'Physique et modélisation',
        'Programmation Python et C',
      ],
    },
  },
  en: {
    'esigelec-engineering': {
      degree: 'Engineering Degree – Big Data for Digital Transformation',
      location: 'Rouen, France',
      courses: [
        'Data engineering and data analytics',
        'Distributed systems, cloud and DevOps',
        'Large-scale data processing',
        'Python, SQL and Spark',
      ],
    },
    'prepavogt-mpsi': {
      degree: 'MPSI Preparatory Program',
      location: 'Yaoundé, Cameroon',
      courses: [
        'Algorithms and data structures',
        'Advanced mathematics',
        'Physics and modeling',
        'Python and C programming',
      ],
    },
  },
  es: {
    'esigelec-engineering': {
      degree: 'Ingeniería – Big Data para la Transformación Digital',
      location: 'Rouen, Francia',
      courses: [
        'Data engineering y data analytics',
        'Sistemas distribuidos, cloud y DevOps',
        'Procesamiento de datos a gran escala',
        'Python, SQL y Spark',
      ],
    },
    'prepavogt-mpsi': {
      degree: 'Programa preparatorio MPSI',
      location: 'Yaundé, Camerún',
      courses: [
        'Algoritmos y estructuras de datos',
        'Matemáticas avanzadas',
        'Física y modelado',
        'Programación en Python y C',
      ],
    },
  },
  de: {
    'esigelec-engineering': {
      degree: 'Ingenieurstudium – Big Data für die digitale Transformation',
      location: 'Rouen, Frankreich',
      courses: [
        'Data Engineering und Data Analytics',
        'Verteilte Systeme, Cloud und DevOps',
        'Datenverarbeitung im großen Maßstab',
        'Python, SQL und Spark',
      ],
    },
    'prepavogt-mpsi': {
      degree: 'MPSI-Vorbereitungsstudium',
      location: 'Yaoundé, Kamerun',
      courses: [
        'Algorithmen und Datenstrukturen',
        'Höhere Mathematik',
        'Physik und Modellierung',
        'Programmierung mit Python und C',
      ],
    },
  },
  zh: {
    'esigelec-engineering': {
      degree: '工程师学位 — 数字化转型大数据方向',
      location: '法国鲁昂',
      courses: [
        '数据工程与数据分析',
        '分布式系统、云与 DevOps',
        '大规模数据处理',
        'Python、SQL 与 Spark',
      ],
    },
    'prepavogt-mpsi': {
      degree: 'MPSI 预科课程',
      location: '喀麦隆雅温得',
      courses: ['算法与数据结构', '高等数学', '物理与建模', 'Python 与 C 编程'],
    },
  },
};

export const getEducation = (language) =>
  localizeCollection(educationDefinitions, educationContent, language).map((education) => ({
    ...education,
    period: formatYearPeriod(education.dates),
  }));
