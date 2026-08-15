import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { commitsBatch1 } from './commits_1_30.mjs';
import { commitsBatch2 } from './commits_31_60.mjs';
import { commitsBatch3 } from './commits_61_90.mjs';
import { commitsBatch4 } from './commits_91_121.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const allCommits = [
  ...commitsBatch1,
  ...commitsBatch2,
  ...commitsBatch3,
  ...commitsBatch4
];

console.log(`Loaded ${allCommits.length} commits to process.`);

function executeCommitStep(item) {
  const { step, msg, files } = item;

  // 1. Write / append files
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

  // 2. Stage and commit
  execSync('git add -A', { cwd: rootDir, stdio: 'pipe' });

  try {
    const escapedMsg = msg.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMsg}"`, { cwd: rootDir, stdio: 'pipe' });
    console.log(`[${step}/121] OK: ${msg}`);
  } catch (err) {
    // If working tree was clean, force small touch to ensure commit happens
    fs.appendFileSync(path.join(rootDir, 'streak.txt'), `\n# [${step}/121] ${msg}\n`, 'utf-8');
    execSync('git add -A', { cwd: rootDir, stdio: 'pipe' });
    const escapedMsg = msg.replace(/"/g, '\\"');
    execSync(`git commit -m "${escapedMsg}"`, { cwd: rootDir, stdio: 'pipe' });
    console.log(`[${step}/121] OK (touched): ${msg}`);
  }
}

console.log('🚀 Starting sequence of 121 commits...');
for (const item of allCommits) {
  executeCommitStep(item);
}

console.log('\n🎉 ALL 121 COMMITS CREATED SUCCESSFULLY!');
console.log('Pushing branch main to GitHub origin...');

try {
  const pushOutput = execSync('git push origin main', { cwd: rootDir, encoding: 'utf-8' });
  console.log('Git push output:\n', pushOutput);
  console.log('🚀 Successfully pushed 121 commits to GitHub!');
} catch (pushErr) {
  console.error('Push error:', pushErr.message);
  if (pushErr.stdout) console.log('stdout:', pushErr.stdout.toString());
  if (pushErr.stderr) console.error('stderr:', pushErr.stderr.toString());
}
