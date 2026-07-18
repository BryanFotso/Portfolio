import Card from 'components/ui/Card';
import ExternalLink from 'components/ui/ExternalLink';
import HorizontalCarousel from 'components/ui/HorizontalCarousel';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import { getCertifications } from 'data/certifications';
import { useLanguage } from 'i18n/LanguageContext';

const Certifications = () => {
  const { language, t } = useLanguage();
  const orderedCertifications = getCertifications(language).sort(
    (first, second) => Number(Boolean(second.featured)) - Number(Boolean(first.featured))
  );

  return (
    <Section id="certifications" title={t.certifications.title}>
      <HorizontalCarousel id="certifications-carousel" label={t.certifications.label}>
        {orderedCertifications.map((certification) => (
          <Card key={certification.id} className="certification-card">
            <div className="certification-meta">
              {certification.earnedAt && <span className="period">{certification.earnedAt}</span>}
              {certification.score && <span className="period">{certification.score}</span>}
              <span
                className={`certification-status certification-status--${certification.status}`}
              >
                {certification.status === 'earned'
                  ? t.certifications.earned
                  : t.certifications.inProgress}
              </span>
            </div>
            <h3>{certification.title}</h3>
            <p className="meta">{certification.issuer}</p>
            {certification.credentialId && (
              <p className="credential-id">
                {t.certifications.credentialId}: <code>{certification.credentialId}</code>
              </p>
            )}
            <p>{certification.description}</p>
            <div className="tag-list">
              {certification.technologies.map((technology) => (
                <TechTag key={technology}>{technology}</TechTag>
              ))}
            </div>
            {(certification.credentialUrl || certification.programUrl) && (
              <div className="card-actions">
                {certification.credentialUrl && (
                  <ExternalLink href={certification.credentialUrl}>
                    {t.certifications.view}
                  </ExternalLink>
                )}
                {certification.programUrl && (
                  <ExternalLink href={certification.programUrl}>
                    {t.certifications.viewProgram}
                  </ExternalLink>
                )}
              </div>
            )}
          </Card>
        ))}
      </HorizontalCarousel>
    </Section>
  );
};

export default Certifications;
