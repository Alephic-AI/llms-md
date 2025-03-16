#!/usr/bin/env node

/**
 * This script fixes excess backticks in code blocks (like ```````text or ````text)
 * and standardizes them to ```text or just ```.
 */

const fs = require('fs');
const path = require('path');

// Function to find all Markdown files recursively
function findMarkdownFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      // Skip node_modules and .git directories
      if (file.isDirectory()) {
        if (file.name !== 'node_modules' && file.name !== '.git') {
          findMarkdownFiles(fullPath, fileList);
        }
      } else if (file.name.endsWith('.md')) {
        fileList.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fileList;
}

// Find all Markdown files
console.log('Finding Markdown files to fix...');
const markdownFiles = findMarkdownFiles('.');

console.log(`Found ${markdownFiles.length} Markdown files to check.`);

// Regular expressions to match problematic patterns
const excessBackticksRegex = /(`{4,})text/g;  // Matches ````text, `````text, etc.
const standardizeCodeBlockRegex = /```(\s*\n)/g;  // Matches code blocks without language spec

let fixedFiles = 0;

// Process each file
markdownFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has excess backticks
    const hasExcessBackticks = excessBackticksRegex.test(content);
    const hasEmptyCodeBlocks = standardizeCodeBlockRegex.test(content);
    
    if (hasExcessBackticks || hasEmptyCodeBlocks) {
      // Reset regex lastIndex
      excessBackticksRegex.lastIndex = 0;
      standardizeCodeBlockRegex.lastIndex = 0;
      
      // Replace excess backticks with three backticks
      let modifiedContent = content.replace(excessBackticksRegex, '```text');
      
      // Also ensure all code blocks without language spec are consistently formatted
      modifiedContent = modifiedContent.replace(standardizeCodeBlockRegex, '```$1');
      
      // Write changes back to file
      fs.writeFileSync(filePath, modifiedContent);
      fixedFiles++;
      console.log(`✅ Fixed backticks in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed excess backticks in ${fixedFiles} files.`);
console.log('Backtick fixing complete!');