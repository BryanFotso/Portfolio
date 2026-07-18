export const supportedLanguages = ['fr', 'en', 'es', 'de', 'zh'];

export const localizeCollection = (definitions, contentByLanguage, language) => {
  const localizedContent = contentByLanguage[language] || contentByLanguage.fr;

  return definitions.map((definition) => ({
    ...definition,
    ...localizedContent[definition.id],
  }));
};

const presentLabels = {
  fr: 'Présent',
  en: 'Present',
  es: 'Actualidad',
  de: 'Heute',
  zh: '至今',
};

const formatYearMonth = (value, language) => {
  const [year, month] = value.split('-');
  return language === 'zh' ? `${year}/${month}` : `${month}/${year}`;
};

export const formatMonthPeriod = ({ start, end }, language) =>
  `${formatYearMonth(start, language)} – ${end ? formatYearMonth(end, language) : presentLabels[language]}`;

export const formatYearPeriod = ({ start, end }) => `${start} – ${end}`;
