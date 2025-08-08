import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'chrisfotso@icloud.com',
      href: 'mailto:chrisfotso@icloud.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Téléphone',
      value: '+33 7 72 25 76 34',
      href: 'tel:+33772257634'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Localisation',
      value: 'Toulouse, France',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-linkedin',
      href: 'https://linkedin.com/in/chris-fotso',
      label: 'LinkedIn'
    },
    {
      icon: 'fab fa-github',
      href: 'https://github.com/BryanFotso',
      label: 'GitHub'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Contact</h2>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Info */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Parlons de votre projet
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Je suis toujours ouvert aux nouvelles opportunités et collaborations intéressantes. 
              N'hésitez pas à me contacter pour discuter de vos projets !
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <i className={`${contact.icon} text-primary-400 text-lg`}></i>
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span>{contact.value}</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-500/20 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-200 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
