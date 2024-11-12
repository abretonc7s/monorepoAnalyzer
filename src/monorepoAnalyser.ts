import { analyzeLineCounts } from './countLinesMonorepos';
import { analyzeDependencies } from './dependencyAnalyzer';
import { analyzeGithubStats } from './githubAnalyzer';
import * as readline from 'readline';
import { analyzeSizeLimits } from './sizeLimitAnalyzer';

interface AnalysisOption {
    name: string;
    description: string;
    action: () => Promise<void>;
}

async function createPrompt(): Promise<readline.Interface> {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

async function getUserChoice(rl: readline.Interface, options: AnalysisOption[]): Promise<number> {
    console.log('\nAvailable analyses:');
    options.forEach((option, index) => {
        console.log(`${index + 1}. ${option.name} - ${option.description}`);
    });

    const answer = await new Promise<string>(resolve => {
        rl.question('\nEnter the number of the analysis to run (or "q" to quit): ', resolve);
    });

    return answer.toLowerCase() === 'q' ? -1 : parseInt(answer) - 1;
}

async function runMonorepoAnalysis(): Promise<void> {
    console.log('Welcome to Monorepo Analyzer!\n');

    const analysisOptions: AnalysisOption[] = [
        {
            name: 'Line Count Analysis',
            description: 'Count lines of code across your monorepo',
            action: async () => analyzeLineCounts()
        },
        {
            name: 'Dependency Analysis',
            description: 'Analyze dependencies between packages',
            action: analyzeDependencies
        },
        {
            name: 'Size Analysis',
            description: 'Analyze built package sizes and compare across repositories',
            action: analyzeSizeLimits
        },
        {
            name: 'GitHub Analysis',
            description: 'Analyze GitHub statistics (stars, watchers, forks, releases)',
            action: analyzeGithubStats
        }
    ];

    const rl = await createPrompt();

    while (true) {
        const choice = await getUserChoice(rl, analysisOptions);

        if (choice === -1) {
            break;
        }

        if (choice >= 0 && choice < analysisOptions.length) {
            console.log(`\nRunning ${analysisOptions[choice].name}...\n`);
            await analysisOptions[choice].action();
            console.log('\nAnalysis complete!');
        } else {
            console.log('\nInvalid option. Please try again.');
        }
    }

    rl.close();
    console.log('\nThank you for using Monorepo Analyzer!');
}

runMonorepoAnalysis();
