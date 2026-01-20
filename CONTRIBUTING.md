# Contributing to HciLab-workbench

First off, thank you for considering contributing to HciLab-workbench! 🎉

The following is a set of guidelines for contributing to this HCI lab project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## 📑 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Requirements](#testing-requirements)

---

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

- Use the bug report template
- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples
- Describe the behavior you observed and what you expected
- Include screenshots if applicable
- Note your browser/OS version

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use the feature request template
- Use a clear and descriptive title
- Provide a detailed description of the proposed functionality
- Explain why this enhancement would be useful
- List any alternative solutions you've considered

### 🔧 Code Contributions

Unsure where to begin? Look for issues labeled:
- `good first issue` - Good for newcomers
- `help wanted` - Issues where we need help
- `bug` - Bug fixes needed
- `enhancement` - New features to implement

---

## Development Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code, Sublime Text, etc.)
- Python 3 or Node.js (for local development server)
- Git for version control

### Getting Started

1. **Fork the repository** on GitHub

2. **Clone your fork locally:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/HciLab-workbench.git
   cd HciLab-workbench
   ```

3. **Create a branch for your changes:**
   ```bash
   git checkout -b feat/your-feature-name
   ```

4. **Set up the development environment:**
   ```bash
   # Navigate to the project you want to work on
   cd "Semester Project"
   
   # Start a local development server
   python3 -m http.server 8080
   # OR
   npx http-server -p 8080
   ```

5. **Open your browser:**
   Navigate to `http://localhost:8080`

6. **Make your changes and test thoroughly**

7. **Commit your changes** (see commit guidelines below)

8. **Push to your fork:**
   ```bash
   git push origin feat/your-feature-name
   ```

9. **Open a Pull Request** on GitHub

---

## Branch Naming Conventions

Use descriptive branch names that follow this pattern:

```
<type>/<short-description>
```

### Types:

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style/formatting (no functional changes)
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

### Examples:

```bash
feat/add-grade-calculator
fix/login-validation-error
docs/update-installation-guide
style/improve-dashboard-layout
refactor/optimize-data-loading
test/add-authentication-tests
chore/update-dependencies
```

---

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for clear and structured commit messages.

### Format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:

- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation only changes
- `style` - Changes that don't affect code meaning (whitespace, formatting)
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks, dependency updates
- `ci` - CI/CD configuration changes
- `build` - Build system or external dependency changes

### Examples:

```bash
feat(dashboard): add attendance chart visualization

Added Chart.js integration to display attendance data
in an interactive pie chart on the dashboard.

Closes #123

---

fix(login): resolve password validation bug

Fixed issue where passwords with special characters
were incorrectly rejected during login validation.

Fixes #456

---

docs(readme): update installation instructions

Added detailed steps for Windows users and clarified
Python version requirements.

---

style(css): improve mobile responsive design

Adjusted breakpoints and spacing for better mobile
experience on screens below 768px.
```

### Rules:

- Use the imperative mood ("add" not "added" or "adds")
- Don't capitalize the first letter of the subject
- No period at the end of the subject
- Limit the subject line to 50 characters
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how
- Reference issues and pull requests in the footer

---

## Pull Request Process

### Before Submitting

1. ✅ Test your changes thoroughly across different browsers
2. ✅ Ensure your code follows the project's style guidelines
3. ✅ Update documentation if needed
4. ✅ Test on mobile/tablet viewports if UI changes
5. ✅ Check console for any errors or warnings
6. ✅ Verify no broken links or missing assets

### Submitting the PR

