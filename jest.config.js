module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  snapshotSerializers: [
    "@emotion/jest/serializer" /* if needed other snapshotSerializers should go here */,
  ],
  modulePaths: ["<rootDir>/components/", "<rootDir>/pages/"],
  testRegex: "/__tests__/.*.test.js$",
};
