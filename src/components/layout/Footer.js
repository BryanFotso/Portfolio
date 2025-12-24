const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(8px)',
        borderTop: '1.5px solid #e5e7eb',
        padding: '1.3rem 0',
        marginTop: '3rem',
        textAlign: 'center',
        fontSize: '1.05rem',
        color: '#8e8e93',
        fontWeight: 500,
        letterSpacing: '0.01em',
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.03)',
        zIndex: 10,
        position: 'relative',
      }}
    >
      <span style={{
        background: 'linear-gradient(90deg, #007aff 0%, #af52de 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontWeight: 700,
        fontSize: '1.08rem',
      }}>
        © {new Date().getFullYear()} Chris Bryan Fotso Tala
      </span>
      <span style={{ marginLeft: 8, color: '#8e8e93', fontWeight: 400 }}>
        . Tous droits réservés.
      </span>
    </footer>
  );
};

export default Footer;
