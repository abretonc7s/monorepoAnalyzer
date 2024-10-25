import madge from 'madge';
import { repositories } from './types/repositories';
import path from 'path';

export async function analyzeDependencies() {
  for (const repo of repositories) {
    for (const pkg of repo.packages) {
      const fullPath = path.join(repo.baseDirectory, pkg.path);

      try {
        const res = await madge(`${fullPath}/src`, {
          includeNpm: true,
        });

        console.log(`Dependencies for ${repo.repoName}/${pkg.name}:`);
        console.log(res.obj());

        const circular = res.circular();

        if (circular.length) {
          console.log(`Circular dependencies in ${repo.repoName}/${pkg.name}:`, circular);
        } else {
          console.log(`No circular dependencies in ${repo.repoName}/${pkg.name}`);
        }

        await res.image(`${fullPath}/dependency-graph.png`);
        console.log(`Dependency graph for ${repo.repoName}/${pkg.name} generated.`);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Error analyzing dependencies for ${repo.repoName}/${pkg.name}: ${error.message}`);
        } else {
          console.error(`Error analyzing dependencies for ${repo.repoName}/${pkg.name}: ${String(error)}`);
        }
      }
    }
  }
}
