# Contributing to HciLab-workbench

First off, thank you for considering contributing to HciLab-workbench! 🎉 It's people like you that make this project a great learning resource for the HCI community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Documentation Guidelines](#documentation-guidelines)
- [Submitting Changes](#submitting-changes)
- [Bug Reports](#bug-reports)
- [Feature Requests](#feature-requests)

## 📏 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## 🤝 How Can I Contribute?

### Types of Contributions

We welcome many types of contributions, including:

- 🐛 **Bug fixes** - Fix issues in existing lab assignments or projects
- ✨ **New features** - Add new HCI concepts or improve existing implementations
- 📝 **Documentation** - Improve README files, add comments, or create guides
- 🎨 **Design improvements** - Enhance UI/UX following HCI best practices
- 🧪 **Testing** - Add validation or improve browser compatibility
- 💡 **Ideas** - Share suggestions for new labs or improvements

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic knowledge of HTML, CSS, and JavaScript
- Git installed on your machine
- A GitHub account

### Fork and Clone

1. **Fork the repository** on GitHub by clicking the "Fork" button
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/HciLab-workbench.git
   cd HciLab-workbench
   ```
3. **Add upstream remote** to keep your fork in sync:
   ```bash
   git remote add upstream https://github.com/H0NEYP0T-466/HciLab-workbench.git
   ```

### Set Up Development Environment

1. **Open the project** in your preferred code editor
2. **Run a local server** (recommended for testing):
   ```bash
   python3 -m http.server 8080
   # or
   npx http-server -p 8080
   ```
3. **Navigate to** `http://localhost:8080` in your browser

## 🔄 Development Workflow

### Creating a Branch

Always create a new branch for your work:

```bash
# Update your local main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/` - New features or enhancements
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `style/` - UI/design improvements
- `test/` - Adding or updating tests

Examples:
- `feature/add-lab-8-assignment`
- `fix/login-validation-error`
- `docs/update-installation-guide`
- `style/improve-dashboard-responsive-design`

## 🎨 Code Style Guidelines

### HTML

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Indent with **2 spaces**
- Use lowercase for element names and attributes
- Always close tags properly
- Include `alt` attributes for images
- Use meaningful `id` and `class` names

```html
<!-- Good -->
<section class="student-dashboard">
  <header class="dashboard-header">
    <h1>Welcome, Student</h1>
  </header>
</section>

<!-- Avoid -->
<div class="div1">
  <div class="div2">
    <h1>Welcome, Student</h1>
  </div>
</div>
```

### CSS

- Indent with **2 spaces**
- Use kebab-case for class names (`.my-class-name`)
- Group related properties together
- Use CSS variables for colors and repeated values
- Comment complex or non-obvious styles
- Follow mobile-first responsive design
- Prefer flexbox and grid over floats

```css
/* Good */
:root {
  --primary-color: #1E5E1E;
  --spacing-unit: 8px;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: calc(var(--spacing-unit) * 2);
  background-color: var(--primary-color);
}

/* Media queries at the end */
@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
  }
}
```

### JavaScript

- Indent with **2 spaces**
- Use `const` and `let`, avoid `var`
- Use camelCase for variable and function names
- Use PascalCase for class names
- Add comments for complex logic
- Use modern ES6+ features (arrow functions, template literals, destructuring)
- Handle errors gracefully
- Avoid global variables

```javascript
// Good
const fetchStudentData = async (rollNumber) => {
  try {
    const response = await fetch(`/api/students/${rollNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error;
  }
};

// Avoid
var getData = function(id) {
  return fetch('/api/students/' + id);
}
```

### File Organization

- Keep files organized in appropriate directories
- Use lowercase with hyphens for file names (`login-page.html`, `dashboard-styles.css`)
- Group related files together (components, styles, assets)

## 🧪 Testing Guidelines

### Manual Testing Requirements

Before submitting your changes, test them thoroughly:

1. **Browser Compatibility**
   - Test in Chrome, Firefox, Safari, and Edge
   - Check both desktop and mobile views
   - Test on actual mobile devices if possible

2. **Responsive Design**
   - Test at multiple viewport sizes:
     - Mobile: 320px, 375px, 425px
     - Tablet: 768px, 1024px
     - Desktop: 1440px, 1920px
   - Use browser DevTools to simulate different devices

3. **Functionality Testing**
   - Test all interactive elements (buttons, forms, navigation)
   - Verify all links work correctly
   - Check form validation and error messages
   - Test with different input scenarios (valid, invalid, edge cases)

4. **Performance**
   - Check page load times
   - Ensure animations are smooth
   - Verify images are optimized

5. **Accessibility**
   - Test keyboard navigation (Tab, Enter, Escape)
   - Check color contrast ratios
   - Verify screen reader compatibility (if possible)
   - Ensure all interactive elements are accessible

### Testing Checklist

- [ ] Code runs without console errors
- [ ] All features work as intended
- [ ] UI is responsive on multiple devices
- [ ] Cross-browser compatibility verified
- [ ] No broken links or missing resources
- [ ] Forms validate correctly
- [ ] Error messages are clear and helpful
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG standards

## 📚 Documentation Guidelines

### Code Comments

- Add comments for complex logic
- Explain "why" not "what" (code should be self-explanatory)
- Keep comments up-to-date with code changes

### README Updates

If your contribution affects the README:

- Update relevant sections (features, installation, usage)
- Keep formatting consistent
- Add screenshots or GIFs for visual changes
- Update the folder structure if needed

### Inline Documentation

For new components or features:

```javascript
/**
 * Validates student roll number format
 * @param {string} rollNumber - The roll number to validate (format: fa-YY-program-XXX)
 * @returns {boolean} - True if valid, false otherwise
 */
const validateRollNumber = (rollNumber) => {
  const pattern = /^fa-\d{2}-[a-z]+(-\d{3})?$/i;
  return pattern.test(rollNumber);
};
```

## 📤 Submitting Changes

### Commit Message Guidelines

Write clear, descriptive commit messages following this format:

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - UI/styling changes (not code style)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**

```
feat: add attendance chart to dashboard

Implemented Chart.js visualization for student attendance
tracking with color-coded status indicators.

Closes #123
```

```
fix: correct login validation for roll number format

Fixed regex pattern to properly validate roll numbers
with optional section numbers (e.g., fa-23-bscs-567).

Fixes #45
```

### Pull Request Process

1. **Sync your fork** with the latest upstream changes:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Push your changes** to your fork:
   ```bash
   git push origin your-branch
   ```

3. **Create a Pull Request** on GitHub:
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template completely

4. **PR Title Format:**
   - Use the same format as commit messages
   - Example: `feat: add LAB 8 assignment with form validation`

5. **PR Description Should Include:**
   - Summary of changes
   - Motivation and context
   - Screenshots (for UI changes)
   - Testing performed
   - Related issues (use "Fixes #123" or "Closes #456")
   - Checklist completion

6. **Review Process:**
   - Maintainers will review your PR
   - Address any requested changes promptly
   - Keep discussions respectful and constructive
   - Be patient; reviews may take time

## 🐛 Bug Reports

Found a bug? Help us fix it by submitting a detailed bug report.

### Before Submitting

1. **Search existing issues** to avoid duplicates
2. **Verify the bug** in the latest version
3. **Test in multiple browsers** if applicable

### Bug Report Template

Use the GitHub issue template and include:

- **Summary:** Clear, concise description of the bug
- **Steps to Reproduce:**
  1. Go to '...'
  2. Click on '...'
  3. Scroll down to '...'
  4. See error
- **Expected Behavior:** What should happen
- **Actual Behavior:** What actually happens
- **Environment:**
  - OS: [e.g., Windows 10, macOS 12.0, Ubuntu 20.04]
  - Browser: [e.g., Chrome 96, Firefox 95]
  - Screen size: [e.g., 1920x1080, iPhone 12]
- **Screenshots/GIFs:** Visual evidence (if applicable)
- **Console Errors:** Any JavaScript errors from browser console
- **Additional Context:** Any other relevant information

## 💡 Feature Requests

Have an idea for a new feature or improvement?

### Before Submitting

1. **Search existing issues** to see if it's already suggested
2. **Consider the scope** - Is it aligned with the project goals?
3. **Think about implementation** - Is it feasible?

### Feature Request Template

Use the GitHub issue template and include:

- **Problem Statement:** What problem does this solve?
- **Proposed Solution:** How would you implement this?
- **Alternatives Considered:** What other approaches did you think about?
- **Additional Context:** Screenshots, mockups, or examples
- **Benefits:** How does this improve the project?

## 🏆 Recognition

Contributors will be recognized in the following ways:

- Listed in commit history
- Mentioned in release notes (for significant contributions)
- Added to a Contributors section (if we create one)

## ❓ Questions?

If you have questions about contributing:

1. Check existing documentation
2. Search through existing issues
3. Ask in a new issue with the "question" label
4. Reach out to project maintainers

## 📞 Contact

- **GitHub Issues:** [Report bugs or request features](https://github.com/H0NEYP0T-466/HciLab-workbench/issues)
- **Pull Requests:** [Submit contributions](https://github.com/H0NEYP0T-466/HciLab-workbench/pulls)

---

Thank you for contributing to HciLab-workbench! Your efforts help make this a better learning resource for everyone. 🚀
