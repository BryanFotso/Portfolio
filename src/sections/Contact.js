const contactInfo = [
  {
    label: 'Email',
    value: 'chrisfotso@icloud.com',
    icon: 'fas fa-envelope',
    link: 'mailto:chrisfotso@icloud.com',
    color: '#007aff',
  },
  {
    label: 'Téléphone',
    value: '+33 7 72 25 76 34',
    icon: 'fas fa-phone',
    link: 'tel:+33772257634',
    color: '#34c759',
  },
  {
    label: 'Localisation',
    value: 'Toulouse, France',
    icon: 'fas fa-map-marker-alt',
    color: '#af52de',
  },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: 'fab fa-linkedin',
    url: 'https://linkedin.com/in/chris-bryan-fotso-tala',
    color: '#007aff',
  },
  {
    label: 'GitHub',
    icon: 'fab fa-github',
    url: 'https://github.com/chris-bryan-fotso',
    color: '#1d1d1f',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-content">
        <h2 className="section-title">Contact</h2>
        <div
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          <div
            className="card"
            style={{
              background: 'rgba(255,255,255,0.97)',
              border: '2px solid #007aff20',
              borderRadius: '28px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              padding: '2.7rem 2rem 2.2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.2rem',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Infos principales */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.7rem',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.1rem',
                    justifyContent: 'center',
                    fontSize: '1.13rem',
                    color: '#1d1d1f',
                    fontWeight: 500,
                    minWidth: '220px',
                    width: '100%',
                    maxWidth: '350px',
                  }}
                >
                  <span
                    style={{
                      background: info.color + '18',
                      color: info.color,
                      borderRadius: '50%',
                      width: '2.7rem',
                      height: '2.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      border: `1.5px solid ${info.color}30`,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <i className={info.icon}></i>
                  </span>
                  <div style={{ textAlign: 'left', flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.93rem',
                        color: '#8e8e93',
                        fontWeight: 400,
                        marginBottom: '0.1rem',
                      }}
                    >
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        style={{
                          color: info.color,
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '1.08rem',
                          wordBreak: 'break-all',
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ color: info.color, fontWeight: 600, fontSize: '1.08rem' }}>
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div
              style={{
                display: 'flex',
                gap: '1.7rem',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '0.5rem',
                background: 'rgba(245,245,247,0.7)',
                borderRadius: '16px',
                padding: '0.7rem 1.2rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                width: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    color: social.color,
                    background: social.color + '15',
                    borderRadius: '50%',
                    width: '2.7rem',
                    height: '2.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.35rem',
                    border: `1.5px solid ${social.color}30`,
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.background = social.color + '25';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.background = social.color + '15';
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>

            {/* Bouton d'action */}
            <div
              style={{
                marginTop: '2.2rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <a
                href="mailto:chrisfotso@icloud.com"
                className="btn-primary"
                style={{
                  fontSize: '1.13rem',
                  padding: '1.1rem 0',
                  width: '100%',
                  maxWidth: '350px',
                  borderRadius: '16px',
                  fontWeight: 600,
                  background: 'linear-gradient(90deg, #007aff 0%, #af52de 100%)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <i className="fas fa-paper-plane" style={{ marginRight: '0.7rem' }}></i>
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
