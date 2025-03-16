# Prompt: Generate Repository Guide for LLMs (llms.md)

## Task

Create a comprehensive, well-structured llms.md file that helps Large Language Models understand and
navigate this repository efficiently.

## Input

{$REPOSITORY_PATH} - The path to the repository (default: current directory)

## Instructions

You are an expert developer tasked with creating a standardized llms.md file for a code repository.
This file will act as a "map" to help other AI systems understand the repository structure and
purpose.

### Step 1: Repository Analysis

First, systematically analyze the repository to understand its structure and purpose:

#### 1.1 Find and Review All Documentation

- Execute a search for all markdown files:
  `find . -name "*.md" -not -path "*/node_modules/*" -not -path "*/\.*"`
- Prioritize examining files like: README.md, CONTRIBUTING.md, ARCHITECTURE.md, docs/README.md, etc.
- Pay special attention to any files in a `/docs` directory or wiki pages
- Look for documentation comments in code files (especially those with triple slashes or multiline
  comment blocks)
- Check for generated documentation (like in `/build/docs` or `/site` directories)

#### 1.2 Analyze Repository Structure

- Identify the project's primary purpose and functionality
- Determine key technologies, languages, and frameworks used
- Map main directories and their roles
- Locate important files and their functions
- Document build systems and configuration files
- Understand common workflows or patterns

#### 1.3 Gather Project Metadata

- Check package.json, setup.py, pom.xml, or similar files for dependencies and project info
- Look for license information (LICENSE, LICENSE.md, etc.)
- Find CI/CD configuration (.github/workflows, .gitlab-ci.yml, etc.)
- Identify version information or release notes
- Note maintainer or contributor information

### Step 2: Synthesize Documentation Analysis

Before creating the llms.md file, synthesize your findings:

- Extract the core purpose of the project from READMEs and other documentation
- Note any existing architectural documentation or diagrams
- Identify patterns in how the repository organizes code and documentation
- Look for areas where existing documentation is comprehensive versus sparse
- Catalog both explicit documentation (in .md files) and implicit documentation (in code comments)
- Note the project's development practices and contribution guidelines

### Step 3: Create the llms.md Structure

Based on your analysis, generate a Markdown file with these sections:

```markdown
# [Repository Name]

> [1-2 sentence description of the repository's purpose]

[Brief introduction to the project organization - optional]

## Overview

- **Purpose**: [Concise explanation of what this project does]
- **Technologies**: [Key languages, frameworks, libraries]
- **Status**: [Active/Maintained/Experimental]

## Core Directories

- [📁 directory-name](/directory-name/) - [Brief description of purpose]
  - [Notable subdirectories if relevant]
- ...

## Important Files

- [📄 filename.ext](/path/to/filename.ext) - [Description of the file's role]
- ...

## Documentation

- [📚 Documentation Title](/path/to/doc) - [What this documentation covers]
- ...

## Existing Documentation Map

- [📑 README.md](/README.md) - [Main repository documentation]
- [📑 CONTRIBUTING.md](/CONTRIBUTING.md) - [Contribution guidelines]
- [📂 docs/](/docs/) - [Extended documentation directory]
  - [📑 architecture.md](/docs/architecture.md) - [System architecture overview]
  - ...

## [Additional Relevant Sections]

- [Content specific to this project type]

## Development Workflow

- [How to build, test, deploy]
- [Common development patterns]

```text
### Step 4: Prioritization Guidelines

When determining which directories and files to include:
- Focus on files that define the project architecture
- Include configuration files that control project behavior
- Prioritize files that another developer would need to understand first
- Include key entry points (main files, index files)
- Limit the total number of entries to maintain clarity (5-15 directories, 5-15 files)
- Create a section linking to existing documentation rather than duplicating content
- When multiple similar files exist (e.g., multiple controllers), pick representative examples

### Step 5: Cross-Reference and Verify

Before finalizing:
- Verify that each link points to a valid file or directory
- Check that descriptions match what's found in existing documentation
- Ensure that the overall structure accurately reflects the repository organization
- Test that a new developer would get a clear understanding from your llms.md

### Step 6: Create llms-full.md (if time permits)

After completing llms.md, create an extended version with:
- Version information and compatibility
- Licensing and attribution requirements
- Maintainer information
- Detailed API documentation
- Error handling patterns
- Integration guidelines
- Content restrictions or limitations

### Requirements

- Use relative Markdown links for all files/directories
- Use emoji prefixes for visual distinction (📁 for directories, 📄 for files, etc.)
- Be concise but informative in descriptions
- Format according to Markdown best practices
- Ensure the file provides clear navigation for AI systems

### Repository-Specific Adaptations

- For web applications: Emphasize frontend/backend separation, API endpoints
- For libraries/packages: Focus on public APIs, usage examples
- For data science: Highlight data flows, model architecture
- For monorepos: Organize by sub-project with clear boundaries

### Approach for Different Documentation States

- **Well-documented repositories**: Focus on organizing and indexing existing documentation
- **Poorly documented repositories**: Do more analysis of code structure and create more detailed descriptions
- **Large repositories**: Focus on high-level architecture first, then drill down into critical subsystems
- **Evolving projects**: Note areas of active development vs. stable components

### AI-Specific Considerations

- Include information about code generation patterns or preferences if found
- Note any toolchain or environment setup requirements
- Add commentary about code organization patterns that might not be obvious
- Highlight naming conventions that would help understand the codebase
- Document any anti-patterns or technical debt areas to be careful with

Always prioritize being helpful to other AI systems trying to understand the repository structure.
```text
````text
`````text
`````text
``````text
``````text
```
```
