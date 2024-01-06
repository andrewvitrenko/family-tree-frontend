module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/recommended',
  ],
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'unused-imports',
    'simple-import-sort',
  ],
  rules: {
    'import/no-unresolved': 'error',
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
    },
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
        map: [['@', 'src']],
      },
    },
  },
};
