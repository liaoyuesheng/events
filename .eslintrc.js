module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    amd: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  globals: {},
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    'comma-dangle': ['error', {
      objects: 'always',
    }],
    '@typescript-eslint/no-explicit-any': 0,
  },
}
