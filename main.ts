// The Star-Whale, fourth build: the picture sits next to this file as
// entry.png, and this program hands it to the grader's output folder.
// It reads one bundled file and writes one file, nothing else.

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';

function main(): void {
  const bundled = new URL('./entry.png', import.meta.url);
  if (existsSync(bundled) === false) {
    throw new Error('bundled entry.png is not next to main.ts');
  }
  const bytes = readFileSync(bundled);
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  if (existsSync(targetDir) === false) {
    mkdirSync(targetDir, { recursive: true });
  }
  const destination = targetDir + '/entry.png';
  writeFileSync(destination, bytes);
  const written = statSync(destination).size;
  if (written !== bytes.length) {
    throw new Error(`wrote ${written} bytes but the picture holds ${bytes.length}`);
  }
}

main();
