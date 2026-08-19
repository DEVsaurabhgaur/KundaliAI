import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { batch1 } from './commits_169_batch1.mjs';
import { batch2 } from './commits_169_batch2.mjs';
import { batch3 } from './commits_169_batch3.mjs';
import { batch4 } from './commits_169_batch4.mjs';
import { batch5 } from './commits_169_batch5.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const allCommits = [
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5
];

console.log(`Loaded ${allCommits.length} commits for the 169 suite (2026-08-19).`);

function executeCommitStep(item) {
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

  try {
    const escapedMsg = msg.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMsg}"`, { cwd: rootDir, stdio: 'pipe' });
    console.log(`[${step}/169] OK: ${msg}`);
  } catch (err) {
    fs.appendFileSync(path.join(rootDir, 'streak.txt'), `\n# [${step}/169] ${msg}\n`, 'utf-8');
    execSync('git add -A', { cwd: rootDir, stdio: 'pipe' });
    const escapedMsg = msg.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMsg}"`, { cwd: rootDir, stdio: 'pipe' });
    console.log(`[${step}/169] OK (touched): ${msg}`);
  }
}

console.log('🚀 Starting sequence of 169 commits for 2026-08-19 streak...');
for (const item of allCommits) {
  executeCommitStep(item);
}

console.log('\n🎉 ALL 169 COMMITS CREATED SUCCESSFULLY!');
console.log('Pushing branch main to GitHub origin...');

try {
  const pushOutput = execSync('git push origin main', { cwd: rootDir, encoding: 'utf-8' });
  console.log('Git push output:\n', pushOutput);
  console.log('🚀 Successfully pushed 169 commits to GitHub!');
} catch (pushErr) {
  console.error('Push error:', pushErr.message);
  if (pushErr.stdout) console.log('stdout:', pushErr.stdout.toString());
  if (pushErr.stderr) console.error('stderr:', pushErr.stderr.toString());
}
