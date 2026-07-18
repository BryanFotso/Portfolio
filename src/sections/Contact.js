import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';
import { profile, socialLinks } from 'data/profile';

const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'email' },
  { label: 'Téléphone', value: profile.phone, href: profile.phoneHref, icon: 'phone' },
  { label: 'Localisation', value: profile.location, icon: 'location' },
];

const Contact = () => (
  <Section id="contact" title="Contact">
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
      <div className="social-links" aria-label="Réseaux sociaux">
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
        Envoyer un email <Icon name="email" />
      </a>
    </Card>
  </Section>
);

export default Contact;
