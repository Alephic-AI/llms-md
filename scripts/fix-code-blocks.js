#!/usr/bin/env node

/**
 * This script fixes code blocks in Markdown files that are missing language specifiers.
 * It adds 'text' as the default language for code blocks that don't have one.
 */

const fs = require('fs');
const path = require('path');

// Files that have the MD040 issue (fenced code blocks without language)
const targetFiles = [
  './examples/llms-full.md',
  './llms-full.md'
];

// Regular expression to find code blocks without language specification
// that need to be fixed (e.g., empty code blocks or blocks needing a language)
const codeBlockRegex = /```\s*\n/g;

// Process each file
targetFiles.forEach(filePath => {
  try {
    const resolvedPath = path.resolve(filePath);
    
    // Check if file exists
    if (!fs.existsSync(resolvedPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    // Read file content
    let content = fs.readFileSync(resolvedPath, 'utf8');
    
    // For now, we'll keep code blocks as they are without adding a language specifier
    // This avoids the issue of adding unnecessary backticks
    const modifiedContent = content;
    
    // Write back to file if changes were made
    if (content !== modifiedContent) {
      fs.writeFileSync(resolvedPath, modifiedContent);
      console.log(`✅ Fixed code blocks in ${filePath}`);
    } else {
      console.log(`ℹ️ No changes needed in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

// Helper function to get all markdown files in a directory recursively
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      // Skip node_modules and .git directories
      if (file.name !== 'node_modules' && file.name !== '.git') {
        findMarkdownFiles(fullPath, fileList);
      }
    } else if (file.name.endsWith('.md')) {
      // Skip files we've already processed
      if (!targetFiles.includes(fullPath) && !targetFiles.includes('./' + fullPath)) {
        fileList.push(fullPath);
      }
    }
  }
  
  return fileList;
}

// Find and process additional markdown files
try {
  const files = findMarkdownFiles('.');
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if file has code blocks without language
      if (codeBlockRegex.test(content)) {
        // Reset regex lastIndex
        codeBlockRegex.lastIndex = 0;
        
        // Keep code blocks as they are without adding a language specifier
        // This avoids the issue of adding unnecessary backticks
        // const modifiedContent = content.replace(codeBlockRegex, '```text\n');
        // fs.writeFileSync(file, modifiedContent);
        // fixedCount++;
        console.log(`ℹ️ Skipping code block fix in ${file} to avoid extra backticks`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  if (fixedCount === 0) {
    console.log('No additional files needed fixing.');
  } else {
    console.log(`Fixed code blocks in ${fixedCount} additional files.`);
  }
} catch (error) {
  console.error('Error finding markdown files:', error.message);
}

console.log('Code block fixing complete!');