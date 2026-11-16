# The Star-Whale

A little robot stands alone on a cliff above a sea of clouds, holding a
thin golden thread. At the other end of the thread, high in the night
sky, swims a whale made of stars — a constellation that has come alive
and is flying like the robot's kite beneath a huge golden moon.

The picture is about a small thing reaching an enormous one: the robot
cannot touch the whale, but it is holding on, and the whale is staying
close. Deep indigo night holds everything together; gold carries the
whale, the moon, the thread, and the light on the clouds below.

## What is in this entry

- `entry.png` — the artwork, a 1024 × 682 PNG.
- `main.ts` — a small Node program that delivers the artwork. It reads
  `entry.png` from beside itself and writes those exact bytes to
  `entry.png` inside the output folder. The folder comes from the
  `MAKEFUN_OUTPUT_DIR` environment variable and defaults to `/output`
  when that variable is not set. Before reading, it checks the picture
  is actually there; after writing, it checks the delivered copy is
  exactly the same size as the original, and it stops with an error if
  either check fails.

## Running it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The finished image lands at `/tmp/out/entry.png`, byte for byte the
same as `entry.png` in this repository.
