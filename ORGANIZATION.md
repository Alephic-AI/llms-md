# Repository Organization Guide

This document outlines the organizational structure for the llms.md standard repository.

## Directory Structure

```bash
llms-md/
├── examples/               # Example llms.md files for different project types
│   ├── web-app.md          # Example for web applications
│   ├── python-library.md   # Example for Python libraries
│   ├── node-package.md     # Example for Node.js packages
│   └── ...
├── scripts/                # Utility scripts
│   ├── validate-llms-md.js # Validation script for llms.md files
│   ├── generate-llms-md.js # Generator script for creating llms.md files
│   └── ...
├── docs/                   # Extended documentation
│   ├── best-practices.md   # Best practices for creating llms.md files
│   ├── integrations.md     # Integrating with LLM tools and platforms
│   └── ...
├── tools/                  # Tools for working with llms.md
│   ├── vscode-extension/   # VS Code extension for llms.md
│   ├── github-action/      # GitHub Action for validating llms.md files
│   └── ...
└── .github/                # GitHub-specific files
    ├── workflows/          # GitHub Actions workflows
    └── ...
```text
## Repository Components

### 1. Core Specification Files

- Define the llms.md standard
- Provide comprehensive documentation
- Located in the repository root
- Examples: README.md, SPECIFICATION.md, llms.md, COMPARISON.md

### 2. Example Files

- Demonstrate implementation for different project types
- Show best practices in action
- Located in the `examples/` directory
- Examples: web-app.md, python-library.md, node-package.md

### 3. Utility Scripts

- Provide tools for working with llms.md files
- Implement validation and generation functionality
- Located in the `scripts/` directory
- Examples: validate-llms-md.js, generate-llms-md.js

### 4. Extended Documentation

- Provide detailed guidance beyond core specification
- Cover specific use cases and advanced topics
- Located in the `docs/` directory
- Examples: best-practices.md, integrations.md

### 5. Integration Tools

- Help integrate llms.md with development workflows
- Extend the standard to different platforms
- Located in the `tools/` directory
- Examples: vscode-extension, github-action

### 6. Configuration Files

- Configure the development environment
- Set up linting, formatting, and testing
- Located in the repository root
- Examples: .markdownlint.json, .prettierrc, package.json

## File Naming Conventions

1. Use kebab-case for file names (lowercase with hyphens)
2. Use descriptive and specific names
3. Use consistent suffixes for related files
4. Examples:
   - web-app.md, python-library.md (consistent format)
   - validate-llms-md.js, generate-llms-md.js (action-focused naming)

## Implementation Guidelines

When adding content to the repository:

1. **Identify the category** the content belongs to
2. **Place it in the appropriate directory**
3. **Follow naming conventions** for files
4. **Ensure consistency** with existing content
5. **Document the purpose** of each file
6. **Keep examples simple yet comprehensive**

## Contribution Guidelines

When contributing to the repository:

1. **Follow the organizational structure** outlined in this document
2. **Stick to the established formatting standards**
3. **Run linting and validation** before submitting changes
4. **Create comprehensive examples** for new use cases
5. **Update documentation** to reflect any new additions

## Directory Purpose Reference

| Directory   | Purpose                                     | Example Files                      |
| ----------- | ------------------------------------------- | ---------------------------------- |
| `/`         | Core specification and configuration files  | README.md, SPECIFICATION.md        |
| `examples/` | Example implementations for different cases | web-app.md, python-library.md      |
| `scripts/`  | Utility scripts for working with llms.md    | validate-llms-md.js                |
| `docs/`     | Extended documentation and guides           | best-practices.md, integrations.md |
| `tools/`    | Integration tools for different platforms   | vscode-extension/, github-action/  |
| `.github/`  | GitHub-specific configuration               | workflows/markdown-validation.yml  |
````text
`````text
``````text
```
