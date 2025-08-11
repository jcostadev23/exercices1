/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "babel-jest",
      { presets: ["@babel/preset-env", "@babel/preset-typescript"] },
    ],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;
