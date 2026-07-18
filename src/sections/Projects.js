import Card from 'components/ui/Card';
import ExternalLink from 'components/ui/ExternalLink';
import Section from 'components/ui/Section';
import TechTag from 'components/ui/TechTag';
import projects from 'data/projects';

const Projects = () => (
  <Section id="projects" title="Projets">
    <div className="card-grid">
      {projects.map((project) => (
        <Card key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
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
    </div>
  </Section>
);

export default Projects;
