const education = [
  {
    degree: "Ingénierie Informatique (Big Data)",
    school: "INP-ENSEEIHT, Toulouse",
    period: "2022 – 2025",
    color: "#007aff",
    courses: [
      "Data Engineering, Cloud & DevOps",
      "Machine Learning, Data Science",
      "Systèmes distribués, Sécurité",
      "Python, SQL, Spark, Azure"
    ]
  },
  {
    degree: "Licence Informatique",
    school: "Université de Dschang",
    period: "2019 – 2022",
    color: "#af52de",
    courses: [
      "Algorithmique avancée, Structures de données",
      "Développement Web, Bases de données",
      "Programmation orientée objet, Java, C++"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-content">
        <h2 className="section-title">Formation</h2>
        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {education.map((edu, idx) => (
            <div key={idx} className="card" style={{
              background: 'rgba(255,255,255,0.95)',
              border: `2px solid ${edu.color}30`,
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              padding: '2.5rem 2rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              minHeight: '220px',
              overflow: 'hidden'
            }}>
              {/* Badge période */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: edu.color,
                color: 'white',
                borderRadius: '16px',
                padding: '0.4rem 1.1rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}>{edu.period}</div>
              {/* Diplôme */}
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: edu.color,
                marginBottom: '0.3rem',
                marginTop: '0.2rem'
              }}>{edu.degree}</h3>
              {/* École */}
              <div style={{
                fontWeight: 500,
                color: '#8e8e93',
                marginBottom: '0.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="fas fa-university" style={{ color: edu.color }}></i>
                {edu.school}
              </div>
              {/* Matières principales */}
              <ul style={{
                color: '#1d1d1f',
                fontSize: '1rem',
                lineHeight: 1.6,
                margin: 0,
                padding: 0,
                listStyle: 'none',
                marginTop: '0.7rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {edu.courses.map((course, cIdx) => (
                  <li key={cIdx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#8e8e93',
                    fontSize: '0.98rem'
                  }}>
                    <i className="fas fa-check-circle" style={{ color: edu.color, fontSize: '1rem' }}></i>
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
