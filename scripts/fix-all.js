#!/usr/bin/env node

/**
 * Combined script that runs all fix operations without external dependencies
 */

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

console.log('🔍 Starting comprehensive Markdown fixes...');

// Run the ordered lists fix script
try {
  console.log('\n📋 Fixing ordered lists...');
  require('./fix-ordered-lists');
} catch (error) {
  console.error('❌ Error running fix-ordered-lists:', error.message);
}

// Run the excess backticks fix script
try {
  console.log('\n🔗 Fixing excess backticks...');
  require('./fix-excess-backticks');
} catch (error) {
  console.error('❌ Error running fix-excess-backticks:', error.message);
}

// Run the code blocks fix script
try {
  console.log('\n📦 Fixing code blocks...');
  require('./fix-code-blocks');
} catch (error) {
  console.error('❌ Error running fix-code-blocks:', error.message);
}

// Run the comparison fix script
try {
  console.log('\n📊 Fixing comparison tables...');
  require('./fix-comparison');
} catch (error) {
  console.error('❌ Error running fix-comparison:', error.message);
}

// Try to run prettier if available
try {
  console.log('\n🎨 Formatting all Markdown files...');
  child_process.execSync('npx prettier --write "**/*.md"', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Error running prettier:', error.message);
  console.log('⚠️ Continuing without formatting...');
}

console.log('\n✅ All fixes complete!');
console.log('If you still see linting errors, you may need to install dependencies and run:');
console.log('pnpm install');
console.log('pnpm fix');