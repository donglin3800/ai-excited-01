// The Star-Whale, delivered.
//
// This program does exactly one thing: it takes the finished picture
// that lives next to this script and places an exact copy of it where
// the contest expects the entry to land.
//
// The grader is free to launch this script from any directory, so the
// picture must be found through this file's own path, not through the
// process working directory. That is the whole point of the
// import.meta.url lookup below.

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The folder this script lives in — the picture sits right beside it.
const scriptFolder = dirname(fileURLToPath(import.meta.url));
const artworkFile = join(scriptFolder, "entry.png");

// Destination folder: whatever the environment asks for, or /output.
const targetFolder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const targetFile = join(targetFolder, "entry.png");

if (!existsSync(artworkFile)) {
  console.error(`Cannot find the artwork at ${artworkFile}`);
  process.exit(1);
}

// Copy the picture byte for byte, no decoding, no re-encoding.
const artworkBytes = readFileSync(artworkFile);

mkdirSync(targetFolder, { recursive: true });
writeFileSync(targetFile, artworkBytes);

// Prove the copy is faithful: read it back and compare every single
// byte with the original, so a copy that came out the right length
// but wrong in the middle is caught instead of passing silently.
const deliveredBytes = readFileSync(targetFile);
if (!deliveredBytes.equals(artworkBytes)) {
  console.error(
    `Delivered copy does not match the artwork (${deliveredBytes.length} bytes read back, ${artworkBytes.length} expected).`,
  );
  process.exit(1);
}

console.log(`Delivered ${targetFile} (${artworkBytes.length} bytes)`);
