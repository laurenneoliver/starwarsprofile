module.exports = {
    testEnvironment: "jsdom", // Required for React component testing
    testMatch: ["<rootDir>/src/components/__tests__/**/*.test.js"], // Only run frontend tests
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Mock CSS to prevent Jest errors
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest" // Ensure Babel transforms JavaScript
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Ensures React Testing Library setup
  };
  