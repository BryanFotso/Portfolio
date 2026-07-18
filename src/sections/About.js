import Card from 'components/ui/Card';
import Icon from 'components/ui/Icon';
import Section from 'components/ui/Section';

const specialities = [
  {
    title: 'Développement backend',
    description: 'API robustes, microservices et architectures évolutives.',
    icon: 'code',
  },
  {
    title: 'Architecture de données',
    description: 'Data lakes, warehouses et pipelines ETL/ELT.',
    icon: 'chart',
  },
  {
    title: 'DevOps & Cloud',
    description: 'CI/CD, conteneurs et infrastructure automatisée.',
    icon: 'cloud',
  },
];

const About = () => (
  <Section id="about" title="À propos">
    <Card className="about-card">
      <div className="card-heading">
        <Icon name="user" />
        <h3>Qui suis-je ?</h3>
      </div>
      <p className="lead">
        Data Engineer passionné par la construction de pipelines robustes, la qualité des données et
        la mise en production. Je transforme les données en informations utiles pour concevoir des
        solutions durables.
      </p>
      <div className="speciality-grid">
        {specialities.map((speciality) => (
          <div key={speciality.title} className="speciality">
            <Icon name={speciality.icon} />
            <h4>{speciality.title}</h4>
            <p>{speciality.description}</p>
          </div>
        ))}
      </div>
    </Card>
  </Section>
);

export default About;
