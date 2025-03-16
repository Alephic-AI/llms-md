#!/usr/bin/env node

/**
 * This script validates llms.md files to ensure they conform to the standard.
 * Usage: node validate-llms-md.js [path/to/llms.md]
 * If no path is provided, it will validate the llms.md file in the current directory.
 */

const fs = require('fs');
const path = require('path');

// Default path
let filePath = path.join(process.cwd(), 'llms.md');

// Override with command line argument if provided
if (process.argv.length > 2) {
  filePath = process.argv[2];
}

// Check if file exists
if (!fs.existsSync(filePath)) {
  console.error(`Error: File ${filePath} does not exist`);
  process.exit(1);
}

// Read the file
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Validation rules
const rules = [
  {
    name: 'H1 Title',
    validate: (lines) => {
      const titleLine = lines.find(line => line.startsWith('# '));
      return {
        valid: !!titleLine,
        message: titleLine ? 'Valid H1 title found' : 'Missing H1 title (must start with "# ")'
      };
    }
  },
  {
    name: 'Blockquote Summary',
    validate: (lines) => {
      const titleIndex = lines.findIndex(line => line.startsWith('# '));
      if (titleIndex === -1) return { valid: false, message: 'Cannot check summary: H1 title not found' };
      
      // Check if there's a blockquote after the title
      const nextNonEmptyIndex = lines.findIndex((line, index) => 
        index > titleIndex && line.trim() !== '');
      
      if (nextNonEmptyIndex === -1) return { valid: false, message: 'Missing blockquote summary after title' };
      
      const hasSummary = lines[nextNonEmptyIndex].startsWith('> ');
      return {
        valid: hasSummary,
        message: hasSummary ? 'Valid blockquote summary found' : 'Missing blockquote summary (must start with "> ")'
      };
    }
  },
  {
    name: 'Required Sections',
    validate: (lines) => {
      const requiredSections = ['## Overview', '## Core Directories', '## Important Files'];
      
      const missingSections = requiredSections.filter(section => 
        !lines.some(line => line.trim() === section)
      );
      
      return {
        valid: missingSections.length === 0,
        message: missingSections.length === 0 
          ? 'All required sections found' 
          : `Missing required sections: ${missingSections.join(', ')}`
      };
    }
  }
];

// Run validation
console.log(`Validating ${filePath}...\n`);
let allValid = true;

rules.forEach(rule => {
  const result = rule.validate(lines);
  console.log(`${result.valid ? '✅' : '❌'} ${rule.name}: ${result.message}`);
  if (!result.valid) allValid = false;
});

console.log('\n');
if (allValid) {
  console.log('✅ Validation successful! The llms.md file conforms to the standard.');
  process.exit(0);
} else {
  console.log('❌ Validation failed. Please fix the issues and try again.');
  process.exit(1);
}