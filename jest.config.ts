const esModules = ['yet-another-react-lightbox'].join('|')

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  testMatch: ['**/src/**/*.test.(ts|tsx|js|jsx)'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/default-esm',
  setupFiles: ['./setupTests.ts'],
  modulePathIgnorePatterns: ['src/constants/'],
  transform: {
    [`(${esModules}).+\\.js$`]: 'babel-jest',
  },
}
