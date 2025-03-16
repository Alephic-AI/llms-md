# llms.md Specification

This document provides a detailed specification for the llms.md standard, which helps Large Language
Models (LLMs) better understand code repositories.

## File Location

The llms.md file MUST be placed in the root directory of a code repository.

## Format

The file MUST be written in valid Markdown format. The structure follows a specific hierarchy with
predefined sections.

### Document Structure

1. **Title (H1)**: REQUIRED

   - A single H1 heading with the repository name
   - Example: `# MyProject`

2. **Summary (Blockquote)**: REQUIRED

   - A brief description enclosed in a Markdown blockquote
   - Located immediately after the title
   - Example: `> A toolkit for processing data in Python`

3. **Introduction Text**: OPTIONAL

   - One or more paragraphs providing additional context
   - No headings in this section
   - Located after the summary blockquote

4. **Sections (H2)**: REQUIRED
   - Multiple sections, each with an H2 heading
   - Standard sections described below
   - May include custom sections as needed

### Standard Sections

The following H2 sections are recommended for most repositories:

#### `## Overview`

General information about the repository:

- Key Technologies: Programming languages, frameworks, and libraries used
- Main Functionality: Core features and capabilities
- Other relevant high-level information

#### `## Core Directories`

A list of the most important directories in the repository:

- Each entry should be a bullet point
- Use Markdown links when possible: `- [directory_name](/path/to/directory/): Description`
- Include brief descriptions of each directory's purpose

#### `## Important Files`

A list of key files in the repository:

- Each entry should be a bullet point
- Use Markdown links: `- [filename](/path/to/file): Description`
- Include brief descriptions of each file's purpose

#### `## Documentation`

Links to documentation files/resources:

- Each entry should be a bullet point
- Use Markdown links to documentation files or external resources
- Include brief descriptions of what each documentation resource covers

#### `## Dependencies`

Information about project dependencies:

- Can be a list or brief description
- May include links to dependency files (package.json, requirements.txt, etc.)

#### `## Optional`

Resources that are helpful but not essential:

- Additional documentation
- Contributing guidelines
- Historical information
- Other supplementary content

### Example

```markdown
# MyAwesomeProject

> A library for data analysis and visualization in Python.

This project is organized with a standard Python package structure. Core functionality is in the src
directory, with documentation and examples provided separately.

## Overview

- Key Technologies: Python 3.8+, NumPy, Pandas, Matplotlib
- Main Functionality: Data cleaning, statistical analysis, and visualization

## Core Directories

- [src/](/src/): Source code with the main package
- [docs/](/docs/): Documentation files (Sphinx-generated)
- [tests/](/tests/): Unit and integration tests
- [examples/](/examples/): Usage examples and tutorials

## Important Files

- [README.md](/README.md): Project introduction and quick start
- [setup.py](/setup.py): Package installation configuration
- [requirements.txt](/requirements.txt): Python dependencies
- [CHANGELOG.md](/CHANGELOG.md): Version history and changes

## Documentation

- [API Reference](/docs/api.md): Complete API documentation
- [User Guide](/docs/user_guide.md): Comprehensive usage instructions
- [Examples Gallery](/examples/README.md): Visual examples with code

## Dependencies

- Runtime dependencies are listed in [requirements.txt](/requirements.txt)
- Development dependencies are in [requirements-dev.txt](/requirements-dev.txt)

## Optional

- [CONTRIBUTING.md](/CONTRIBUTING.md): Guidelines for contributors
- [CODE_OF_CONDUCT.md](/CODE_OF_CONDUCT.md): Community standards
- [docs/architecture.md](/docs/architecture.md): Design decisions and architecture
```

## Notes for Implementation

1. Keep descriptions concise and clear
2. Use relative links for internal resources
3. Maintain the file as the project evolves
4. Highlight the most important parts of your codebase
5. Consider what information would be most valuable to an AI assistant

## Relationship to llms.txt

The llms.md standard is inspired by and compatible with the
[llms.txt standard](https://www.llmstxt.org/) for websites. While they serve similar purposes,
llms.md is specifically tailored for code repositories with appropriate sections and formats.
