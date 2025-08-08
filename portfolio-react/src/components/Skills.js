import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages & Frameworks",
      icon: "fas fa-code",
      color: "#007aff",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "FastAPI", icon: "fas fa-rocket" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "fas fa-cloud",
      color: "#34c759",
      skills: [
        { name: "Azure", icon: "fab fa-microsoft" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "CI/CD", icon: "fas fa-sync" },
        { name: "Kubernetes", icon: "fas fa-cube" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: "fas fa-chart-line",
      color: "#af52de",
      skills: [
        { name: "Pandas", icon: "fas fa-table" },
        { name: "dbt", icon: "fas fa-database" },
        { name: "Power BI", icon: "fas fa-chart-bar" },
        { name: "Apache Airflow", icon: "fas fa-wind" },
        { name: "PostgreSQL", icon: "fas fa-server" }
      ]
    },
    {
      title: "Testing & Quality",
      icon: "fas fa-vial",
      color: "#ff9500",
      skills: [
        { name: "Pytest", icon: "fas fa-vial" },
        { name: "Unit Testing", icon: "fas fa-check-circle" },
        { name: "Code Quality", icon: "fas fa-shield-alt" },
        { name: "Documentation", icon: "fas fa-book" },
        { name: "Code Review", icon: "fas fa-eye" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-content">
        <h2 className="section-title">Compétences</h2>
        
        <div className="grid-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="card" style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Category header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                gap: '0.75rem'
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${category.color}, ${category.color}80)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem'
                }}>
                  <i className={category.icon}></i>
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.75rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    padding: '0.75rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    e.target.style.borderColor = category.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                  }}
                  >
                    <div style={{
                      fontSize: '1.5rem',
                      color: category.color,
                      marginBottom: '0.5rem'
                    }}>
                      <i className={skill.icon}></i>
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      color: '#1d1d1f'
                    }}>
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills section */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(175, 82, 222, 0.1) 100%)',
            border: '1px solid rgba(0, 122, 255, 0.2)',
            borderRadius: '24px',
            padding: '2.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem'
            }}>
              <i className="fas fa-plus-circle" style={{ marginRight: '0.5rem', color: '#007aff' }}></i>
              Autres compétences
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#8e8e93',
              marginBottom: '2rem'
            }}>
              Je continue d'apprendre et d'explorer de nouvelles technologies pour rester à jour avec les dernières tendances.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center'
            }}>
              {[
                "Machine Learning", "API Design", "Microservices", "Data Modeling",
                "Performance Optimization", "Security Best Practices", "Agile/Scrum",
                "Technical Writing", "Mentoring", "Problem Solving"
              ].map((skill, index) => (
                <span key={index} className="tech-tag" style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  color: '#007aff',
                  border: '1px solid rgba(0, 122, 255, 0.2)'
                }}>
                  <i className="fas fa-star" style={{ marginRight: '0.3rem' }}></i>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
