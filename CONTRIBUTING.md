# Contributing to the llms.md Standard

Thank you for considering contributing to the llms.md standard! This document provides guidelines
and instructions for contributing to this project.

## Ways to Contribute

There are several ways you can contribute to this project:

1. **Provide feedback**: Share your thoughts on the current specification and suggest improvements
2. **Submit examples**: Create example llms.md files for different types of repositories
3. **Improve documentation**: Help clarify the specification or fix errors
4. **Develop tools**: Create tools that generate, validate, or utilize llms.md files
5. **Spread the word**: Help promote the standard to increase adoption

## Contribution Process

### For Documentation and Examples

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a pull request with a clear description of the changes

### For Specification Changes

1. Open an issue to discuss the proposed changes before implementing them
2. Once consensus is reached, follow the process for documentation changes

## Guidelines

### Format and Style

- Follow the existing Markdown style in the repository
- Use clear, concise language
- Check for spelling and grammar errors

Before submitting a pull request, please run the following checks:

`````bash
# Install dependencies
pnpm install

# Automatically fix linting issues and format Markdown files
pnpm fix

# If pnpm fix fails, try the simpler version with fewer dependencies
pnpm fix:simple

# Run linting and validation checks
pnpm test
```text
All pull requests are automatically checked using these tools in GitHub Actions.

### Examples

When submitting example llms.md files:

1. Place them in the `examples/` directory
2. Name them appropriately (e.g., `python-library.md`, `web-app.md`)
3. Ensure they follow the current specification
4. Include realistic but fictional project details

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## License

By contributing to this project, you agree that your contributions will be licensed under the same
[MIT License](LICENSE) that covers the project.
````text
`````
