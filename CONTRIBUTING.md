# Contributing to HCI_TASK

First off, thank you for considering contributing to HCI_TASK! It's people like you that make this project better for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🤔 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots or GIFs** if applicable
- **Specify your environment** (browser, OS, etc.)

Use our [Bug Report Template](https://github.com/H0NEYP0T-466/HCI_TASK/issues/new?template=bug_report.yml) to create bug reports.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**
- **Include mockups or examples** if applicable

Use our [Feature Request Template](https://github.com/H0NEYP0T-466/HCI_TASK/issues/new?template=feature_request.yml) to suggest enhancements.

### Your First Code Contribution

Unsure where to begin? You can start by looking through issues labeled:

- `good-first-issue` - Issues that should only require a few lines of code
- `help-wanted` - Issues that may be more involved
- `documentation` - Improvements to documentation

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/HCI_TASK.git
   cd HCI_TASK
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** following our style guidelines
5. **Test your changes** thoroughly across different browsers
6. **Commit your changes** with clear commit messages
7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Open a Pull Request** against the main repository

## 🔄 Development Workflow

### Setting Up Your Development Environment

1. No special setup required! This project uses vanilla HTML, CSS, and JavaScript
2. For local testing, use Python's built-in server:
   ```bash
   cd "Semester Project"
   python3 -m http.server 8080
   ```
3. Open your browser to `http://localhost:8080`

### Testing Your Changes

Before submitting a pull request:

- [ ] Test your changes in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify responsive design works on different screen sizes
- [ ] Check console for any JavaScript errors
- [ ] Validate HTML and CSS syntax
- [ ] Ensure accessibility standards are met
- [ ] Test on both desktop and mobile devices

### Browser Testing

Ensure compatibility with:
- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🎨 Style Guidelines

### HTML Style Guide

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.)
- Indent with 2 spaces
- Use lowercase for element names and attributes
- Always close tags properly
- Use meaningful class and ID names
- Include `alt` attributes for images
- Maintain proper document structure

Example:
```html
<section class="dashboard-section">
  <h2>Section Title</h2>
  <div class="content">
    <!-- Content here -->
  </div>
</section>
```

### CSS Style Guide

- Use consistent naming conventions (kebab-case for classes)
- Group related properties together
- Use CSS custom properties (variables) for colors and repeated values
- Avoid `!important` unless absolutely necessary
- Mobile-first approach for responsive design
- Use specific transitions instead of `transition: all`
- Comment complex or non-obvious styles

Example:
```css
.dashboard-section {
  padding: 20px;
  background-color: var(--white);
  border-radius: 8px;
}

.dashboard-section:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}
```

### JavaScript Style Guide

- Use ES6+ features (const, let, arrow functions, template literals)
- Use meaningful variable and function names
- Add comments for complex logic
- Follow consistent indentation (2 spaces)
- Use strict equality (`===`) over loose equality (`==`)
- Handle errors gracefully
- Avoid global variables when possible

Example:
```javascript
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
```

### Design Principles

Follow HCI best practices:
- **Visibility of System Status**: Provide feedback for user actions
- **Match Between System and Real World**: Use familiar language and icons
- **User Control and Freedom**: Allow easy navigation and undo actions
- **Consistency**: Maintain uniform design patterns
- **Error Prevention**: Validate input and confirm destructive actions
- **Recognition Rather Than Recall**: Use clear labels and visible options
- **Flexibility and Efficiency**: Support keyboard shortcuts and quick actions
- **Aesthetic and Minimalist Design**: Keep interfaces clean and focused
- **Help Users with Errors**: Provide clear error messages with solutions
- **Help and Documentation**: Include tooltips and help text where needed

## 📝 Commit Messages

Write clear, concise commit messages that explain what changed and why:

### Format

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or dependency changes
- `ci`: CI/CD configuration changes
- `chore`: Other changes that don't modify src or test files

### Examples

```
feat: add attendance chart visualization

Implemented Chart.js integration for displaying student attendance
data in an interactive pie chart format.

Closes #123
```

```
fix: correct outstanding fee color semantics

Changed outstanding fee indicator from green to orange to better
represent the warning nature of unpaid fees.

Fixes #456
```

## 🔀 Pull Request Process

1. **Update documentation** if your changes affect user-facing features
2. **Add tests** if applicable (browser testing checklist)
3. **Follow the style guidelines** outlined above
4. **Ensure your code works** across supported browsers
5. **Update the README.md** if necessary
6. **Fill out the PR template** completely
7. **Link related issues** in your PR description
8. **Request review** from maintainers
9. **Address review feedback** promptly
10. **Squash commits** if requested before merge

### Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Comments added to complex code sections
- [ ] Documentation updated (if applicable)
- [ ] No new warnings or errors introduced
- [ ] Tested across multiple browsers
- [ ] Mobile responsiveness verified
- [ ] Accessibility considerations addressed
- [ ] Related issues linked in PR description

## 🐛 Reporting Bugs

### Before Submitting a Bug Report

- **Check the documentation** to see if the behavior is expected
- **Search existing issues** to avoid duplicates
- **Update to the latest version** to see if the bug persists
- **Test in different browsers** to identify browser-specific issues

### How to Submit a Bug Report

Use our [Bug Report Template](https://github.com/H0NEYP0T-466/HCI_TASK/issues/new?template=bug_report.yml) and include:

1. **Clear title**: Summarize the issue concisely
2. **Description**: Detailed explanation of the problem
3. **Steps to reproduce**: Exact steps to recreate the bug
4. **Expected behavior**: What should happen
5. **Actual behavior**: What actually happens
6. **Environment**: Browser, OS, screen size
7. **Screenshots**: Visual evidence of the issue
8. **Console errors**: Any JavaScript errors from browser console

## 💡 Suggesting Enhancements

### Before Submitting an Enhancement Suggestion

- **Check the documentation** to ensure the feature doesn't already exist
- **Search existing issues** to see if someone else suggested it
- **Consider if it aligns** with the project's goals

### How to Submit an Enhancement Suggestion

Use our [Feature Request Template](https://github.com/H0NEYP0T-466/HCI_TASK/issues/new?template=feature_request.yml) and include:

1. **Clear title**: Summarize the enhancement
2. **Problem statement**: What problem does this solve?
3. **Proposed solution**: Detailed description of your idea
4. **Alternatives**: Other approaches you've considered
5. **Additional context**: Mockups, examples, or references

## 📚 Documentation Updates

Documentation improvements are always welcome! This includes:

- Fixing typos or grammatical errors
- Clarifying confusing sections
- Adding examples or tutorials
- Improving code comments
- Updating outdated information

For documentation changes:
1. Follow the same fork and PR process
2. Ensure markdown formatting is correct
3. Check links are working
4. Verify code examples are accurate

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort in improving HCI_TASK!

## 📫 Questions?

If you have questions about contributing, feel free to:

- Open a [Discussion](https://github.com/H0NEYP0T-466/HCI_TASK/discussions) (if enabled)
- Ask in an existing related issue
- Reach out to the maintainers

---

<p align="center">Happy Contributing! 🎉</p>
