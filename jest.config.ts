import "module-alias/register";
import type { Config } from "@jest/types";
import { defaults } from "jest-config";

export default async (): Promise<Config.InitialOptions> => {
  return {
    globals: {
    },
    cacheDirectory: '<rootDir>/build/.cache',
    testEnvironment: 'jsdom',
    verbose: true,
    preset: 'ts-jest',
    roots: ["<rootDir>/src"],
    testRegex: '.*\.spec.tsx?$',
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    modulePaths: [
      '<roorDir>/tests/fixtures/',
      '<rootDir>/src/'
    ],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
    snapshotSerializers: [
      "enzyme-to-json/serializer"
    ],
    setupFiles: [
      '<rootDir>/tests/setupEnzyme.ts'
    ]
  };
};
