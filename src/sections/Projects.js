import Card from 'components/ui/Card';
import ExternalLink from 'components/ui/ExternalLink';
import HorizontalCarousel from 'components/ui/HorizontalCarousel';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import projects from 'data/projects';

const Projects = () => (
  <Section id="projects" title="Projets">
    <HorizontalCarousel id="projects-carousel" label="Projets sélectionnés">
      {projects.map((project) => (
        <Card
          key={project.title}
          className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
        >
          <div className="project-card-header">
            <span className="project-category">{project.category}</span>
            {project.featured && <span className="project-badge">Projet phare</span>}
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.contribution && (
            <p className="project-contribution">
              <strong>Ma contribution :</strong> {project.contribution}
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
                  Voir le site
                </ExternalLink>
              )}
              {project.repository && (
                <ExternalLink href={project.repository}>Voir le code</ExternalLink>
              )}
            </div>
          )}
        </Card>
      ))}
    </HorizontalCarousel>
  </Section>
);

export default Projects;
