import fs from 'node:fs';
import { execSync } from 'node:child_process';

const profileReadmePath = 'D:/Projects/DEVsaurabhgaur/README.md';

if (fs.existsSync(profileReadmePath)) {
  let content = fs.readFileSync(profileReadmePath, 'utf8');

  content = content.replace(
    /https:\/\/github-readme-stats\.vercel\.app\/api\?username=DEVsaurabhgaur/g,
    'https://github-readme-stats-eight-theta.vercel.app/api?username=DEVsaurabhgaur'
  );
  content = content.replace(
    /https:\/\/github-readme-stats\.vercel\.app\/api\/top-langs\/\?username=DEVsaurabhgaur/g,
    'https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=DEVsaurabhgaur'
  );
  content = content.replace(
    /<img\s+src="https:\/\/github-profile-trophy\.vercel\.app\/[^"]*"\s+width="100%"\/>/g,
    '<img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=DEVsaurabhgaur&theme=github_dark" width="100%"/>'
  );

  fs.writeFileSync(profileReadmePath, content, 'utf8');
  console.log('Successfully updated D:/Projects/DEVsaurabhgaur/README.md');

  try {
    execSync('git add -A', { cwd: 'D:/Projects/DEVsaurabhgaur', stdio: 'inherit' });
    execSync('git commit -m "fix(profile): fix broken stats and trophy cards with active high-uptime endpoints"', {
      cwd: 'D:/Projects/DEVsaurabhgaur',
      stdio: 'inherit'
    });
    execSync('git push origin main', { cwd: 'D:/Projects/DEVsaurabhgaur', stdio: 'inherit' });
    console.log('Pushed updated profile README to DEVsaurabhgaur/DEVsaurabhgaur!');
  } catch (err) {
    console.error('Git commit/push note:', err.message);
  }
} else {
  console.log('Profile README not found at', profileReadmePath);
}
