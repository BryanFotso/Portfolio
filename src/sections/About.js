const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <h2 className="section-title">À propos</h2>

        <div className="grid-2">
          {/* Colonne gauche - Texte */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <div
              className="card"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem',
                }}
              >
                <i className="fas fa-user" style={{ marginRight: '0.5rem', color: '#007aff' }}></i>
                Qui suis-je ?
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: '#8e8e93',
                  marginBottom: '1.5rem',
                }}
              >
                Data Engineer passionné par la construction de pipelines robustes, la qualité des
                données et la mise en production. Je transforme les données en insights actionnables
                pour des solutions innovantes.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginTop: '1.5rem',
                }}
              >
                <div
                  style={{
                    background: 'rgba(0, 122, 255, 0.1)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(0, 122, 255, 0.2)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#007aff',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <i className="fas fa-code" style={{ marginRight: '0.5rem' }}></i>
                    Développement Backend
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#8e8e93',
                      margin: 0,
                    }}
                  >
                    APIs robustes, microservices, architectures scalables
                  </p>
                </div>

                <div
                  style={{
                    background: 'rgba(175, 82, 222, 0.1)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(175, 82, 222, 0.2)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#af52de',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <i className="fas fa-database" style={{ marginRight: '0.5rem' }}></i>
                    Architecture de Données
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#8e8e93',
                      margin: 0,
                    }}
                  >
                    Data lakes, warehouses, pipelines ETL/ELT
                  </p>
                </div>

                <div
                  style={{
                    background: 'rgba(52, 199, 89, 0.1)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(52, 199, 89, 0.2)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#34c759',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <i className="fas fa-cloud" style={{ marginRight: '0.5rem' }}></i>
                    DevOps & Cloud
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#8e8e93',
                      margin: 0,
                    }}
                  >
                    CI/CD, containers, infrastructure as code
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Statistiques */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div
              className="card"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(175, 82, 222, 0.1) 100%)',
                border: '1px solid rgba(0, 122, 255, 0.2)',
                borderRadius: '24px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#007aff',
                  marginBottom: '0.5rem',
                }}
              >
                1+
              </div>
              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '0.5rem',
                }}
              >
                Années d'expérience
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#8e8e93',
                  margin: 0,
                }}
              >
                Développement backend et data engineering
              </p>
            </div>

            <div
              className="card"
              style={{
                background:
                  'linear-gradient(135deg, rgba(175, 82, 222, 0.1) 0%, rgba(255, 45, 146, 0.1) 100%)',
                border: '1px solid rgba(175, 82, 222, 0.2)',
                borderRadius: '24px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#af52de',
                  marginBottom: '0.5rem',
                }}
              >
                15+
              </div>
              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '0.5rem',
                }}
              >
                Technologies maîtrisées
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#8e8e93',
                  margin: 0,
                }}
              >
                Langages, frameworks et outils cloud
              </p>
            </div>

            <div
              className="card"
              style={{
                background:
                  'linear-gradient(135deg, rgba(52, 199, 89, 0.1) 0%, rgba(0, 122, 255, 0.1) 100%)',
                border: '1px solid rgba(52, 199, 89, 0.2)',
                borderRadius: '24px',
                padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#34c759',
                  marginBottom: '0.5rem',
                }}
              >
                5+
              </div>
              <div
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '0.5rem',
                }}
              >
                Projets livrés
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#8e8e93',
                  margin: 0,
                }}
              >
                Applications et pipelines de données
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
