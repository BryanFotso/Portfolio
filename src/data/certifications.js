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
];

const certifications = { fr, en };

export default certifications;
