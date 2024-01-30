module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  roots: ['<rootDir>/__tests__'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
}
