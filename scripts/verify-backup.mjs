// Checks a blog backup made with "Download backup" in /admin.
// Usage: node scripts/verify-backup.mjs blog-backup-YYYY-MM-DD.json
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/verify-backup.mjs <backup.json>");
  process.exit(2);
}

const text = readFileSync(file, "utf8");
const backup = JSON.parse(text);
// The checksum covers the "posts" array exactly as it was written in the file.
const start = text.indexOf('"posts":') + '"posts":'.length;
const postsJson = text.slice(start, text.lastIndexOf("}"));
const actual = createHash("sha256").update(postsJson, "utf8").digest("hex");

const ok = backup.format === "portfolio-blog-backup/1" && actual === backup.sha256 && backup.posts.length === backup.count;
console.log(`${ok ? "OK" : "FAILED"}: ${backup.count} posts, exported ${backup.exportedAt}`);
if (!ok) console.log(`expected sha256 ${backup.sha256}\nactual   sha256 ${actual}`);
process.exit(ok ? 0 : 1);
