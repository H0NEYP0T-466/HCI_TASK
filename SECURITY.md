# Security Policy

## 🛡️ Security Overview

We take the security of HciLab-workbench seriously. Although this is primarily an educational project showcasing HCI principles, we are committed to ensuring that any security vulnerabilities are addressed promptly and responsibly.

## 🔒 Supported Versions

As this is an educational repository, we focus on the latest version in the main branch. Security updates are applied to:

| Version | Supported          |
| ------- | ------------------ |
| Latest (main branch) | ✅ Yes |
| Older commits | ❌ No |

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in this project, please help us by reporting it responsibly. We appreciate your efforts to disclose your findings in a coordinated manner.

### How to Report

**Please DO NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities using one of the following methods:

#### Option 1: GitHub Security Advisories (Preferred)

1. Navigate to the [Security tab](https://github.com/H0NEYP0T-466/HciLab-workbench/security) of this repository
2. Click on "Report a vulnerability"
3. Fill out the vulnerability report form with as much detail as possible
4. Submit the report

#### Option 2: GitHub Issues (Private)

If the GitHub Security Advisory feature is not available:

1. Create a new issue with the title: `[SECURITY] Brief description`
2. Mark the issue as confidential if possible
3. Include all relevant details (see below)

### What to Include in Your Report

To help us understand and resolve the issue quickly, please include:

- **Type of vulnerability** (e.g., XSS, CSRF, SQL injection, etc.)
- **Location of the affected code** (file path and line numbers)
- **Step-by-step instructions to reproduce** the vulnerability
- **Proof of concept or exploit code** (if applicable)
- **Impact assessment** - What could an attacker potentially do?
- **Suggested fix** (if you have one)
- **Your contact information** (if you'd like to be credited)

### Example Report

```
**Vulnerability Type:** Cross-Site Scripting (XSS)

**Location:** 
- File: `Semester Project/components/dashboard.js`
- Lines: 45-52

**Description:**
User input in the student name field is not sanitized before being rendered 
to the DOM, allowing potential XSS attacks.

**Steps to Reproduce:**
1. Log into the student portal
2. Navigate to the profile section
3. Enter `<script>alert('XSS')</script>` in the name field
4. Save changes
5. Refresh the page
6. Observe the alert dialog appears

**Impact:**
An attacker could inject malicious scripts that execute in other users' 
browsers, potentially stealing session tokens or sensitive information.

**Suggested Fix:**
Sanitize user input using DOMPurify or properly escape HTML entities 
before rendering to the DOM.
```

## ⏱️ Response Timeline

We aim to respond to security reports according to the following timeline:

- **Initial Response:** Within 48-72 hours of receiving the report
- **Vulnerability Assessment:** Within 1 week
- **Fix Development:** Depends on severity and complexity
- **Public Disclosure:** After fix is deployed (coordinated with reporter)

### Severity Levels

We categorize vulnerabilities using the following severity levels:

| Severity | Description | Response Time |
|----------|-------------|---------------|
| 🔴 **Critical** | Can be exploited remotely, affects all users, data breach potential | 24-48 hours |
| 🟠 **High** | Significant impact, requires user interaction or specific conditions | 3-7 days |
| 🟡 **Medium** | Moderate impact, limited scope or difficult to exploit | 1-2 weeks |
| 🟢 **Low** | Minimal impact, theoretical vulnerability, or requires unlikely conditions | 2-4 weeks |

## 🔐 Security Best Practices

### For Contributors

When contributing to this project, please follow these security best practices:

#### Input Validation
- **Always sanitize user input** before processing or rendering
- **Validate data types and formats** on both client and server side
- **Use allow-lists** rather than deny-lists when possible

```javascript
// Good - Sanitize before rendering
const sanitizedInput = DOMPurify.sanitize(userInput);
element.innerHTML = sanitizedInput;

// Bad - Direct injection
element.innerHTML = userInput; // XSS risk!
```

#### Authentication & Authorization
- **Never store passwords in plain text**
- **Use secure session management** (httpOnly, secure, sameSite cookies)
- **Implement proper logout functionality** that clears sessions
- **Validate session tokens on every request**

#### Data Handling
- **Minimize data collection** - Only collect what's necessary
- **Don't expose sensitive data** in client-side code or logs
- **Use HTTPS** for all data transmission in production
- **Properly handle errors** without exposing system details

```javascript
// Good - Generic error message
catch (error) {
  console.error('Operation failed');
  showUserMessage('An error occurred. Please try again.');
}

// Bad - Exposes system details
catch (error) {
  showUserMessage(`Database error: ${error.message}`); // Leaks info!
}
```

#### Dependencies
- **Keep dependencies updated** (even if this project uses CDN links)
- **Review external scripts** before including them
- **Use Subresource Integrity (SRI)** for CDN resources

```html
<!-- Good - With SRI hash -->
<script 
  src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js"
  integrity="sha512-..."
  crossorigin="anonymous">
</script>

<!-- Less secure - Without SRI -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js"></script>
```

#### Client-Side Security
- **Implement Content Security Policy (CSP) headers**
- **Use X-Frame-Options** to prevent clickjacking
- **Enable XSS protection headers**
- **Validate and sanitize URLs** before navigation

### For Users

If you're using this project as a learning resource or deploying it:

- ⚠️ **Do not use in production** without proper security hardening
- 🔒 **Change all default credentials** (like the demo login)
- 🛡️ **Add authentication** if exposing to the internet
- 📊 **Monitor for suspicious activity**
- 🔄 **Keep your web server updated**

## 🚫 Out of Scope

The following are considered out of scope for security reports:

- **Known limitations of demo/educational features**
  - Example: The demo login with hardcoded credentials is intentional
- **Issues in archived or deprecated code**
- **Vulnerabilities requiring physical access** to the user's machine
- **Social engineering attacks**
- **Denial of Service (DoS) attacks** that require unrealistic resources
- **Issues affecting unsupported browsers** (e.g., IE11)
- **Theoretical vulnerabilities** without proof of concept

## 🏅 Recognition

We believe in recognizing security researchers who help improve our project:

### Hall of Fame

Security researchers who responsibly disclose vulnerabilities will be:

- **Credited in the security advisory** (unless they prefer to remain anonymous)
- **Listed in this document** (with their permission)
- **Mentioned in release notes** for the fix

### Responsible Disclosure Agreement

By reporting a vulnerability, you agree to:

1. **Give us reasonable time** to fix the issue before public disclosure
2. **Not exploit the vulnerability** beyond what's necessary to demonstrate it
3. **Not access, modify, or delete** data that doesn't belong to you
4. **Keep the vulnerability confidential** until we've patched it

We agree to:

1. **Respond promptly** to your report
2. **Keep you informed** of our progress
3. **Credit you appropriately** (if desired)
4. **Not take legal action** against you if you follow this policy

## 📚 Additional Resources

### Security Learning Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Most critical web security risks
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security) - Web security best practices
- [Google's Web Fundamentals Security](https://developers.google.com/web/fundamentals/security) - Security guidelines
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) - CSP documentation

### Tools for Security Testing

- [OWASP ZAP](https://www.zaproxy.org/) - Web application security scanner
- [DOMPurify](https://github.com/cure53/DOMPurify) - XSS sanitizer for HTML
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Security audit tool

## 📞 Contact

For security-related questions that are not vulnerability reports:

- Create a public issue with the `security-question` label
- Start a discussion in the GitHub Discussions (if enabled)

For vulnerability reports, please use the reporting methods described above.

## 📜 Policy Updates

This security policy may be updated periodically to reflect changes in our security practices or project scope. Major changes will be announced in the repository.

**Last Updated:** January 2026

---

Thank you for helping keep HciLab-workbench and its users safe! 🛡️
