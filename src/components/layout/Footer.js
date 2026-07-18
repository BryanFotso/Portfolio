import { profile } from 'data/profile';

const Footer = () => (
  <footer className="footer">
    <p>
      <span className="gradient-text footer-name">
        © {new Date().getFullYear()} {profile.name}
      </span>{' '}
      · Tous droits réservés.
    </p>
  </footer>
);

export default Footer;
