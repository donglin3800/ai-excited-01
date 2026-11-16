// The Star-Whale — the little program that hands the judges the picture.
// It reads the artwork sitting next to it and places an exact copy where
// the contest looks for the finished image.

import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";

// The folder the contest reads from, or /output when nothing is set.
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Stop early with a plain message if the artwork is not beside this file.
if (existsSync("entry.png") === false) {
  console.error("No entry.png beside main.ts, nothing to deliver.");
  process.exit(1);
}

// Make the folder if it is not there yet.
mkdirSync(targetDir, { recursive: true });

// Pull the artwork off disk, byte for byte.
const artwork = readFileSync("entry.png");

// Put those same bytes down in the target folder.
writeFileSync(targetDir + "/entry.png", artwork);

// Check the delivered copy is exactly as big as the original, so a
// cut-short write cannot slip through unnoticed.
const deliveredBytes = statSync(targetDir + "/entry.png").size;
if (deliveredBytes !== artwork.length) {
  console.error("Delivered " + deliveredBytes + " bytes but the artwork has " + artwork.length + ".");
  process.exit(1);
}

console.log("Delivered entry.png to " + targetDir + "/entry.png (" + deliveredBytes + " bytes)");
