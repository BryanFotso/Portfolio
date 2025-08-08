import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Data Platform (Olist)',
      description: 'Plateforme de données complète avec ingestion Airbyte, orchestration Airflow, modélisation dbt, stockage PostgreSQL et visualisation Superset.',
      technologies: [
        { icon: 'fas fa-cloud', name: 'Airbyte' },
        { icon: 'fas fa-wind', name: 'Airflow' },
        { icon: 'fas fa-database', name: 'dbt' },
        { icon: 'fas fa-server', name: 'PostgreSQL' },
        { icon: 'fas fa-chart-line', name: 'Superset' },
        { icon: 'fab fa-docker', name: 'Docker' }
      ]
    },
    {
      title: 'API de Recommandation',
      description: 'API REST pour système de recommandation basé sur la similarité textuelle, avec conteneurisation Docker et tests automatisés.',
      technologies: [
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-rocket', name: 'FastAPI' },
        { icon: 'fas fa-brain', name: 'ML' },
        { icon: 'fab fa-docker', name: 'Docker' },
        { icon: 'fas fa-vial', name: 'Pytest' }
      ]
    },
    {
      title: 'Pipeline ETL Automatisé',
      description: 'Pipeline ETL complet avec orchestration, monitoring et alertes, intégré dans un environnement CI/CD.',
      technologies: [
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-wind', name: 'Airflow' },
        { icon: 'fas fa-database', name: 'dbt' },
        { icon: 'fas fa-cogs', name: 'CI/CD' },
        { icon: 'fas fa-eye', name: 'Monitoring' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projets</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <button 
                  className="text-primary-400 hover:text-white transition-colors duration-200"
                  aria-label="Voir le projet"
                >
                  <i className="fas fa-external-link-alt"></i>
                </button>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    <i className={tech.icon}></i>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
