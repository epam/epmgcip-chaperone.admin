module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '!src/**'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'jest'],
  rules: {
    'no-underscore-dangle': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'always',
        tsx: 'always',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'vite.config.ts',
          'test.{ts,tsx}',
          'test-*.{ts,tsx}',
          '**/*{.,_}{test,spec}.{ts,tsx}',
          '**/jest.config.ts',
          '**/jest.setup.ts',
        ],
      },
    ],
  },
}
