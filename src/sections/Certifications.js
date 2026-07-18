import Card from 'components/ui/Card';
import ExternalLink from 'components/ui/ExternalLink';
import HorizontalCarousel from 'components/ui/HorizontalCarousel';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import certifications from 'data/certifications';
import { useLanguage } from 'i18n/LanguageContext';

const Certifications = () => {
  const { language, t } = useLanguage();
  const orderedCertifications = [...certifications[language]].sort(
    (first, second) => Number(Boolean(second.featured)) - Number(Boolean(first.featured))
  );

  return (
    <Section id="certifications" title={t.certifications.title}>
      <HorizontalCarousel id="certifications-carousel" label={t.certifications.label}>
        {orderedCertifications.map((certification) => (
          <Card key={certification.title} className="certification-card">
            <div className="certification-meta">
              {certification.date && <span className="period">{certification.date}</span>}
              {certification.status === 'inProgress' && (
                <span className="certification-status">{t.certifications.inProgress}</span>
              )}
            </div>
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
                <ExternalLink href={certification.link}>
                  {certification.linkType === 'program'
                    ? t.certifications.viewProgram
                    : t.certifications.view}
                </ExternalLink>
              </div>
            )}
          </Card>
        ))}
      </HorizontalCarousel>
    </Section>
  );
};

export default Certifications;
