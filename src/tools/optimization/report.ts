import { BundleAnalysis, HistoryEntry, SdkVersions } from "./types";
import { formatBytes, formatDuration } from "./utils";
import { OPTIMIZATION_LEVELS } from "./config";

interface GenerateReportParams {
  results: Record<string, BundleAnalysis[]>;
  history: HistoryEntry[];
  versions: SdkVersions;
  buildDuration: number;
}

function generateReportStyles(): string {
  return `
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background: #f5f5f5;
      }
      
      h1, h2, h3 {
        color: #2c3e50;
      }
      
      .level-card {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .level-name {
        font-size: 1.5em;
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 10px;
      }
      
      .level-description {
        color: #666;
        margin-bottom: 20px;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      
      th {
        background: #f8f9fa;
        font-weight: 600;
      }
      
      .size-cell {
        font-family: monospace;
        text-align: right;
      }
      
      .size-diff {
        margin-left: 8px;
        font-size: 0.9em;
      }
      
      .size-improved {
        color: #2ecc71;
      }
      
      .size-degraded {
        color: #e74c3c;
      }
      
      .compression-info {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .compression-info ul {
        margin: 10px 0;
        padding-left: 20px;
      }
      
      .compression-info ul ul {
        margin: 5px 0;
        color: #666;
      }
      
      .compression-info li {
        margin: 5px 0;
      }
      
      .optimization-details {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #eee;
      }
      
      .optimization-details h3 {
        margin-top: 0;
      }
      
      .optimization-details ul {
        list-style: none;
        padding: 0;
      }
      
      .optimization-details li {
        margin: 10px 0;
      }
      
      pre {
        background: #f8f9fa;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
      }
      
      .sdk-history {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      
      .version-info {
        background: white;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
    </style>
  `;
}

function generateVersionInfo(
  versions: SdkVersions,
  results: Record<string, BundleAnalysis[]>,
): string {
  return `
    <div class="version-info">
      <h2>Current SDK Versions</h2>
      <table>
        <tr>
          <th>SDK</th>
          <th>Version</th>
          <th>Build Size (Standard + Brotli)</th>
        </tr>
        ${Object.entries(versions)
          .map(([sdk, version]) => {
            const standardResult = results.standard?.find((r) => r.sdk === sdk);
            const size = standardResult
              ? formatBytes(standardResult.brotli)
              : "N/A";

            return `
              <tr>
                <td>${sdk}</td>
                <td>${version || "N/A"}</td>
                <td class="size-cell">${size}</td>
              </tr>
            `;
          })
          .join("")}
      </table>
    </div>
  `;
}

function generateCompressionExplanation(): string {
  return `
    <div class="compression-info">
      <h2>Bundle Size Measurements</h2>
      <ul>
        <li><strong>Raw Size:</strong> The original, uncompressed bundle size</li>
        <li><strong>Gzip Size:</strong> Size after Gzip compression (widely supported, standard compression)</li>
        <li><strong>Brotli Size:</strong> Size after Brotli compression (modern, more efficient compression)
          <ul>
            <li>Typically 15-25% smaller than Gzip</li>
            <li>Supported by all modern browsers</li>
            <li>Used as the primary comparison metric</li>
          </ul>
        </li>
      </ul>
    </div>
  `;
}

function generateHistorySection(history: HistoryEntry[]): string {
  const sdkHistory: Record<
    string,
    Array<{
      timestamp: string;
      version: string | null;
      results: Record<string, BundleAnalysis>;
    }>
  > = {
    coinbase: [],
    metamask: [],
    walletconnect: [],
  };

  history.forEach((entry) => {
    Object.entries(entry.versions).forEach(([sdk, version]) => {
      if (entry.results) {
        const sdkResults: Record<string, BundleAnalysis> = {};

        Object.entries(entry.results).forEach(([level, levelResults]) => {
          const sdkResult = levelResults.find((r) => r.sdk === sdk);

          if (sdkResult) {
            sdkResults[level] = sdkResult;
          }
        });

        if (Object.keys(sdkResults).length > 0) {
          sdkHistory[sdk as keyof typeof sdkHistory].push({
            timestamp: entry.timestamp,
            version,
            results: sdkResults,
          });
        }
      }
    });
  });

  return `
    <div class="history-section">
      <h2>Historical Data by SDK</h2>
      ${Object.entries(sdkHistory)
        .map(([sdk, entries]) => generateSdkHistoryCard(sdk, entries))
        .join("")}
    </div>
  `;
}

