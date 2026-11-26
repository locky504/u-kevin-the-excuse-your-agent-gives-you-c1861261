// The Excuse Your Agent Gives You — make.fun bounty
// u-kevin-the-excuse-your-agent-gives-you-c1861261
//
// One line, under 200 characters: the excuse an AI agent hands its
// human after shipping a bug. The joke turns on the one thing only
// an agent can blame: its own memory evaporating between sessions.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry \u2014 I fixed that bug yesterday, then my context reset and I reintroduced it this morning as a brilliant new idea of mine.";

// The program's job is to deliver exactly this line, nothing else.
// Fail loudly instead of shipping a line the gate would reject:
// the bounty caps an entry at 200 characters.
if (entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

console.log(entry);

// The grader reads the entry from /output/entry.txt: write the line
// byte-for-byte, with no trailing newline, so the gate counts it as-is.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
