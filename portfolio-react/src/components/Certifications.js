import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Mastering Data Build Tool',
      date: '2025',
      issuer: 'Udemy',
      description: 'Certification dbt Core pour la transformation de données et la modélisation analytics avec les meilleures pratiques.',
      technologies: [
        { icon: 'fas fa-database', name: 'dbt Core' },
        { icon: 'fas fa-code', name: 'SQL' },
        { icon: 'fas fa-layer-group', name: 'Data Modeling' },
        { icon: 'fas fa-chart-line', name: 'Analytics' }
      ]
    },
    {
      title: 'Microsoft Azure Data Engineer Associate',
      date: '2024',
      issuer: 'Microsoft',
      description: 'Concevoir et implémenter le stockage des données. Développer le traitement des données. Sécuriser, superviser et optimiser le stockage des données et le traitement des données.',
      technologies: [
        { icon: 'fab fa-microsoft', name: 'Azure Data Factory' },
        { icon: 'fas fa-database', name: 'Azure SQL' },
        { icon: 'fas fa-cloud', name: 'Azure Synapse' },
        { icon: 'fas fa-database', name: 'Azure DataBrick' }
      ]
    },
    {
      title: 'Data Analysis with Python',
      date: '2024',
      issuer: 'FreeCodeCamp',
      description: 'Certification Python spécialisée dans l\'analyse et la science des données, couvrant pandas, numpy, matplotlib et scikit-learn.',
      technologies: [
        { icon: 'fab fa-python', name: 'Python' },
        { icon: 'fas fa-table', name: 'Pandas' },
        { icon: 'fas fa-brain', name: 'Scikit-learn' },
        { icon: 'fas fa-chart-bar', name: 'Matplotlib' }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="card group relative overflow-hidden">
              {/* Top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-600"></div>
              
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <span className="text-sm text-primary-400 font-medium bg-primary-500/20 px-3 py-1 rounded-full border border-primary-500/30">
                  {cert.date}
                </span>
              </div>
              
              {/* Issuer */}
              <div className="text-gray-300 font-medium mb-4 text-lg">
                {cert.issuer}
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {cert.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {cert.technologies.map((tech, idx) => (
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

export default Certifications;
