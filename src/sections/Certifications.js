import Card from 'components/ui/Card';
import ExternalLink from 'components/ui/ExternalLink';
import HorizontalCarousel from 'components/ui/HorizontalCarousel';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import certifications from 'data/certifications';

const Certifications = () => (
  <Section id="certifications" title="Certifications">
    <HorizontalCarousel id="certifications-carousel" label="Certifications obtenues">
      {certifications.map((certification) => (
        <Card key={certification.title} className="certification-card">
          <span className="period">{certification.date}</span>
          <h3>{certification.title}</h3>
          <p className="meta">{certification.issuer}</p>
          <p>{certification.description}</p>
          <div className="tag-list">
            {certification.technologies.map((technology) => (
              <TechTag key={technology}>{technology}</TechTag>
            ))}
          </div>
          {certification.link && (
            <div className="card-actions">
              <ExternalLink href={certification.link}>Voir le certificat</ExternalLink>
            </div>
          )}
        </Card>
      ))}
    </HorizontalCarousel>
  </Section>
);

export default Certifications;
