const list = [
  ['Streak Stats (demolab)', 'https://streak-stats.demolab.com?user=DEVsaurabhgaur&theme=dark&hide_border=true&background=0d001a&ring=7c3aed&fire=a855f7&currStreakLabel=c4b5fd&sideNums=a78bfa&currStreakNum=c4b5fd&sideLabels=8b5cf6&dates=4c1d95'],
  ['Activity Graph', 'https://github-readme-activity-graph.vercel.app/graph?username=DEVsaurabhgaur&bg_color=0d001a&color=a78bfa&line=7c3aed&point=c4b5fd&area=true&area_color=1a0040&hide_border=true&radius=8&custom_title=Contribution%20Activity'],
  ['Snake SVG', 'https://raw.githubusercontent.com/DEVsaurabhgaur/DEVsaurabhgaur/output/github-contribution-grid-snake-dark.svg'],
  ['Profile Summary Stats Card', 'https://github-profile-summary-cards.vercel.app/api/cards/stats?username=DEVsaurabhgaur&theme=github_dark'],
  ['Profile Summary Top Langs', 'https://github-profile-summary-cards.vercel.app/api/cards/top-languages?username=DEVsaurabhgaur&theme=github_dark'],
  ['Profile Summary Profile Details', 'https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=DEVsaurabhgaur&theme=github_dark'],
  ['Anurag Readme Stats (Main)', 'https://github-readme-stats.vercel.app/api?username=DEVsaurabhgaur'],
  ['Trophy (Official)', 'https://github-profile-trophy.vercel.app/?username=DEVsaurabhgaur'],
  ['GitHub Stats Mirror 1', 'https://github-readme-stats-eight-theta.vercel.app/api?username=DEVsaurabhgaur&show_icons=true&theme=dark&hide_border=true&title_color=c4b5fd&text_color=a78bfa&icon_color=8b5cf6&bg_color=0d001a&ring_color=7c3aed'],
  ['GitHub Stats Top Langs Mirror 1', 'https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=DEVsaurabhgaur&layout=compact&theme=dark&hide_border=true&title_color=c4b5fd&text_color=a78bfa&bg_color=0d001a']
];

async function run() {
  for (const [name, url] of list) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log(`${res.status} : ${name}`);
    } catch (e) {
      console.log(`ERR : ${name} -> ${e.message}`);
    }
  }
}
run();
