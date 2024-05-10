module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  testMatch: [
    '**/*tests.(ts|tsx)',
  ],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy" 
  },
  preset: 'ts-jest',
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: 'jsdom',
};