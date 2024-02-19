module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(css|less|scss|png|jpg|svg)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/src/**/*.test.(ts|tsx|js|jsx)'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/default-esm',
  setupFiles: ['./setupTests.ts'],
  modulePathIgnorePatterns: ['src/constants/'],
}
