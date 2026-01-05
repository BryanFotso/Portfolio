const projects = [
  {
    title: 'Portfolio Personnel',
    description:
      'Site vitrine responsive pour présenter mon profil, mes expériences et mes projets avec une UI moderne.',
    techs: [
      { name: 'React', icon: 'fab fa-react', color: '#007aff' },
      { name: 'Tailwind', icon: 'fas fa-wind', color: '#34c759' },
      { name: 'UI/UX', icon: 'fas fa-paint-brush', color: '#af52de' },
    ],
    repo: 'https://github.com/BryanFotso/Portfolio',
    demo: 'https://bryanfotso.github.io/Portfolio/',
    color: '#007aff',
  },
  {
    title: 'Ansible Toolbox',
    description:
      'Toolbox Ansible pour installer plusieurs outils DevOps sur Ubuntu/Debian (local, VM, WSL) via rôles et playbook global.',
    techs: [
      { name: 'Ansible', icon: 'fas fa-tools', color: '#af52de' },
      { name: 'DevOps', icon: 'fas fa-cogs', color: '#007aff' },
      { name: 'Linux', icon: 'fab fa-linux', color: '#34c759' },
    ],
    repo: 'https://github.com/BryanFotso/Ansible-Toolbox',
    color: '#af52de',
  },
  {
    title: 'Shooter (Pygame)',
    description: 'Jeu 2D développé avec Pygame, gestion des collisions, score et effets visuels.',
    techs: [
      { name: 'Python', icon: 'fab fa-python', color: '#34c759' },
      { name: 'Pygame', icon: 'fas fa-gamepad', color: '#007aff' },
    ],
    repo: 'https://github.com/BryanFotso/SHOOTER',
    color: '#34c759',
  },
  {
    title: 'Data Platform Open Source',
    description:
      'Pipeline complet Olist : ingestion Airbyte, orchestration Airflow, modélisation DBT, stockage PostgreSQL et KPI sur Superset.',
    techs: [
      { name: 'Airbyte', icon: 'fas fa-plug', color: '#007aff' },
      { name: 'Airflow', icon: 'fas fa-project-diagram', color: '#af52de' },
      { name: 'DBT', icon: 'fas fa-database', color: '#34c759' },
      { name: 'Docker', icon: 'fab fa-docker', color: '#007aff' },
    ],
    color: '#ff9500',
  },
  {
    title: 'Data Pipeline Azure & dbt',
    description:
      'Pipeline de données moderne sur Azure (Data Factory, Data Lake, Synapse) orchestré avec dbt pour la transformation et la qualité des données.',
    techs: [
      { name: 'Azure', icon: 'fab fa-microsoft', color: '#007aff' },
      { name: 'dbt', icon: 'fas fa-database', color: '#af52de' },
      { name: 'Python', icon: 'fab fa-python', color: '#34c759' },
    ],
    color: '#007aff',
  },
  {
    title: 'API FastAPI & Auth JWT',
    description:
      'API REST sécurisée pour la gestion d’utilisateurs et d’authentification JWT. Déploiement Docker, tests Pytest, CI/CD GitHub Actions.',
    techs: [
      { name: 'FastAPI', icon: 'fas fa-rocket', color: '#007aff' },
      { name: 'Docker', icon: 'fab fa-docker', color: '#34c759' },
      { name: 'Pytest', icon: 'fas fa-vial', color: '#ff9500' },
    ],
    color: '#af52de',
  },
  {
    title: 'Dashboard Power BI',
    description:
      'Visualisation interactive des KPIs métiers, connectée à une base PostgreSQL. Automatisation de la collecte et du reporting.',
    techs: [
      { name: 'Power BI', icon: 'fas fa-chart-bar', color: '#af52de' },
      { name: 'PostgreSQL', icon: 'fas fa-server', color: '#007aff' },
      { name: 'SQL', icon: 'fas fa-database', color: '#34c759' },
    ],
    color: '#34c759',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-content">
        <h2 className="section-title">Projets</h2>
        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: `2px solid ${project.color}30`,
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                padding: '2.5rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                minHeight: '220px',
                overflow: 'hidden',
              }}
            >
              {/* Titre */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: project.color,
                  marginBottom: '0.3rem',
                  marginTop: '0.2rem',
                }}
              >
                {project.title}
              </h3>
              {/* Description */}
              <p
                style={{
                  color: '#1d1d1f',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  marginBottom: '0.5rem',
                }}
              >
                {project.description}
              </p>
              {/* Techs */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.7rem',
                  flexWrap: 'wrap',
                  marginTop: 'auto',
                }}
              >
                {project.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="tech-tag"
                    style={{
                      background: tech.color + '15',
                      color: tech.color,
                      border: `1px solid ${tech.color}40`,
                      fontWeight: 500,
                    }}
                  >
                    <i className={tech.icon} style={{ marginRight: '0.4rem' }}></i>
                    {tech.name}
                  </span>
                ))}
              </div>
              {/* Boutons action */}
              {(project.repo || project.demo || project.link) && (
                <div
                  style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    gap: '0.8rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="btn-primary"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, #af52de)`,
                        color: 'white',
                        fontSize: '1.05rem',
                        padding: '0.85rem 1.8rem',
                        borderRadius: '16px',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.7rem',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                      }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Voir le site
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      className="btn-outline"
                      style={{
                        borderColor: project.color,
                        color: project.color,
                        fontSize: '1.05rem',
                        padding: '0.85rem 1.8rem',
                        borderRadius: '16px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.7rem',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                      }}
                    >
                      <i className="fab fa-github"></i>
                      Voir le code
                    </a>
                  )}
                  {project.link && !project.demo && !project.repo && (
                    <a
                      href={project.link}
                      className="btn-primary"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, #af52de)`,
                        color: 'white',
                        fontSize: '1.05rem',
                        padding: '0.85rem 1.8rem',
                        borderRadius: '16px',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.7rem',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                      }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Voir le projet
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
