# SampleProject

> A modern web application that provides advanced data visualization for time series data.

This project follows a standard React/Node architecture with a REST API backend. The frontend and
backend are clearly separated in the directory structure. The application is designed to be deployed
on AWS infrastructure.

## Overview

- Key Technologies: TypeScript, React, Node.js, Express, D3.js, PostgreSQL
- Main Functionality: Interactive data visualization, user authentication, data import/export, and
  report generation

## Core Directories

- [frontend/](/frontend/): React-based web interface with TypeScript
- [backend/](/backend/): Node.js API server with Express
- [database/](/database/): Database migrations and schema definitions
- [docs/](/docs/): Project documentation and API specifications
- [scripts/](/scripts/): Utility scripts for development, testing, and deployment
- [infrastructure/](/infrastructure/): Terraform and AWS CloudFormation templates

## Important Files

- [README.md](/README.md): Project overview and quick start guide
- [package.json](/package.json): Node.js dependencies and scripts for the monorepo
- [docker-compose.yml](/docker-compose.yml): Docker configuration for local development
- [.env.example](/.env.example): Example environment variables
- [ARCHITECTURE.md](/docs/ARCHITECTURE.md): System architecture documentation

## Documentation

- [API Reference](/docs/api.md): Complete backend API documentation
- [Component Library](/docs/components.md): UI component documentation and usage examples
- [Deployment Guide](/docs/deployment.md): Instructions for deploying to production
- [User Guide](/docs/user-guide.md): End-user documentation for the application
- [Contributing Guide](/CONTRIBUTING.md): Guidelines for contributing to the project

## Dependencies

- Frontend dependencies are managed in [frontend/package.json](/frontend/package.json)
- Backend dependencies are managed in [backend/package.json](/backend/package.json)
- Database uses PostgreSQL 13+
- Infrastructure is defined using Terraform 1.0+

## Development Environment

- Node.js v16+ is required
- Development can be done using Docker with docker-compose
- VS Code configuration is provided in [.vscode/](.vscode/)
- ESLint and Prettier are used for code formatting

## Testing

- [frontend/tests/](/frontend/tests/): React component and integration tests (Jest/React Testing
  Library)
- [backend/tests/](/backend/tests/): API and unit tests (Mocha/Chai)
- [e2e/](/e2e/): End-to-end tests using Cypress

## CI/CD

- GitHub Actions workflows are defined in [.github/workflows/](.github/workflows/)
- Automated testing, linting, and deployment pipelines
- Production deployments require manual approval

## Optional

- [CHANGELOG.md](/CHANGELOG.md): Version history and notable changes
- [SECURITY.md](/SECURITY.md): Security policy and reporting procedures
- [LICENSE](/LICENSE): MIT License details
- [docs/performance.md](/docs/performance.md): Performance optimization strategies
- [docs/troubleshooting.md](/docs/troubleshooting.md): Common issues and solutions
