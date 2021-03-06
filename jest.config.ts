import "dotenv/config";
import "module-alias/register";
import type { Config } from "@jest/types";
import { defaults } from "jest-config";
import * as _env from "./env";

export default async (): Promise<Config.InitialOptions> => {

  return {
    globals: {
      ..._env
    },
    cacheDirectory: "<rootDir>/build/.cache",
    testEnvironment: "jsdom",
    verbose: true,
    preset: "ts-jest",
    roots: [
      "<rootDir>/src",
      "<rootDir>/tests/integration"
    ],
    testRegex: ".*\.(spec|pact).tsx?$",
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    modulePaths: [
      "<rootDir>/src/"
    ],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
    snapshotSerializers: [
      "enzyme-to-json/serializer"
    ],
    setupFiles: [
      "<rootDir>/tests/setupEnzyme.ts"
    ]
  };
};
