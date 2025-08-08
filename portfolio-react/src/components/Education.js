import React from 'react';

const Education = () => {
  const education = [
    {
      title: 'Ingénierie Informatique (Big Data)',
      period: '2022 – 2025',
      school: 'Formation en cours',
      courses: [
        'Data Engineering & Architecture',
        'DevOps & Cloud Computing',
        'Machine Learning & MLOps',
        'Big Data & Analytics'
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Formation</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="card group">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                  {edu.title}
                </h3>
                <span className="text-sm text-primary-400 font-medium bg-primary-500/20 px-3 py-1 rounded-full border border-primary-500/30">
                  {edu.period}
                </span>
              </div>
              
              {/* School */}
              <div className="text-gray-300 font-medium mb-4">
                {edu.school}
              </div>
              
              {/* Courses */}
              <ul className="space-y-2">
                {edu.courses.map((course, idx) => (
                  <li key={idx} className="text-gray-400 text-sm leading-relaxed flex items-start">
                    <span className="text-primary-400 mr-2 mt-1">•</span>
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
