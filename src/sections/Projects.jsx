import Card from 'components/ui/Card';
import ExternalLink from 'components/ui/ExternalLink';
import HorizontalCarousel from 'components/ui/HorizontalCarousel';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import { getProjects } from 'data/projects';
import { useLanguage } from 'i18n/LanguageContext';

const Projects = () => {
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  return (
    <Section id="projects" title={t.projects.title}>
      <HorizontalCarousel id="projects-carousel" label={t.projects.label}>
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
          >
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
              {project.featured && <span className="project-badge">{t.projects.featured}</span>}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.contribution && (
              <p className="project-contribution">
                <strong>{t.projects.contribution}</strong> {project.contribution}
              </p>
            )}
            <div className="tag-list">
              {project.technologies.map((technology) => (
                <TechTag key={technology}>{technology}</TechTag>
              ))}
            </div>
            {(project.demo || project.repository) && (
              <div className="card-actions">
                {project.demo && (
                  <ExternalLink href={project.demo} className="btn-primary">
                    {t.projects.demo}
                  </ExternalLink>
                )}
                {project.repository && (
                  <ExternalLink href={project.repository}>{t.projects.code}</ExternalLink>
                )}
              </div>
            )}
          </Card>
        ))}
      </HorizontalCarousel>
    </Section>
  );
};

export default Projects;
