#!/usr/bin/env node

/**
 * This script specifically fixes line length issues in the COMPARISON.md file
 * by breaking long table rows into multiple lines.
 */

const fs = require('fs');
const path = require('path');

const comparisonPath = path.join(process.cwd(), 'COMPARISON.md');

if (!fs.existsSync(comparisonPath)) {
  console.error(`Error: COMPARISON.md file not found`);
  process.exit(1);
}

let content = fs.readFileSync(comparisonPath, 'utf8');
const lines = content.split('\n');

// Function to wrap table cells to fit within line length
function wrapTableCell(line, maxLength = 100) {
  if (!line.includes('|')) {
    return line;
  }
  
  // Table header/separator lines should not be modified
  if (line.match(/^\s*\|[-:\s|]+\|\s*$/)) {
    return line;
  }
  
  const parts = line.split('|');
  if (parts.length < 3) {
    return line;
  }
  
  // First column and dividers
  let result = `${parts[0]}|${parts[1]}|`;
  
  // Process second column (potentially long)
  const secondCol = parts[2];
  if (secondCol.length > 40) {
    // Break long content with<br> tags to allow wrapping
    const words = secondCol.trim().split(' ');
    let currentLine = '';
    let newContent = '';
    
    for (const word of words) {
      if ((currentLine + ' ' + word).length <= 40) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        newContent += (newContent ? '<br>' : '') + currentLine;
        currentLine = word;
      }
    }
    
    if (currentLine) {
      newContent += (newContent ? '<br>' : '') + currentLine;
    }
    
    result += ` ${newContent} |`;
  } else {
    result += `${secondCol}|`;
  }
  
  // Process third column (potentially long)
  const thirdCol = parts[3];
  if (thirdCol.length > 40) {
    // Break long content with<br> tags to allow wrapping
    const words = thirdCol.trim().split(' ');
    let currentLine = '';
    let newContent = '';
    
    for (const word of words) {
      if ((currentLine + ' ' + word).length <= 40) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        newContent += (newContent ? '<br>' : '') + currentLine;
        currentLine = word;
      }
    }
    
    if (currentLine) {
      newContent += (newContent ? '<br>' : '') + currentLine;
    }
    
    result += ` ${newContent} |`;
  } else {
    result += `${thirdCol}|`;
  }
  
  return result;
}

// Process the file line by line
const processedLines = lines.map(line => wrapTableCell(line));
const newContent = processedLines.join('\n');

// Write the updated content back to the file
fs.writeFileSync(comparisonPath, newContent);
console.log('✅ COMPARISON.md table rows have been wrapped to comply with line length limits');