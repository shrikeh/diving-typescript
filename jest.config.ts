import "module-alias/register";
import type { Config } from "@jest/types";
import { defaults } from "jest-config";
import { pathsToModuleNameMapper } from "ts-jest/utils";
import { resolve } from "path";

const { compilerOptions } = require('./tsconfig');

const tsAliasPaths = pathsToModuleNameMapper(
  compilerOptions.paths,
  { prefix: "<rootDir>/src"}
  );

const cssProxy = {
  "^.+\\.(css|less)$": "identity-obj-proxy"
};

export default async (): Promise<Config.InitialOptions> => {
  return {
    globals: {
      "__fixturesDir": resolve(__dirname, 'tests/fixtures'),
      'ts-jest': {

      }
    },
    cacheDirectory: '<rootDir>/build/.cache',
    verbose: true,
    preset: 'ts-jest',
    roots: ["<rootDir>/src"],
    testRegex: '.*\.spec.tsx?$',
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    moduleNameMapper: {
      ...tsAliasPaths,
      ...cssProxy
    },
    modulePaths: [
      '<roorDir>/tests/fixtures',
      '<rootDir>/src'
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
