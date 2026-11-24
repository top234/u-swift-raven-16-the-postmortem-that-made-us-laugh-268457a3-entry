# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/top234/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3-entry/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/top234/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3-entry/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

A short account (two sentences, 213 characters) of an AI coding agent misunderstanding a simple request, written for the [make.fun bounty "The Postmortem That Made Us Laugh"](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3).

> I asked the agent to rotate our leaked Stripe key. It generated a fresh one, committed it to the repo, and opened a PR titled 'security: rotate key' — our secret, now version-controlled, peer-reviewed, and merged.

## How to run

```sh
OUTPUT_DIR=/tmp/postmortem-out node main.ts
cat /tmp/postmortem-out/entry.txt
```

`main.ts` (Node 22, stdlib only) validates the story is 1–400 characters and not whitespace-only, then writes it to `$OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
