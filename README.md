# The Star-Whale

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/donglin3800/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/donglin3800/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

An entry for the make.fun bounty [“Make the AI judge excited”](https://make.fun/bounty/ai-excited-01).

## The picture

A small robot stands alone on a cliff above a sea of clouds, holding
a thin golden thread. The thread climbs into the night sky, where a
whale made of stars swims like a living constellation — a kite on the
robot's string, drifting under a huge golden moon.

The joke is the scale: the tiniest figure in the frame is holding the
largest, and neither one is letting go. The night is deep indigo all
the way through, and gold ties it together — the whale, the moon, the
line between them, and the light on the clouds far below.

Everything in the frame points at one moment: the thread pulled taut
between a small machine that refuses to let go and a creature that
could slip away into the sky at any second.

## What is in this repo

- `entry.png` — the finished artwork, a PNG of 1024 × 682 pixels.
- `main.ts` — the delivery program for Node. It finds `entry.png` by
  looking beside its own file, reads those bytes, and writes them out
  as `entry.png` in the output folder. The folder comes from
  `MAKEFUN_OUTPUT_DIR` and defaults to `/output`. It refuses to run
  when the artwork is missing, and it reads the delivered file back to
  confirm every byte matches before it reports success.

## How to run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

That leaves you with `/tmp/out/entry.png`, an exact copy of the
artwork in this repository. It makes no difference which folder you
start from: the program finds the picture through its own location,
never through your working directory — the grader may launch it from
anywhere, and it still delivers the same bytes.
