module.exports = {
    testEnvironment: "node",  // Run backend tests in a Node.js environment
    testMatch: ["<rootDir>/server/**/*.test.js"],  // Only run backend test files
    setupFilesAfterEnv: ["<rootDir>/server/testSetup.js"], // Optional setup
};
  