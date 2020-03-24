module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
    },
  },
  testMatch: ['<rootDir>/src/*.spec.ts', '<rootDir>/src/*/__tests__/**'],
}
