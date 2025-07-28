/**
 * Jest Testing Framework Configuration
 * Defines test coverage requirements, environment setup, and reporting parameters
 */

module.exports = {
  // Test environment
  testEnvironment: 'node',

  // Coverage configuration
  collectCoverageFrom: [
    'server.js',
    '!node_modules/**',
    '!coverage/**',
    '!jest.config.js',
    '!ecosystem.config.js',
    '!.eslintrc.js'
  ],

  // Coverage thresholds - setup phase baseline (to be improved in future phases)
  coverageThreshold: {
    global: {
      branches: 47,
      functions: 35,
      lines: 59,
      statements: 59
    }
  },

  // Coverage reporters
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json'
  ],

  // Coverage output directory
  coverageDirectory: 'coverage',

  // Test file patterns
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  // Test timeout (10 seconds)
  testTimeout: 10000,

  // Verbose output
  verbose: true,

  // Clear mocks between tests
  clearMocks: true,

  // Restore mocks after each test
  restoreMocks: true,

  // Setup files to run before tests
  setupFilesAfterEnv: [],

  // Module file extensions
  moduleFileExtensions: [
    'js',
    'json',
    'node'
  ],

  // Transform configuration
  transform: {},

  // Ignore patterns
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/'
  ],

  // Global test environment variables
  globals: {
    NODE_ENV: 'test'
  },

  // Force exit after tests complete
  forceExit: true,

  // Detect open handles
  detectOpenHandles: true,

  // Maximum worker processes
  maxWorkers: '50%'
};
