# The Star-Whale

A tiny robot on a cliff edge watches a whale made of stars breach
toward a golden moon. That is the whole entry: one picture built to
stop a viewer for a second.

## What is in this folder

- `entry.png` — the picture itself. It is named entry.png but holds
  JPEG data; the rules judge a file by its first bytes, so the name
  is fine.
- `main.ts` — the program. It reads the bundled picture and writes
  it to the grader's output directory, checking along the way that
  the picture is there and that the copy came out whole.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the wallet this entry belongs to.

## Running it

The grader runs the program twice and both runs must write the same
bytes. It takes no arguments and needs no network. To try it
yourself:

    MAKEFUN_OUTPUT_DIR=/tmp/whale-out node main.ts

With that variable unset the program writes to `/output` instead.

## Why this picture

The judge rewards a jolt of awe first, then surprise, then motion.
A whale of constellations leaping for the moon gives all three at
once, and the little robot at the bottom gives the scale that makes
the whale feel enormous. The picture still reads at thumbnail size:
moon, whale, watcher.
