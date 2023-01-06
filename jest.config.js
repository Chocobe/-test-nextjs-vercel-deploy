const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases
        '^@/(.*)$': '<rootDir>/$1',
    },
    // testEnvironment: 'jest-environment-jsdom',


    clearMocks: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: '.coverage',
    // By default jest will use a node environment, so DOM elements (like document) will be undefined without this
    testEnvironment: 'jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
