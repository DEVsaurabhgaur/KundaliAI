import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { backdateBatch1 } from './commits_121_backdate_batch1.mjs';
import { backdateBatch2 } from './commits_121_backdate_batch2.mjs';
import { backdateBatch3 } from './commits_121_backdate_batch3.mjs';

import { todayBatch1 } from './commits_212_today_batch1.mjs';
import { todayBatch2 } from './commits_212_today_batch2.mjs';
import { todayBatch3 } from './commits_212_today_batch3.mjs';
import { todayBatch4 } from './commits_212_today_batch4.mjs';
import { todayBatch5 } from './commits_212_today_batch5.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const backdateCommits = [
  ...backdateBatch1,
  ...backdateBatch2,
  ...backdateBatch3
];

const todayCommits = [
  ...todayBatch1,
  ...todayBatch2,
  ...todayBatch3,
  ...todayBatch4,
  ...todayBatch5
];

console.log(`Loaded ${backdateCommits.length} backdated commits for 2026-08-21.`);
console.log(`Loaded ${todayCommits.length} today commits for 2026-08-22.`);
console.log(`Total commits to create and push: ${backdateCommits.length + todayCommits.length}`);

function executeCommitStep(item, isBackdate) {
  const { step, msg, files } = item;

  for (const f of files) {
    const fullPath = path.join(rootDir, f.file);
    const parentDir = path.dirname(fullPath);
    if (!fs.existsSync(parentDir)) {
      fs.mkdirSync(parentDir, { recursive: true });
    }

    if (f.append) {
      fs.appendFileSync(fullPath, f.content, 'utf-8');
    } else {
      fs.writeFileSync(fullPath, f.content, 'utf-8');
    }
  }

  execSync('git add -A', { cwd: rootDir, stdio: 'pipe' });

  const env = { ...process.env };
  if (isBackdate) {
    // Spread timestamps smoothly across 2026-08-21
    const hour = 10 + Math.floor((step / 121) * 8);
    const min = (step * 3) % 60;
    const dateStr = `2026-08-21T${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:00+05:30`;
    env.GIT_AUTHOR_DATE = dateStr;
    env.GIT_COMMITTER_DATE = dateStr;
  }

  try {
    const escapedMsg = msg.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMsg}"`, { cwd: rootDir, stdio: 'pipe', env });
    console.log(`[${isBackdate ? 'BACKDATE 2026-08-21' : 'TODAY 2026-08-22'}][${step}] OK: ${msg}`);
  } catch (err) {
    fs.appendFileSync(path.join(rootDir, 'streak.txt'), `\n# [${isBackdate ? '2026-08-21' : '2026-08-22'}][${step}] ${msg}\n`, 'utf-8');
    execSync('git add -A', { cwd: rootDir, stdio: 'pipe' });
    const escapedMsg = msg.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMsg}"`, { cwd: rootDir, stdio: 'pipe', env });
    console.log(`[${isBackdate ? 'BACKDATE 2026-08-21' : 'TODAY 2026-08-22'}][${step}] OK (touched): ${msg}`);
  }
}

console.log('\n🚀 [PHASE 1/2] Creating 121 backdated commits for 2026-08-21...');
for (const item of backdateCommits) {
  executeCommitStep(item, true);
}

console.log('\n🚀 [PHASE 2/2] Creating 212 today commits for 2026-08-22...');
for (const item of todayCommits) {
  executeCommitStep(item, false);
}

console.log('\n🎉 ALL 333 COMMITS (121 BACKDATED + 212 TODAY) CREATED SUCCESSFULLY!');
console.log('Pushing branch main to GitHub origin...');

try {
  const pushOutput = execSync('git push origin main', { cwd: rootDir, encoding: 'utf-8' });
  console.log('Git push output:\n', pushOutput);
  console.log('🚀 Successfully pushed all 333 commits to GitHub!');
} catch (pushErr) {
  console.error('Push error:', pushErr.message);
  if (pushErr.stdout) console.log('stdout:', pushErr.stdout.toString());
  if (pushErr.stderr) console.error('stderr:', pushErr.stderr.toString());
}
