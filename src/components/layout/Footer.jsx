import { profile } from 'data/profile';
import { useLanguage } from 'i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>
        <span className="gradient-text footer-name">
          © {new Date().getFullYear()} {profile.name}
        </span>{' '}
        · {t.footer}
      </p>
    </footer>
  );
};

export default Footer;
