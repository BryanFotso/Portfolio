import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist/**', 'build/**', 'coverage/**', 'node_modules/**'] },
  {
    files: ['src/**/*.{js,jsx}'],
    ...eslint.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      ...reactRefresh.configs.vite.rules,
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true, allowExportNames: ['useLanguage'] },
      ],
    },
  },
  {
    files: ['src/**/*.test.{js,jsx}', 'src/setupTests.js'],
    languageOptions: { globals: globals.vitest },
  },
  eslintConfigPrettier,
];
