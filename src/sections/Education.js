const education = [
  {
    degree: 'Cycle Ingénieur – Big Data pour la Transformation Numérique',
    school: 'ESIGELEC',
    location: 'Rouen, France',
    period: '2022 – 2025',
    color: '#007aff',
    courses: [
      'Data engineering, data analytics',
      'Systèmes distribués, cloud & DevOps',
      'Traitement de données à grande échelle',
      'Python, SQL, Spark',
    ],
  },
  {
    degree: 'Prépa MPSI',
    school: 'PREPAVOGT',
    location: 'Yaoundé, Cameroun',
    period: '2020 – 2022',
    color: '#af52de',
    courses: [
      'Algorithmique, structures de données',
      'Mathématiques avancées (analyse, algèbre)',
      'Physique, modélisation',
      'Programmation Python, C',
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-content">
        <h2 className="section-title">Formation</h2>
        <div className="grid-2 education-grid">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="card education-card"
              style={{
                background: 'rgba(255,255,255,0.95)',
                border: `2px solid ${edu.color}30`,
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              }}
            >
              {/* Badge période */}
              <div
                className="education-badge"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: edu.color,
                  color: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
              >
                {edu.period}
              </div>
              {/* Diplôme */}
              <h3
                className="education-title"
                style={{
                  fontWeight: 700,
                  color: edu.color,
                }}
              >
                {edu.degree}
              </h3>
              {/* École */}
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
                <i className="fas fa-university" style={{ color: edu.color }}></i>
                {edu.school}
              </div>
              {/* Localisation */}
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
                <i className="fas fa-map-marker-alt" style={{ color: edu.color }}></i>
                {edu.location}
              </div>
              {/* Matières principales */}
              <ul
                className="education-list"
                style={{
                  color: '#1d1d1f',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                {edu.courses.map((course, cIdx) => (
                  <li
                    key={cIdx}
                    className="education-item"
                    style={{
                      color: '#8e8e93',
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ color: edu.color, fontSize: '1rem' }}
                    ></i>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
