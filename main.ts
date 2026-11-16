// ai-excited-01 entry (Node 22, standard library only).
//
// The entry is the image in entry.png beside this file. This program
// copies it, byte for byte, to the output directory the harness hands
// it, so both graded runs write exactly the same bytes.
//
// Run it locally like the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and out/entry.png is the submitted image.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
