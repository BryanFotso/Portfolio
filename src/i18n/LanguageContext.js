import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import translations from 'i18n/translations';

const STORAGE_KEY = 'portfolio-language';
const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  if (['fr', 'en', 'es', 'de', 'zh'].includes(savedLanguage)) return savedLanguage;
  return 'fr';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
