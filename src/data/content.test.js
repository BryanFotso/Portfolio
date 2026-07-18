import {
  certificationContent,
  certificationDefinitions,
  getCertifications,
} from 'data/certifications';
import { educationContent, educationDefinitions, getEducation } from 'data/education';
import { experienceContent, experienceDefinitions, getExperiences } from 'data/experiences';
import { supportedLanguages } from 'data/localization';
import { getProjects, projectContent, projectDefinitions } from 'data/projects';
import {
  additionalSkillContent,
  additionalSkillDefinitions,
  getAdditionalSkills,
  getSkillCategories,
  skillCategoryContent,
  skillCategoryDefinitions,
} from 'data/skills';

const expectUniqueIds = (definitions) => {
  const ids = definitions.map(({ id }) => id);
  expect(new Set(ids).size).toBe(ids.length);
};

const expectCompleteTranslations = ({ definitions, content, getItems, requiredFields }) => {
  const expectedIds = definitions.map(({ id }) => id).sort();

  expectUniqueIds(definitions);
  expect(Object.keys(content).sort()).toEqual([...supportedLanguages].sort());

  supportedLanguages.forEach((language) => {
    expect(Object.keys(content[language]).sort()).toEqual(expectedIds);

    Object.values(content[language]).forEach((localizedItem) => {
      requiredFields.forEach((field) => {
        const value = localizedItem[field];
        expect(value).toBeTruthy();
        if (Array.isArray(value)) expect(value.length).toBeGreaterThan(0);
      });
    });

    const localizedItems = getItems(language);
    expect(localizedItems.map(({ id }) => id).sort()).toEqual(expectedIds);
    localizedItems.forEach((item) => {
      expect(item.id).toBeTruthy();
    });
  });
};

test('chaque langue contient les mêmes projets et les champs requis', () => {
  expectCompleteTranslations({
    definitions: projectDefinitions,
    content: projectContent,
    getItems: getProjects,
    requiredFields: ['category', 'description'],
  });

  projectDefinitions.forEach((project) => {
    expect(project.technologies.length).toBeGreaterThan(0);
    expect(project.repository).toMatch(/^https:\/\//);
  });
});

test('chaque langue contient les mêmes expériences sans dupliquer les invariants', () => {
  expectCompleteTranslations({
    definitions: experienceDefinitions,
    content: experienceContent,
    getItems: getExperiences,
    requiredFields: ['title', 'description', 'highlights'],
  });

  experienceDefinitions.forEach((experience) => {
    expect(experience.company).toBeTruthy();
    expect(experience.logo).toMatch(/^company-logos\//);
    expect(experience.dates.start).toMatch(/^\d{4}-\d{2}$/);
    expect(experience.technologies.length).toBeGreaterThan(0);
  });
});

test('chaque langue contient les mêmes certifications avec un statut explicite', () => {
  expectCompleteTranslations({
    definitions: certificationDefinitions,
    content: certificationContent,
    getItems: getCertifications,
    requiredFields: ['description'],
  });

  certificationDefinitions.forEach((certification) => {
    expect(['earned', 'inProgress']).toContain(certification.status);
    expect(certification).not.toHaveProperty('link');
    expect(certification).not.toHaveProperty('linkType');
    expect(certification).not.toHaveProperty('date');

    if (certification.credentialUrl) expect(certification.credentialId).toBeTruthy();
    if (certification.status === 'inProgress') {
      expect(certification.credentialUrl).toBeUndefined();
      expect(certification.programUrl).toBeTruthy();
    }
  });
});

test('formation et compétences conservent les mêmes identifiants dans les cinq langues', () => {
  expectCompleteTranslations({
    definitions: educationDefinitions,
    content: educationContent,
    getItems: getEducation,
    requiredFields: ['degree', 'location', 'courses'],
  });
  expectCompleteTranslations({
    definitions: skillCategoryDefinitions,
    content: skillCategoryContent,
    getItems: getSkillCategories,
    requiredFields: ['title'],
  });
  expectCompleteTranslations({
    definitions: additionalSkillDefinitions,
    content: additionalSkillContent,
    getItems: getAdditionalSkills,
    requiredFields: ['label'],
  });
});
