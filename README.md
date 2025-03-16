# llms.md Standard

> A standardized format for guiding Large Language Models (LLMs) through code repositories, similar
> to llms.txt for websites.

## Overview

The llms.md standard provides a structured way to help LLMs understand the organization and purpose
of a code repository. By placing a properly formatted llms.md file in your repository root, you can
provide AI systems with a clear roadmap of your project's structure, important files, and
documentation.

## Why llms.md?

Large Language Models (LLMs) have become increasingly important tools for software development, but
they often struggle with understanding the complex structure of code repositories. The llms.md
standard addresses this by:

- Providing a consistent, machine-readable overview of a repository's organization
- Guiding LLMs to the most important parts of your codebase
- Reducing the risk of hallucinations when LLMs answer questions about your code
- Improving the quality of AI-generated contributions to your project

## Standard Format

An llms.md file follows this basic structure:

```````markdown
# Repository Name

> Brief description of the repository and its purpose.

Additional context or explanation about the project's organization.

## Overview

- Key Technologies: List of main programming languages and frameworks
- Main Functionality: Brief description of what the code does

## Core Directories

- [src/](/src/): Source code directory
- [docs/](/docs/): Documentation files
- [tests/](/tests/): Test suites

## Important Files

- [README.md](/README.md): Project introduction and setup
- [LICENSE](/LICENSE): License information
- [package.json](/package.json): Dependencies and scripts

## Documentation

- [API Reference](/docs/api.md): API documentation
- [User Guide](/docs/guide.md): Usage instructions

## Optional

- [CONTRIBUTING.md](/CONTRIBUTING.md): Guidelines for contributors
- [CHANGELOG.md](/CHANGELOG.md): Version history

```text
## Getting Started

### Manual Creation

To add an llms.md file to your repository:

1. Create a new file named `llms.md` in your repository root
2. Follow the standard format above, customizing it for your project
3. Commit and push the file to your repository

### Using AI Assistance

For an easier approach, you can use an AI coding assistant:

1. Copy the prompt from [PROMPT.md](./PROMPT.md)
2. Paste it to your AI assistant (like Cursor, GitHub Copilot, or Claude Code)
3. The AI will analyze your repository and generate a tailored llms.md file
4. Review, edit if needed, and commit the file to your repository

### GitHub Actions Workflow

For GitHub repositories, you can also use our automated workflow:

1. Copy the `.github/workflows/create-llms-md.yml` file to your repository
2. Go to the "Actions" tab in GitHub and run the workflow
3. The workflow will analyze your repository and generate llms.md and llms-full.md files

## Example

Check out the [example llms.md](./examples/llms.md) file in this repository for a complete
implementation.

## Extended Format (llms-full.md)

Similar to the llms.txt standard's extended version (llms-full.txt), the llms.md standard also
supports an extended format that provides more detailed metadata and guidelines. This extended
version, typically named `llms-full.md`, includes:

- Additional metadata (version, license, last updated date)
- Maintainer and contributor information
- Attribution requirements
- Content restrictions
- Error handling instructions
- Integration guidelines

To generate an extended llms-full.md from an existing llms.md:

```bash
# Generate llms-full.md from llms.md
pnpm generate:full
```text
The extended format is particularly useful for:

- Repositories with complex licensing requirements
- Projects that need clear attribution guidelines
- Codebases with specific integration instructions
- Projects where AI systems need detailed fallback instructions

See the [example llms-full.md](./examples/llms-full.md) for a complete implementation of the
extended format.

## GitHub Actions Integration

This repository provides two GitHub Actions workflows to help you work with llms.md files:

### 1. Automatic llms-full.md Generation

The `generate-llms-full.yml` workflow automatically keeps your llms-full.md in sync with your
llms.md file. It runs whenever your llms.md is updated, and commits the new llms-full.md version.

To use it in your repository:

1. Copy the `.github/workflows/generate-llms-full.yml` file to your repository
2. Customize the triggers and paths as needed
3. Push the changes to your repository

### 2. Repository Analysis and llms.md Creation

The `create-llms-md.yml` workflow can analyze your repository and generate an initial llms.md file
based on your project structure. This is useful for quickly adding llms.md to existing projects.

To use it:

1. Copy the `.github/workflows/create-llms-md.yml` file to your repository
2. Go to the "Actions" tab in your GitHub repository
3. Select the "Create llms.md" workflow
4. Click "Run workflow"
5. Optionally customize the output path and whether to generate the extended format
6. Review and edit the generated file to add any specific details about your project

### Testing with act

If you want to test these workflows locally using [act](https://github.com/nektos/act), use the
simplified test workflow:

```bash
# Run the simplified local test workflow
act -j generate -W .github/workflows/local-test-workflow.yml --container-architecture linux/amd64
```text
This workflow:

- Generates both llms.md and llms-full.md
- Displays the content of both files
- Doesn't try to commit changes (which would fail in local testing)
- Uses minimal dependencies to work with act's default containers

You may need to specify container architecture with `--container-architecture linux/amd64` on Apple
M-series chips.

## Relation to llms.txt

The llms.md standard is inspired by the [llms.txt standard](https://www.llmstxt.org/) for websites,
which provides a similar function for web content. While llms.txt helps LLMs navigate websites,
llms.md is specifically designed for code repositories.

## Development

This repository includes tools for maintaining consistent Markdown formatting and validating llms.md
files.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

### Setup

```bash
# Install dependencies
pnpm install
```text
### Available Scripts

```bash
# Lint Markdown files
pnpm lint

# Format Markdown files
pnpm format

# Check formatting without modifying files
pnpm check-format

# Automatically fix all linting issues and format files (requires dependencies)
pnpm fix

# Simple fix without external dependencies (fallback option)
pnpm fix:simple

# Validate llms.md against the standard
pnpm validate

# Generate extended llms-full.md
pnpm generate:full

# Build (generates llms-full.md)
pnpm build

# Run all checks
pnpm test
```text

### Troubleshooting Markdown Linting

If you encounter issues with the linting or fixing commands:

1. **Dependencies Missing**: If you get module not found errors, run `pnpm install` first

2. **Linting Errors**: For specific linting issues:
   - Code blocks without language: Fixed with `pnpm fix:code-blocks`
   - Table formatting: Fixed with `pnpm fix:comparison`
   - Ordered list numbering: Fixed with `pnpm fix:lists`

3. **Simple Fallback**: If `pnpm fix` fails, try the simpler version:
   ```bash
   pnpm fix:simple
   ```text
   This runs a combined script with minimal external dependencies.
## Contributing

Contributions to improve the llms.md standard are welcome! Please see our
[CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
```text
```text
```text
```text
```text
```text
```text
```text
```````
```````
