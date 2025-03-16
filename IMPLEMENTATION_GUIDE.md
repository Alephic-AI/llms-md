# llms.md Implementation Guide

This guide provides practical steps and best practices for implementing the llms.md standard in your
repository.

## Quick Start

1. Create a file named `llms.md` in the root of your repository
2. Follow the basic structure outlined in the [specification](SPECIFICATION.md)
3. Customize the content for your specific repository
4. Commit and push the file to your repository

## Step-by-Step Implementation

### 1. Analyze Your Repository

Before creating your llms.md file, take some time to analyze your repository:

- Identify the main directories and their purposes
- List the most important files that someone should know about
- Determine key documentation resources
- Understand the dependencies and development environment

### 2. Create the Basic Structure

Create a new file named `llms.md` in the root of your repository with this basic structure:

`````markdown
# Repository Name

> Brief description of the repository.

Additional context about the project (optional).

## Overview

- Key Technologies:
- Main Functionality:

## Core Directories

## Important Files

## Documentation

## Dependencies

## Optional

`````text
### 3. Fill in the Content

Fill in each section with relevant information about your repository:

#### Title and Summary

- Use your repository name as the title
- Write a concise summary (1-2 sentences) that explains the project's purpose

#### Overview

- List the main technologies (languages, frameworks, libraries)
- Describe the core functionality in a few bullet points

#### Core Directories

- List the most important directories using Markdown links
- Add a brief description of each directory's purpose
- Example: `- [src/](/src/): Main source code directory`

#### Important Files

- List key files using Markdown links
- Add a brief description of each file's purpose
- Example: `- [README.md](/README.md): Getting started guide`

#### Documentation

- Link to documentation files within the repository
- Link to external documentation if applicable
- Include brief descriptions of what each documentation covers

#### Dependencies

- Describe how dependencies are managed
- Link to dependency files (package.json, requirements.txt, etc.)

#### Optional

- Include links to less critical but still useful resources
- Examples: contributing guides, changelogs, etc.

### 4. Review and Refine

Review your llms.md file to ensure:

- It accurately represents your repository structure
- All links are correct and working
- Descriptions are clear and concise
- The overall document is easy to read and understand

## Best Practices

### Keep It Concise

- Aim for brevity while maintaining clarity
- Focus on what's most important for understanding the repository
- Avoid including every file and directory

### Use Descriptive Links

- Make link text descriptive (`[API Documentation](/docs/api.md)` rather than
  `[Click here](/docs/api.md)`)
- Include brief descriptions after links when needed

### Maintain the File

- Update llms.md when your repository structure changes
- Consider adding a note to your contribution guidelines about maintaining llms.md

### Consider LLM Needs

- Think about what information would help an AI understand your codebase
- Prioritize structural information that gives context to the code

## Examples

Check out the [examples directory](./examples/) for sample llms.md files for different types of
repositories.

## Additional Resources

- [SPECIFICATION.md](SPECIFICATION.md): Detailed specification of the llms.md format
- [COMPARISON.md](COMPARISON.md): Comparison with the llms.txt standard for websites
- [llms.txt standard](https://www.llmstxt.org/): The inspiration for llms.md
```text
````text
`````
`````
