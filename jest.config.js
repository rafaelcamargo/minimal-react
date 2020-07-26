module.exports = {
  collectCoverageFrom: ['src/scripts/**/*.js'],
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
