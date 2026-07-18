import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import { profile, socialLinks } from 'data/profile';
import { useLanguage } from 'i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const contactItems = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'email' },
    { label: t.contact.phone, value: profile.phone, href: profile.phoneHref, icon: 'phone' },
    { label: t.contact.location, value: profile.location, icon: 'location' },
  ];

  return (
    <Section id="contact" title={t.contact.title}>
      <Card className="contact-card">
        <address className="contact-list">
          {contactItems.map((item) => (
            <div key={item.label} className="contact-item">
              <span className="icon-badge">
                <Icon name={item.icon} />
              </span>
              <div>
                <span className="meta">{item.label}</span>
                {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
              </div>
            </div>
          ))}
        </address>
        <div className="social-links" aria-label={t.contact.social}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={social.label}
            >
              <Icon name={social.icon} />
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="btn-primary contact-button">
          {t.contact.send} <Icon name="email" />
        </a>
      </Card>
    </Section>
  );
};

export default Contact;
