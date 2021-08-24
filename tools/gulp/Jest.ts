import log from 'fancy-log';
import { run as jest } from "jest-cli";
// @ts-ignore
import jestConfig from "~/jest.config";

export default async function Jest() {
  const config = await jestConfig;
  log(config);
  const results = await jest();
  log(results);

  return results;
}
