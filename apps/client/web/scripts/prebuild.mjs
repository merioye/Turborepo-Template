import { existsSync, rmSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = dirname(__filename); // get the name of the directory

const root = resolve(__dirname, '..');
const next = resolve(root, '.next');

[next].forEach((dir) => {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
  }
});
