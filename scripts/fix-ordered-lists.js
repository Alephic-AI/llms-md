#!/usr/bin/env node

/**
 * This script fixes ordered lists in Markdown files to use consistent numbering.
 * It's specifically designed to fix the MD029 issues in api-service-llms-full.md.
 */

const fs = require('fs');
const path = require('path');

// File that has the MD029 issue (ordered lists with inconsistent numbering)
const filePath = './examples/api-service-llms-full.md';

try {
  // Check if file exists
  const resolvedPath = path.resolve(filePath);
  if (!fs.existsSync(resolvedPath)) {
    console.log(`File not found: ${filePath}`);
    process.exit(1);
  }
  
  // Read file content
  let content = fs.readFileSync(resolvedPath, 'utf8');
  
  // Find the integration guidelines section and fix the ordered list
  const sectionStart = content.indexOf('## Integration Guidelines');
  
  if (sectionStart === -1) {
    console.log('Integration Guidelines section not found');
    process.exit(1);
  }
  
  const sectionEnd = content.indexOf('## Human Resources', sectionStart);
  
  if (sectionEnd === -1) {
    console.log('Section end not found');
    process.exit(1);
  }
  
  // Extract the section
  const section = content.substring(sectionStart, sectionEnd);
  
  // Fix ordered list numbers
  const fixedSection = section.replace(/^(\s*)(\d+)\.\s/gm, (match, indent, number) => {
    return `${indent}1. `;
  });
  
  // Replace the section in the content
  const fixedContent = content.substring(0, sectionStart) + fixedSection + content.substring(sectionEnd);
  
  // Write the fixed content back to the file
  fs.writeFileSync(resolvedPath, fixedContent);
  
  console.log(`✅ Fixed ordered lists in ${filePath}`);
} catch (error) {
  console.error(`❌ Error fixing ordered lists:`, error.message);
}

// Now let's handle the SPECIFICATION.md duplication heading issue
try {
  const specFile = './SPECIFICATION.md';
  const specPath = path.resolve(specFile);
  
  if (!fs.existsSync(specPath)) {
    console.log(`File not found: ${specFile}`);
    process.exit(1);
  }
  
  let specContent = fs.readFileSync(specPath, 'utf8');
  
  // Find the second occurrence of ### Example and change it to ### Extended Example
  const firstExample = specContent.indexOf('### Example');
  if (firstExample !== -1) {
    const secondExample = specContent.indexOf('### Example', firstExample + 1);
    if (secondExample !== -1) {
      specContent = specContent.substring(0, secondExample) + 
                    '### Extended Example' + 
                    specContent.substring(secondExample + 11);
      fs.writeFileSync(specPath, specContent);
      console.log(`✅ Fixed duplicate heading in ${specFile}`);
    } else {
      console.log(`ℹ️ No duplicate heading found in ${specFile}`);
    }
  } else {
    console.log(`ℹ️ Example heading not found in ${specFile}`);
  }
} catch (error) {
  console.error(`❌ Error fixing duplicate heading:`, error.message);
}