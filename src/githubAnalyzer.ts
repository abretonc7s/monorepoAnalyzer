import { repositories } from './types/repositories';

interface GithubStats {
  stars: number;
  watchers: number;
  forks: number;
  releases: number;
  tags: number;
}

interface GithubAnalysisResult {
  repoName: string;
  stats: GithubStats;
}

async function fetchGithubStats(githubUrl: string): Promise<GithubStats> {
  const repoPath = new URL(githubUrl).pathname.slice(1);
  const apiUrl = `https://api.github.com/repos/${repoPath}`;
  const releasesUrl = `https://api.github.com/repos/${repoPath}/releases?per_page=1`;
  const tagsUrl = `https://api.github.com/repos/${repoPath}/tags?per_page=1`;

  try {
    const [repoResponse, releasesResponse, tagsResponse] = await Promise.all([
      fetch(apiUrl, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      }),
      fetch(releasesUrl, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      }),
      fetch(tagsUrl, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      })
    ]);

    if (!repoResponse.ok || !releasesResponse.ok || !tagsResponse.ok) {
      throw new Error(`Failed to fetch GitHub data for ${githubUrl}`);
    }

    const repoData = await repoResponse.json();

    // Get total release count from Link header
    const releasesLink = releasesResponse.headers.get('Link');
    const tagsLink = tagsResponse.headers.get('Link');

    // Parse the last page number from Link header or default to 1
    const releaseCount = releasesLink ?
      parseInt(releasesLink.match(/page=(\d+)>; rel="last"/)?.[1] || '1') :
      1;

    const tagCount = tagsLink ?
      parseInt(tagsLink.match(/page=(\d+)>; rel="last"/)?.[1] || '1') :
      1;

    return {
      stars: repoData.stargazers_count,
      watchers: repoData.subscribers_count,
      forks: repoData.forks_count,
      releases: releaseCount,
      tags: tagCount
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching GitHub stats for ${githubUrl}: ${error.message}`);
    }

    return {
      stars: 0,
      watchers: 0,
      forks: 0,
      releases: 0,
      tags: 0
    };
  }
}

export async function analyzeGithubStats(): Promise<void> {
  const results: GithubAnalysisResult[] = [];

  for (const repo of repositories) {
    console.log(`Analyzing GitHub stats for ${repo.repoName}...`);

    const stats = await fetchGithubStats(repo.githubUrl);

    results.push({
      repoName: repo.repoName,
      stats
    });
  }

  console.log('\n=== GitHub Statistics ===');
  results.forEach(result => {
    console.log(`\nRepository: ${result.repoName}`);
    console.log(`Stars: ${result.stats.stars.toLocaleString()}`);
    console.log(`Watchers: ${result.stats.watchers.toLocaleString()}`);
    console.log(`Forks: ${result.stats.forks.toLocaleString()}`);
    console.log(`Releases: ${result.stats.releases.toLocaleString()}`);
    console.log(`Tags: ${result.stats.tags.toLocaleString()}`);
  });
}
