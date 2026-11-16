// Delivering the Star-Whale.
//
// This script has one job: put the finished picture where the contest
// expects it. The grader may launch it from any folder at all, so the
// picture is looked up beside this script file itself, never beside
// the shell the command was run from.

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Turn this file's own location into a folder on disk.
const myDir = dirname(fileURLToPath(import.meta.url));
const picturePath = join(myDir, "entry.png");

// Where the finished picture belongs, or /output if nothing says otherwise.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.png");

if (!existsSync(picturePath)) {
  console.error(`Artwork not found: ${picturePath}`);
  process.exit(1);
}

// Load the picture exactly as it is, byte for byte.
const bytes = readFileSync(picturePath);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, bytes);

// Read the copy back and compare every byte with the original, so a
// write that came out the right length but wrong in the middle is
// caught instead of passing silently.
const written = readFileSync(outPath);
if (!written.equals(bytes)) {
  console.error(
    `Delivered copy does not match the artwork (${written.length} bytes read back, ${bytes.length} expected).`,
  );
  process.exit(1);
}

console.log(`Delivered ${outPath} (${bytes.length} bytes)`);
