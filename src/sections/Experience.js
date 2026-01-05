const Experience = () => {
  const experiences = [
    {
      title: 'Consultant Data Engineer',
      company: 'Capgemini',
      period: '09/2024 – 09/2025',
      location: 'Toulouse, France',
      description:
        'Conception, développement et maintenance de pipelines de données ETL/ELT en environnement de production.',
      highlights: [
        'Collecte et transformation depuis bases relationnelles, APIs REST et fichiers plats',
        'Pipelines de transformation avec Python (pandas) et SQL avancé',
        'Orchestration via Airflow (DAGs, dépendances, scheduling)',
        'Migration de pipelines vers des architectures basées sur dbt',
        'Contrôles de qualité des données',
        'Collaboration avec les Data Analysts pour exposer des datasets exploitables',
        'Intégration continue via Azure DevOps et pipelines CI/CD',
        'Documentation technique des pipelines et des flux de données',
      ],
      technologies: ['Python', 'Pandas', 'SQL', 'Airflow', 'dbt', 'Azure DevOps'],
    },
    {
      title: 'Data Engineer',
      company: 'Gautier Semences',
      period: '04/2024 – 08/2024',
      location: 'Avignon, France',
      description: 'Collecte, nettoyage et transformation de données issues de l’ERP Navision.',
      highlights: [
        'Requêtes SQL complexes pour l’alimentation de tables analytiques',
        'Préparation des données pour l’intégration dans l’ERP Sage X3',
        'Automatisation des traitements réduisant les délais de plusieurs heures à quelques minutes',
        'Contrôles de cohérence et validation des données',
        'Amélioration de la qualité et fiabilité des données métiers',
        'Interaction régulière avec les équipes métiers',
      ],
      technologies: ['SQL', 'ERP Navision', 'ETL', 'Data Quality'],
    },
    {
      title: 'Data Analyst',
      company: 'FOTAGI',
      period: '06/2022 – 08/2022',
      location: 'Cameroun',
      description:
        'Développement de scripts Python et VBA pour automatiser des indicateurs de performance.',
      highlights: [
        'Migration de tableaux de bord Excel vers Power BI',
        'Préparation et transformation de données pour analyses',
        'Amélioration de la traçabilité et de la fiabilité des données',
      ],
      technologies: ['Python', 'VBA', 'Power BI', 'Excel'],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="section-content">
        <h2 className="section-title">Expérience</h2>

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: 'absolute',
              left: '2rem',
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(180deg, #007aff 0%, #af52de 100%)',
              borderRadius: '2px',
            }}
          ></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                marginBottom: '3rem',
                paddingLeft: '4rem',
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '1.5rem',
                  top: '1.5rem',
                  width: '1rem',
                  height: '1rem',
                  background: '#007aff',
                  borderRadius: '50%',
                  border: '3px solid white',
                  boxShadow: '0 0 0 3px rgba(0, 122, 255, 0.2)',
                  zIndex: 2,
                }}
              ></div>

              {/* Experience card */}
              <div
                className="card"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: '600',
                        color: '#1d1d1f',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {exp.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '1.1rem',
                        color: '#007aff',
                        fontWeight: '500',
                      }}
                    >
                      <i className="fas fa-building" style={{ marginRight: '0.5rem' }}></i>
                      {exp.company}
                    </div>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: '#8e8e93',
                        fontWeight: '500',
                        marginTop: '0.35rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <i className="fas fa-map-marker-alt" style={{ color: '#007aff' }}></i>
                      {exp.location}
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'linear-gradient(135deg, #007aff, #af52de)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}
                  >
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#8e8e93',
                    marginBottom: '1.5rem',
                  }}
                >
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && (
                  <ul
                    style={{
                      color: '#8e8e93',
                      fontSize: '0.98rem',
                      lineHeight: 1.6,
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {exp.highlights.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                        }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{ color: '#007aff', marginTop: '0.2rem' }}
                        ></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <i
                      className="fas fa-tools"
                      style={{ marginRight: '0.5rem', color: '#007aff' }}
                    ></i>
                    Technologies utilisées
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        <i className="fas fa-code"></i>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
          }}
        >
          <div
            className="card"
            style={{
              background:
                'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(175, 82, 222, 0.1) 100%)',
              border: '1px solid rgba(0, 122, 255, 0.2)',
              borderRadius: '20px',
              padding: '2rem',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '1rem',
              }}
            >
              <i className="fas fa-rocket" style={{ marginRight: '0.5rem', color: '#007aff' }}></i>
              Prêt pour de nouveaux défis
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#8e8e93',
                marginBottom: '1.5rem',
              }}
            >
              Je suis ouvert aux opportunités de collaboration et aux projets innovants.
            </p>
            <a href="#contact" className="btn-primary">
              <i className="fas fa-envelope"></i>
              Discutons de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
