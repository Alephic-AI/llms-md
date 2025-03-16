# Comparing llms.md and llms.txt

This document compares the llms.md standard for code repositories with the llms.txt standard for
websites.

## Overview

Both standards aim to provide structured information to Large Language Models (LLMs) to improve
their understanding and interaction with digital content. However, they are tailored to different
contexts:

- **llms.txt**: Designed for websites to provide a structured overview of web content
- **llms.md**: Designed for code repositories to provide a structured overview of codebase
  organization

## Similarities

1. **Markdown Format**: Both use Markdown for its readability and simplicity
2. **Hierarchical Structure**: Both employ a hierarchy with title, summary, and sections
3. **Purpose**: Both guide LLMs to the most important parts of a larger body of content
4. **Blockquote Summary**: Both use a blockquote immediately after the title for a short summary
5. **Optional Section**: Both can include an optional section for peripheral information
6. **Human Readability**: Both are designed to be useful for both LLMs and human readers

## Differences

| Feature              | llms.txt                               | llms.md                                   |
| -------------------- | -------------------------------------- | ----------------------------------------- |
| **Primary Content**  | Website content and pages              | Code organization and structure           |
| **Typical Sections** | Getting Started, FAQ, API, etc.        | Core Directories, Important Files,        |
|                      |                                        | Dependencies, etc.                        |
| **Link Targets**     | Primarily URLs                         | File and directory paths in the           |
|                      |                                        | repository                                |
| **Audience**         | Website visitors and search assistants | Developers and code assistants            |
| **Placement**        | Website root                           | Repository root                           |
|                      | (e.g., example.com/llms.txt)           |                                           |
| **Context**          | Web navigation and content discovery   | Code navigation and understanding         |

## Use Cases

### llms.txt

- Helping LLMs find and understand important website content
- Directing AI assistants to FAQs, documentation, and key resources
- Improving AI search capabilities by highlighting crucial pages
- Reducing the need for crawlers to index the entire site

### llms.md

- Helping LLMs understand repository structure and organization
- Guiding AI coding assistants to relevant files and directories
- Providing context for code generation and analysis tasks
- Improving documentation discoverability within repositories

## Implementation Considerations

### For llms.txt

- Focus on URL structure and web content organization
- Consider website sections, user flow, and key landing pages
- Optimize for web search and information retrieval

### For llms.md

- Focus on code structure, dependencies, and development workflows
- Consider file organization, important configuration files, and documentation
- Optimize for code understanding and development assistance

## Conclusion

While llms.txt and llms.md share a common goal and format, they are specialized for their respective
domains. llms.txt helps LLMs navigate and understand websites, while llms.md helps them navigate and
understand code repositories. Both standards can significantly improve how AI interacts with digital
content, leading to more accurate and helpful assistance.