function generateSdkHistoryCard(
  sdk: string,
  entries: Array<{
    timestamp: string;
    version: string | null;
    results: Record<string, BundleAnalysis>;
  }>,
): string {
  return `
    <div class="sdk-history">
      <h3>${sdk.charAt(0).toUpperCase() + sdk.slice(1)}</h3>
      ${entries.length > 0 ? generateHistoryTable(entries) : "<p>No historical data available</p>"}
    </div>
  `;
}

function generateHistoryTable(
  entries: Array<{
    timestamp: string;
    version: string | null;
    results: Record<string, BundleAnalysis>;
  }>,
): string {
  return `
    <table>
      <tr>
        <th>Date</th>
        <th>Version</th>
        ${Object.keys(OPTIMIZATION_LEVELS)
          .map((level) => `<th>${level} (Brotli)</th>`)
          .join("")}
      </tr>
      ${entries.map((entry) => generateHistoryRow(entry)).join("")}
    </table>
  `;
}

function generateHistoryRow(entry: {
  timestamp: string;
  version: string | null;
  results: Record<string, BundleAnalysis>;
}): string {
  return `
    <tr>
      <td>${new Date(entry.timestamp).toLocaleDateString()}</td>
      <td>${entry.version}</td>
      ${Object.keys(OPTIMIZATION_LEVELS)
        .map((level) => {
          const result = entry.results[level];

          return `<td class="size-cell">${result ? formatBytes(result.brotli) : "N/A"}</td>`;
        })
        .join("")}
    </tr>
  `;
}

function generateCurrentResults(
  results: Record<string, BundleAnalysis[]>,
): string {
  return `
    <div class="current-results">
      <h2>Current Analysis</h2>
      ${Object.entries(OPTIMIZATION_LEVELS)
        .map(([level, info]) =>
          generateLevelCard(level, info, results[level] || [], results),
        )
        .join("")}
    </div>
  `;
}

function generateLevelCard(
  level: string,
  info: { name: string; description: string; config: unknown },
  levelResults: BundleAnalysis[],
  allResults: Record<string, BundleAnalysis[]>,
): string {
  const rows = levelResults
    .map((result) => {
      let diffHtml = "";

      if (level !== "development") {
        const devResult = allResults.development?.find(
          (r) => r.sdk === result.sdk,
        );

        if (devResult) {
          const brotliDiff = (
            ((result.brotli - devResult.brotli) / devResult.brotli) *
            100
          ).toFixed(1);
          const diffClass =
            parseFloat(brotliDiff) < 0 ? "size-improved" : "size-degraded";

          diffHtml = `<span class="size-diff ${diffClass}">(${parseFloat(brotliDiff) > 0 ? "+" : ""}${brotliDiff}%)</span>`;
        }
      }

      return `
      <tr>
        <td>${result.sdk}</td>
        <td class="size-cell">${formatBytes(result.raw)}</td>
        <td class="size-cell">${formatBytes(result.gzip)}</td>
        <td class="size-cell">${formatBytes(result.brotli)} ${diffHtml}</td>
      </tr>
    `;
    })
    .join("");

  return `
    <div class="level-card">
      <div class="level-name">${info.name}</div>
      <div class="level-description">${info.description}</div>
      <table>
        <tr>
          <th>SDK</th>
          <th>Raw Size</th>
          <th>Gzip Size</th>
          <th>Brotli Size</th>
        </tr>
        ${rows}
      </table>
      <div class="optimization-details">
        <h3>Optimization Settings:</h3>
        <pre>${JSON.stringify(info.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

export function generateReport({
  results,
  history,
  versions,
  buildDuration,
}: GenerateReportParams): string {
  const reportContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Bundle Optimization Analysis</title>
        ${generateReportStyles()}
      </head>
      <body>
        <h1>Bundle Optimization Analysis</h1>
        ${generateVersionInfo(versions, results)}
        ${generateCompressionExplanation()}
        ${generateHistorySection(history)}
        ${generateCurrentResults(results)}
        <div class="timing">
          <p>Total analysis time: ${formatDuration(buildDuration)}</p>
        </div>
      </body>
    </html>
  `;

  return reportContent;
}
