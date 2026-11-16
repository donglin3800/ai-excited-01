// The Star-Whale — entry runner.
// Loads the finished artwork from beside this file and drops it
// where the grader expects the entry image to land.
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";

// Where the picture lives in the repository, next to this script.
const artworkName = "entry.png";

// The grader hands us a folder through the environment; without one
// we fall back to the plain /output directory it normally provides.
const outputFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputName = outputFolder + "/" + artworkName;

// Refuse to run if the artwork is somehow not in the repository.
if (!existsSync(artworkName)) {
  throw new Error("cannot find the artwork file: " + artworkName);
}

// Make sure the destination folder is there before writing into it.
mkdirSync(outputFolder, { recursive: true });

// Read the whole picture in one go and write it out unchanged.
const picture = readFileSync(artworkName);
const sourceSize = statSync(artworkName).size;
writeFileSync(outputName, picture);

// Announce the finished write so the run log shows what happened.
const written = statSync(outputName);

// The copy must be whole: a short write would hand the judge a
// broken picture, so fail loudly instead of passing one along.
if (written.size !== sourceSize) {
  throw new Error(
    "short write: expected " + sourceSize + " bytes but wrote " + written.size,
  );
}
console.log("wrote " + written.size + " bytes to " + outputName);
