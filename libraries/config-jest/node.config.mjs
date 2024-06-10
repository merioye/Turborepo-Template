import { resolve } from 'path';
import baseConfig from './base.config.mjs';

const srcDir = resolve(process.cwd(), 'src');
const setupFile = resolve(srcDir, 'test-setup/setup.ts');

/*
 * This is a custom Jest configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize Nodejs.
 */

/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  ...baseConfig,
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // A list of paths to directories that Jest should use to search for files in
  roots: [srcDir],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: [setupFile],
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.spec.{js,ts,jsx,tsx}', '**/*.test.{js,ts,jsx,tsx}'],
};
