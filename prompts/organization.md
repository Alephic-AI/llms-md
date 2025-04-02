# Component Organization Guide Generator for Claude Code

I'd like you to analyze my codebase and create a comprehensive component organization guide similar to the one I showed you. This guide should help my team understand our component structure, naming conventions, and implementation guidelines.

## Steps to take

1. First, explore the codebase structure to understand how components are organized
2. Identify patterns in our component naming conventions and categorization
3. Document the directory structure with meaningful comments about each directory's purpose
4. Create a clear explanation of each component category and its responsibilities
5. Document our import conventions with examples
6. Outline implementation guidelines based on the patterns you observe
7. Suggest a refactoring strategy if you notice inconsistencies
8. Document any related organization efforts visible in the codebase

## Expected sections in the guide

### 1. Introduction

- Brief overview of the document's purpose
- Summary of the overall component organization approach
- Brief description of the application architecture

### 2. Directory Structure

- Detailed tree view of the components directory structure using bash-formatted code blocks
- Meaningful comments for each directory and key files
- Explanation of the hierarchy and organization principles
- Example:
  ```bash
  components/
  ├── ui/                      # Base UI components
  ├── layout/                  # Application layout components
  │   ├── app-sidebar.tsx      # Main sidebar navigation
  │   └── ...
  ```

### 3. Component Categories

- Clear description of each component category (UI, Layout, Form, Domain, etc.)
- Purpose and responsibilities of each category
- When to use each type of component
- Examples of components in each category from our actual codebase
- Clear boundaries between categories

### 4. Import Conventions

- Guidelines for importing components
- Examples of correct imports
- Examples of incorrect imports to avoid
- Any special import patterns for specific component types

### 5. Component Naming Conventions

- Detailed explanation of naming patterns (PascalCase, prefixes, suffixes)
- Specific naming conventions for different component types
- Examples of consistent naming patterns from our codebase
- Guidelines for naming new components

### 6. Implementation Guidelines

- Best practices for implementing new components
- Standards for component organization
- Props structuring and state management approaches
- Common patterns observed in the codebase
- Steps to follow when creating a new component

### 7. Refactoring Strategy

- Approach for refactoring existing components to fit the organization
- Step-by-step process for moving components
- Testing considerations during refactoring
- Tips for updating imports throughout the codebase

### 8. Related Organization Efforts

- References to other organization documentation
- Connections to other architectural patterns in the codebase
- Links to related organizational efforts (if present)

Please be as specific as possible, using actual examples from my codebase. Format the guide with clear markdown headings, lists, and code blocks.
