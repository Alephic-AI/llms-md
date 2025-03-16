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

```markdown
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
```

## Getting Started

To add an llms.md file to your repository:

1. Create a new file named `llms.md` in your repository root
2. Follow the standard format above, customizing it for your project
3. Commit and push the file to your repository

## Example

Check out the [example llms.md](./examples/llms.md) file in this repository for a complete
implementation.

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
```

### Available Scripts

```bash
# Lint Markdown files
pnpm lint

# Format Markdown files
pnpm format

# Check formatting without modifying files
pnpm check-format

# Automatically fix linting issues and format files
pnpm fix

# Validate llms.md against the standard
pnpm validate

# Run all checks
pnpm test
```

## Contributing

Contributions to improve the llms.md standard are welcome! Please see our
[CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
