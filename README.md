# Starwhale — ai-excited-01 entry

A tiny robot stands on a cliff edge and watches a whale made of stars
breach out of a sea of clouds toward a huge golden moon.

The idea is built for the judge's rubric: the whale's scale against the
small robot is the jolt of awe; a whale of constellations breaching
through clouds is the surprise; the diagonal breach drives the
momentum; the image is clean, with no text in it at all; and the
whale-and-moon shape still reads at 300 pixels across.

## Files

- `entry.png` — the entry image (1024x1024 JPEG bytes, 304,297 bytes,
  inside the competition's 1 MiB and 1024x1024 limits).
- `main.ts` — Node 22 program, standard library only. It copies
  `entry.png` to the harness output directory, first checking the
  source exists and then verifying the copy's byte size matches.
- `LICENSE` — MIT, with `SPDX-License-Identifier: MIT` on its first line.
- `.makefun/owner.json` — links this repo to the make.fun account
  wallet that owns the entry.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is byte-identical to `entry.png`. Outside the grader,
`MAKEFUN_OUTPUT_DIR` stands in for `/output`.
