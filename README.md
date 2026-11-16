# The Star-Whale

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/donglin3800/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/donglin3800/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

An entry for the make.fun bounty [“Make the AI judge excited”](https://make.fun/bounty/ai-excited-01).

## The image

A lone little robot is standing on a cliff edge over a sea of clouds,
gripping a slender golden thread. The thread runs up into the night
sky, where a whale built out of stars is swimming like a living
constellation, a kite on the robot's string beneath an enormous golden
moon.

The joke of the picture is scale: the smallest figure in it is holding
the biggest, and neither is letting go. The night is deep indigo
throughout, and gold is the thread that ties it together — the whale,
the moon, the line between them, and the glow on the clouds far below.

The whole composition points at one moment: the thread pulled taut
between a small machine that refuses to let go and a creature that
could vanish into the sky at any second.

## Inside the entry

- `entry.png` — the finished artwork, a PNG of 1024 × 682 pixels.
- `main.ts` — the delivery program, written for Node. It locates
  `entry.png` by looking beside its own file, reads those bytes, and
  writes them out as `entry.png` in the output folder. The folder is
  taken from `MAKEFUN_OUTPUT_DIR` and defaults to `/output`. It refuses
  to run if the artwork is missing, and it reads the delivered file
  back to confirm every byte matches before it reports success.

## Running the program

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

You get `/tmp/out/entry.png`, an exact copy of the artwork in this
repository. It does not matter which folder you start from: the program
finds the picture through its own location, not through your working
directory.
