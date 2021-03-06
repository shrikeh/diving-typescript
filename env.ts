import { resolve } from "path";
import "dotenv/config";

export const __buildDir = resolve(__dirname, "build");
export const __testsDir = resolve(__dirname, "tests");
export const __fixturesDir = resolve(__testsDir, "fixtures");
export const __messagesDir = resolve(__dirname, "messages");
export const __distDir = resolve(__dirname, "dist");
export const __srcDir = resolve(__dirname, "src");
export const __logsDir = resolve(__dirname, "logs");
export const __pactsDir = resolve(__buildDir, "pacts");
