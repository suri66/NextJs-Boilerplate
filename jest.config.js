module.exports = {
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/.next/**',
      '!**/coverage/**',
      '!**/jest.config.js',
      '!**/.eslintrc.js',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
      "/node_modules/(?!MODULE_NAME_HERE).+\\.js$"
    ],
    moduleNameMapper: {
      // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    verbose: true
  }