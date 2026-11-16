# The Star-Whale

A tiny robot stands alone on a cliff above a sea of clouds, watching a
whale made of stars and golden light breach toward a huge golden moon.

The picture is about scale and wonder: the smallest possible watcher and
the largest possible sight, a creature that should be swimming in an ocean
but is instead swimming through the night sky. The whale's body is drawn
from constellations, its tail trailing sparks back into the clouds it rose
from. Deep indigo against gold keeps the whole scene readable at a glance,
even small.

## How it runs

`main.ts` (Node 22, standard library only) reads `entry.png` from the
repository and writes it unchanged to `$MAKEFUN_OUTPUT_DIR/entry.png`,
falling back to `/output/entry.png` when that variable is not set. It
checks the artwork exists first, creates the output folder if needed, and
verifies the written file is exactly the same size as the source.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `entry.png` — the artwork (1024 × 683 PNG)
- `main.ts` — the entry program
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim
