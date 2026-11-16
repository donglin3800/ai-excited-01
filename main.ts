// ai-excited-01 entry (Node 22, standard library only).
//
// The entry is the image in entry.png beside this file. This program
// copies it, byte for byte, to the output directory the harness hands
// it, so both graded runs write exactly the same bytes.
//
// Run it locally like the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and out/entry.png is the submitted image.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  console.error(`error: entry image not found: ${source.pathname}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

if (statSync(target).size !== statSync(source).size) {
  console.error(
    `error: copied file size ${statSync(target).size} does not match source size ${statSync(source).size}`,
  );
  process.exit(1);
}
