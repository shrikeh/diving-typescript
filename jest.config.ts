import "module-alias/register";
import type { Config } from "@jest/types";
import { defaults } from "jest-config";
import { pathsToModuleNameMapper } from "ts-jest/utils";

const { compilerOptions } = require('./tsconfig');

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ["<rootDir>/src"],
    cacheDirectory: "<rootDir>/build/.cache/jest/",
    testRegex: '.*\.spec.ts$',
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    transform: {
      "^.+\\.(t|j)sx?$": "ts-jest",
    },
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/src"}),
    modulePaths: [
      '<roorDir>/tests/fixtures',
      '<rootDir>/src'
    ]
  };
};