1. **Use the pull request template** - It will be automatically loaded
2. **Provide a clear title** following conventional commit format
3. **Fill out all sections** of the template
4. **Link related issues** using keywords (Closes #123, Fixes #456)
5. **Add screenshots** for visual changes
6. **Request review** from maintainers
7. **Be responsive** to feedback and questions

### PR Title Format:

```
<type>(<scope>): <description>
```

Examples:
```
feat(dashboard): add course enrollment section
fix(login): resolve session persistence issue
docs(contributing): add testing guidelines
```

### Review Process

- Maintainers will review your PR within 2-3 business days
- Address any requested changes promptly
- Keep the discussion focused and professional
- Once approved, a maintainer will merge your PR
- Celebrate your contribution! 🎉

---

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- Indent with 2 spaces
- Use meaningful class names (BEM methodology preferred)
- Add ARIA labels for accessibility
- Keep attributes in this order: `class`, `id`, `data-*`, `src`, `href`, `alt`, `title`
- Close all tags properly
- Use lowercase for tags and attributes

### CSS

- Use 2 spaces for indentation
- Use meaningful, descriptive class names
- Follow a consistent naming convention (BEM or similar)
- Group related properties together
- Use CSS variables for colors, spacing, and commonly used values
- Mobile-first approach for responsive design
- Comment complex selectors or hacks
- Prefer flexbox and grid over floats
- Use rem/em for font sizes, px for borders/shadows

Example:
```css
/* Component: Dashboard Card */
.dashboard-card {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
}

.dashboard-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-dark-green);
  margin-bottom: var(--spacing-sm);
}

.dashboard-card__content {
  flex: 1;
  color: var(--color-text);
}

/* Responsive */
@media (max-width: 768px) {
  .dashboard-card {
    padding: var(--spacing-sm);
  }
}
```

### JavaScript

- Use modern ES6+ syntax
- Use `const` by default, `let` when reassignment is needed
- Use meaningful variable and function names
- Add comments for complex logic
- Use template literals for string concatenation
- Prefer arrow functions for callbacks
- Use async/await over promise chains
- Handle errors appropriately
- Keep functions small and focused (single responsibility)
- Indent with 2 spaces
- Use semicolons consistently

Example:
```javascript
// Good
const fetchStudentData = async (rollNumber) => {
  try {
    const response = await fetch(`/api/students/${rollNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch student data:', error);
    throw error;
  }
};

// Use descriptive names
const isValidRollNumber = (rollNumber) => {
  const pattern = /^fa-\d{2}-[a-z]+-\d{3}$/i;
  return pattern.test(rollNumber);
};
```

### File Organization

```
project/
├── pages/          # HTML pages
├── components/     # Reusable JS components
├── styles/         # CSS files (one per page/component)
├── assets/         # Images, fonts, etc.
├── data.js         # Data/configuration
└── app.js          # Main application logic
```

### Comments

- Write self-documenting code when possible
- Add comments for complex logic or business rules
- Use JSDoc for function documentation
- Keep comments up to date with code changes
- Avoid obvious comments

```javascript
/**
 * Validates student roll number format
 * @param {string} rollNumber - The roll number to validate (e.g., "fa-23-bscs-567")
 * @returns {boolean} True if valid, false otherwise
 */
const validateRollNumber = (rollNumber) => {
  // Roll number format: fa-YY-program-XXX
  const pattern = /^fa-\d{2}-[a-z]+-\d{3}$/i;
  return pattern.test(rollNumber);
};
```

---

## Testing Requirements

### Manual Testing Checklist

Before submitting a PR, test your changes:

#### Functionality
- [ ] Feature works as intended
- [ ] No console errors or warnings
- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] Data displays correctly

#### Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest, if possible)

#### Responsive Design
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667, 414x896)
- [ ] Test both portrait and landscape

#### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels present where needed
- [ ] Color contrast sufficient
- [ ] Screen reader friendly (if possible to test)

#### Performance
- [ ] Page loads quickly
- [ ] No layout shift
- [ ] Animations smooth
- [ ] No memory leaks (for JS-heavy features)

### Testing UI Changes

For visual changes, include:
- Screenshots of before/after
- Screenshots on different screen sizes
- GIF/video of interactive elements (if applicable)

### Testing Forms

- Valid input handling
- Invalid input handling
- Required field validation
- Format validation (email, phone, etc.)
- Success/error message display
- Loading states

---

## Additional Resources

- [HCI Design Principles](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [JavaScript Best Practices](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [CSS Guidelines](https://cssguidelin.es/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## Questions?

If you have questions about contributing, feel free to:
- Open a discussion on GitHub
- Ask in an existing issue
- Review closed issues for similar questions

Thank you for contributing to HciLab-workbench! 🚀

---

<p align="center">
  <sub>Remember: Good contributions come in all sizes! Even fixing a typo helps. 💚</sub>
</p>
