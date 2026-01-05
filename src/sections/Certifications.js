const certifications = [
  {
    title: 'Microsoft Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: '2024',
    description:
      'Certification officielle sur la conception et la mise en œuvre de solutions de données sur Azure (Data Factory, Data Lake, Synapse, Databricks).',
    color: '#007aff',
    techs: [
      { name: 'Azure', icon: 'fab fa-microsoft' },
      { name: 'Data Factory', icon: 'fas fa-database' },
      { name: 'Databricks', icon: 'fas fa-bolt' },
    ],
  },
  {
    title: 'Mastering Data Build Tool (dbt)',
    issuer: 'Udemy',
    date: '2023',
    description:
      "Formation avancée sur dbt, l'orchestration de transformations SQL et la modélisation de données moderne.",
    color: '#af52de',
    techs: [
      { name: 'dbt', icon: 'fas fa-database' },
      { name: 'SQL', icon: 'fas fa-database' },
    ],
  },
  {
    title: 'Data Analysis with Python',
    issuer: 'FreeCodeCamp',
    date: '2022',
    description: 'Analyse de données, visualisation et manipulation avancée avec Python et Pandas.',
    color: '#34c759',
    techs: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'Pandas', icon: 'fas fa-table' },
    ],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="section-content">
        <h2 className="section-title">Certifications</h2>
        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: `2px solid ${cert.color}30`,
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                padding: '2.5rem 2rem 2rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                minHeight: '260px',
                overflow: 'hidden',
                alignItems: 'flex-start',
              }}
            >
              {/* Badge date au-dessus du titre */}
              <div
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: '0.7rem',
                  marginTop: '-0.2rem',
                  background: cert.color,
                  color: 'white',
                  borderRadius: '16px',
                  padding: '0.4rem 1.1rem',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                {cert.date}
              </div>
              {/* Titre */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: cert.color,
                  marginBottom: '0.3rem',
                  marginTop: '0.2rem',
                  lineHeight: 1.3,
                }}
              >
                {cert.title}
              </h3>
              {/* Organisme */}
              <div
                style={{
                  fontWeight: 500,
                  color: '#8e8e93',
                  marginBottom: '0.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <i className="fas fa-certificate" style={{ color: cert.color }}></i>
                {cert.issuer}
              </div>
              {/* Description */}
              <p
                style={{
                  color: '#1d1d1f',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  marginBottom: '0.5rem',
                }}
              >
                {cert.description}
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
                {cert.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="tech-tag"
                    style={{
                      background: cert.color + '15',
                      color: cert.color,
                      border: `1px solid ${cert.color}40`,
                      fontWeight: 500,
                    }}
                  >
                    <i className={tech.icon} style={{ marginRight: '0.4rem' }}></i>
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

export default Certifications;
