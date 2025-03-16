#!/usr/bin/env node

/**
 * This script generates an extended llms-full.md file based on an existing llms.md file
 * and additional repository metadata.
 * 
 * Usage: node generate-llms-full.js [path/to/llms.md] [output-path]
 * If no paths are provided, it will use the llms.md in the current directory and output to llms-full.md
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Default paths
let inputPath = path.join(process.cwd(), 'llms.md');
let outputPath = path.join(process.cwd(), 'llms-full.md');
let templatePath = path.join(process.cwd(), 'docs/llms-full-template.md');

// Override with command line arguments if provided
if (process.argv.length > 2) {
  inputPath = process.argv[2];
}

if (process.argv.length > 3) {
  outputPath = process.argv[3];
}

// Ensure files exist
if (!fs.existsSync(inputPath)) {
  console.error(`Error: Input file ${inputPath} does not exist`);
  process.exit(1);
}

if (!fs.existsSync(templatePath)) {
  console.error(`Error: Template file ${templatePath} does not exist`);
  process.exit(1);
}

// Read the input files
const llmsMdContent = fs.readFileSync(inputPath, 'utf8');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Extract basic information from llms.md
const titleMatch = llmsMdContent.match(/^# (.+)$/m);
const descriptionMatch = llmsMdContent.match(/^> (.+)$/m);
const contextMatch = llmsMdContent.match(/^>\s.+\n\n([\s\S]+?)(?=\n## |$)/m);

const title = titleMatch ? titleMatch[1].trim() : 'Unknown Project';
const description = descriptionMatch ? descriptionMatch[1].trim() : '';
const context = contextMatch ? contextMatch[1].trim() : '';

// Extract sections from llms.md
function extractSection(content, sectionName) {
  const sectionRegex = new RegExp(`## ${sectionName}\\s*\\n([\\s\\S]+?)(?=\\n## |$)`, 'm');
  const match = content.match(sectionRegex);
  return match ? match[1].trim() : '';
}

const overview = extractSection(llmsMdContent, 'Overview');
const coreDirectories = extractSection(llmsMdContent, 'Core Directories');
const importantFiles = extractSection(llmsMdContent, 'Important Files');
const documentation = extractSection(llmsMdContent, 'Documentation');
const dependencies = extractSection(llmsMdContent, 'Dependencies');
const optional = extractSection(llmsMdContent, 'Optional');

// Gather additional metadata
let version = '0.1.0'; // Default
let license = 'Unknown';
let lastUpdated = new Date().toISOString().split('T')[0];
let maintainers = 'Unknown';
let contributors = [];

// Try to get version from package.json if it exists
try {
  if (fs.existsSync(path.join(process.cwd(), 'package.json'))) {
    const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
    version = packageJson.version || version;
    
    // Add package.json author as maintainer if available
    if (packageJson.author) {
      if (typeof packageJson.author === 'string') {
        maintainers = packageJson.author;
      } else if (packageJson.author.name) {
        maintainers = `${packageJson.author.name}`;
        if (packageJson.author.email) {
          maintainers += ` <${packageJson.author.email}>`;
        }
      }
    }
  }
} catch (e) {
  console.warn('Could not parse package.json:', e.message);
}

// Try to get license information
try {
  if (fs.existsSync(path.join(process.cwd(), 'LICENSE'))) {
    const licenseContent = fs.readFileSync(path.join(process.cwd(), 'LICENSE'), 'utf8');
    if (licenseContent.includes('MIT License')) {
      license = 'MIT License';
    } else if (licenseContent.includes('Apache License')) {
      license = 'Apache License';
    } else if (licenseContent.includes('GNU General Public License')) {
      license = 'GPL';
    } else {
      // Just use the first line of the license file
      license = licenseContent.split('\n')[0].trim();
    }
  }
} catch (e) {
  console.warn('Could not read LICENSE file:', e.message);
}

// Try to get git contributors if in a git repo
try {
  contributors = execSync('git shortlog -sne --no-merges', { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean)
    .map(line => {
      // Extract email and name from git shortlog output
      const match = line.match(/^\s*\d+\s+(.+)\s+<(.+)>$/);
      if (match) {
        return `${match[1]} <${match[2]}>`;
      }
      return line.trim().replace(/^\s*\d+\s+/, '');
    })
    .slice(0, 5); // Limit to top 5 contributors
} catch (e) {
  console.warn('Could not get git contributors:', e.message);
}

// Try to get last updated date from git if available
try {
  lastUpdated = execSync('git log -1 --format=%cd --date=short', { encoding: 'utf8' }).trim();
} catch (e) {
  console.warn('Could not get last updated date from git:', e.message);
}

// Generate the extended llms-full.md content
let extendedContent = templateContent
  .replace(/{{Repository Name}}/g, title)
  .replace(/{{Brief description of the repository and its purpose.}}/g, description)
  .replace(/{{Additional context or explanation about the project's organization.}}/g, context)
  .replace(/{{List of main programming languages and frameworks}}/, overview.includes('Key Technologies:') ? 
    overview.match(/Key Technologies:([^-\n]+)/)?.[1]?.trim() || 'Not specified' : 'Not specified')
  .replace(/{{Brief description of what the code does}}/, overview.includes('Main Functionality:') ? 
    overview.match(/Main Functionality:([^-\n]+)/)?.[1]?.trim() || 'Not specified' : 'Not specified')
  .replace(/{{Current version of the project}}/, version)
  .replace(/{{License type and summary}}/, license)
  .replace(/{{Date of last update}}/, lastUpdated)
  .replace(/{{Directory structure with descriptions}}/, coreDirectories || 'No core directories specified')
  .replace(/{{Important files with descriptions}}/, importantFiles || 'No important files specified')
  .replace(/{{Documentation resources with descriptions}}/, documentation || 'No documentation specified')
  .replace(/{{List of dependencies and versions}}/, dependencies || 'No dependencies specified')
  .replace(/{{Primary maintainer name and contact information}}/, maintainers)
  .replace(/{{List of key contributors}}/, contributors.length > 0 ? contributors.join(', ') : 'No contributors yet')
  .replace(/{{If applicable, API endpoints, rate limits, and usage examples}}/, 'This project does not provide an API.')
  .replace(/{{How to cite or attribute this project when used}}/, 
    `When using or referencing this project, please include the following attribution:
    
\`\`\`
${title} - ${description}
${maintainers}
URL: https://github.com/${maintainers.split(' ')[0].toLowerCase()}/${title.toLowerCase()}
\`\`\``)
  .replace(/{{Public vs. private sections, what can be used by AI systems}}/, 
    'All content in this repository is public and can be used by AI systems for training and reference.')
  .replace(/{{What to do when links or resources are unavailable}}/, 
    'If any links or resources in this repository are unavailable, please check the GitHub repository for the most up-to-date information or open an issue to report broken links.')
  .replace(/{{How to integrate with this project}}/, 
    `To integrate with this project:
    
1. Add an llms.md file to your repository following the specification
2. Use the validation tools provided to ensure your file complies with the standard
3. Reference this standard in your documentation`)
  .replace(/{{Less critical but still useful information}}/, optional || 'No additional information provided');

// Write the extended content to the output file
fs.writeFileSync(outputPath, extendedContent);
console.log(`✅ Extended llms-full.md generated at ${outputPath}`);

// Also generate a sample for the current repository to show as an example
const examplePath = path.join(process.cwd(), 'examples/llms-full.md');
fs.writeFileSync(examplePath, extendedContent);
console.log(`✅ Example llms-full.md for this repository generated at ${examplePath}`);