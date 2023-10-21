module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  rules: {
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'import/no-absolute-path': 'off',
    '@typescript-eslint/indent': 'off',
  },
};
