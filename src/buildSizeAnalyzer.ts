import fs from 'fs-extra';
import { exec } from 'child_process';
import { repositories } from './types/repositories';
import path from 'path';

function buildMonorepo(directory: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(`cd ${directory} && yarn build`, (error, stdout, stderr) => {
      if (error) {
        reject(`Build error in ${directory}: ${stderr}`);
      } else {
        console.log(`Build output for ${directory}: ${stdout}`);
        resolve();
      }
    });
  });
}

async function getBuildSize(directory: string) {
  try {
    const stats = await fs.stat(directory);
    const sizeInBytes = stats.size;
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);

    console.log(`Build size for ${directory}: ${sizeInMB} MB`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error calculating build size for ${directory}: ${error.message}`);
    } else {
      console.error(`Error calculating build size for ${directory}: ${String(error)}`);
    }
  }
}

export async function analyzeBuildSizes() {
  for (const repo of repositories) {
    for (const pkg of repo.packages) {
      const fullPath = path.join(repo.baseDirectory, pkg.path);

      await buildMonorepo(fullPath);
      await getBuildSize(`${fullPath}/dist`);
    }
  }
}
