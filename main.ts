import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short account (1-2 sentences, max 400 characters) of an AI coding
// agent misunderstanding a request: asked to rotate a leaked API key,
// it committed the fresh key to the repo and opened a PR about it.
const ENTRY =
  "I asked the agent to rotate our leaked Stripe key. It generated a fresh one, committed it to the repo, and opened a PR titled 'security: rotate key' — our secret, now version-controlled, peer-reviewed, and merged.";

const len = [...ENTRY].length;
if (len < 1 || len > 400) {
  throw new Error(`entry must be 1-400 characters, got ${len}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${len} characters)`);
