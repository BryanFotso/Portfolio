import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

const getSystemTheme = () => {
  const colorSchemeQuery = window.matchMedia?.('(prefers-color-scheme: dark)');

  return colorSchemeQuery?.matches ? 'dark' : 'light';
};

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : getSystemTheme();
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};

export default useTheme;
