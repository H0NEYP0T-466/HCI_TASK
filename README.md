# HciLab-workbench

<p align="center">
  <img src="https://img.shields.io/github/license/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/github/stars/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Stars">
  <img src="https://img.shields.io/github/forks/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Forks">
  <img src="https://img.shields.io/github/issues/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Issues">
  <img src="https://img.shields.io/github/issues-pr/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Pull Requests">
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Last Commit">
  <img src="https://img.shields.io/github/commit-activity/m/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Commit Activity">
  <img src="https://img.shields.io/github/languages/top/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Top Language">
  <img src="https://img.shields.io/github/languages/count/H0NEYP0T-466/HciLab-workbench?style=for-the-badge" alt="Languages Count">
</p>

## 📄 Overview

A comprehensive Human-Computer Interaction (HCI) lab workbench containing multiple lab projects and a full-featured semester project. This repository showcases practical implementations of HCI principles, including a modern student portal with glassmorphism design, responsive layouts, and user-centered design patterns following Nielsen's heuristics.

**Quick Links:** [Issues](https://github.com/H0NEYP0T-466/HciLab-workbench/issues) | [Contributing](CONTRIBUTING.md) | [License](LICENSE)

---

## 📑 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Dependencies](#-dependencies)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)
- [Security](#-security)

---

## 🚀 Quick Start

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/H0NEYP0T-466/HciLab-workbench.git
   cd HciLab-workbench
   ```

2. **Run the project:**
   
   For the main semester project:
   ```bash
   cd "Semester Project"
   python3 -m http.server 8080
   ```
   Then open http://localhost:8080 in your browser.

   For individual labs, navigate to the respective lab directory and open `index.html` in your browser.

### Basic Usage

**Semester Project Login:**
- Roll Number: `fa-23-bscs-567` (or any format: `fa-YY-program-XXX`)
- Password: `12345`

The student portal includes:
- Dashboard with statistics
- Attendance tracking with visualizations
- Fee challan management
- Academic calendar
- Course enrollment viewer
- User profile management

---

## ✨ Features

- 🎨 **Modern UI/UX Design** - Glassmorphism effects, responsive layouts, and professional typography
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🔐 **Authentication System** - Roll number validation with localStorage session management
- 📊 **Data Visualization** - Interactive charts for attendance tracking using Chart.js
- 🎯 **HCI Principles** - Implements Nielsen's 10 usability heuristics
- 🌈 **Consistent Design System** - Unified color palette and component library
- ♿ **Accessibility** - Semantic HTML, ARIA labels, and keyboard navigation support
- 🚀 **Performance Optimized** - Minimal dependencies, efficient DOM manipulation
- 📝 **Multiple Lab Projects** - 7 lab exercises demonstrating various HCI concepts
- 🎓 **Educational Resource** - Complete documentation and implementation summaries

---

## 📂 Project Structure

```
HciLab-workbench/
├── 📁 LAB 1/                  # Lab 1 exercises
├── 📁 LAB 2/                  # Lab 2 exercises
├── 📁 LAB 4/                  # Lab 4 exercises
├── 📁 LAB 5/                  # Lab 5 exercises
├── 📁 LAB 6/                  # Lab 6 exercises
├── 📁 LAB 7/                  # Lab 7 exercises
├── 📁 LAB_Paper/              # Lab paper implementation
├── 📁 OEL/                    # Open-ended learning project
├── 📁 Semester Project/       # Main student portal project
│   ├── pages/                 # HTML pages (login, dashboard)
│   ├── components/            # JavaScript components
│   ├── styles/                # CSS stylesheets
│   ├── assets/                # Images and media files
│   ├── data.js                # Sample data
│   ├── app.js                 # Main application logic
│   └── index.html             # Entry point
├── 📁 semester project/       # Additional project files
├── 📁 shoaib/                 # Individual contributions
├── 📄 README.md               # This file
├── 📄 LICENSE                 # MIT License
├── 📄 CONTRIBUTING.md         # Contribution guidelines
├── 📄 SECURITY.md             # Security policy
└── 📄 CODE_OF_CONDUCT.md      # Code of conduct
```

---

## 🛠 Tech Stack

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Design & UI
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

### Data Visualization
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

### Development
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 📦 Dependencies

### Runtime Dependencies

![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.5.0-339AF0?style=for-the-badge&logo=fontawesome)
- **Purpose:** Icon library for UI elements
- **CDN:** `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`

![Chart.js](https://img.shields.io/badge/Chart.js-latest-FF6384?style=for-the-badge&logo=chartdotjs)
- **Purpose:** Interactive charts and data visualization
- **CDN:** `https://cdn.jsdelivr.net/npm/chart.js`

![Google Fonts](https://img.shields.io/badge/Google_Fonts-Inter_&_Roboto-4285F4?style=for-the-badge&logo=google)
- **Fonts Used:** Inter, Roboto
- **Purpose:** Professional typography

### Development Dependencies

This project uses vanilla HTML, CSS, and JavaScript with no build tools required. Simply open in a browser or use a simple HTTP server for development.

**Recommended Development Server:**
```bash
# Python 3
python3 -m http.server 8080

# Node.js (if installed)
npx http-server -p 8080
```

---

## 📚 Documentation

### Semester Project Features

The main semester project is a comprehensive student portal with the following features:

#### 🔐 Authentication
```javascript
// Roll number format: fa-YY-program-XXX
// Example: fa-23-bscs-567
// Password: 12345
```

#### 📊 Dashboard Components

1. **Stats Overview**
   - Current semester enrollment
   - Outstanding fee balance (with warning indicators)
   - CGPA display
   - Section information

2. **Attendance Tracking**
   - Visual chart representation
   - Detailed breakdown by course
   - Attendance percentage calculation

3. **Challan Management**
   - Fee payment history
   - Due dates and amounts
   - Payment status tracking

4. **Academic Calendar**
   - Important dates and deadlines
   - Event notifications
   - Semester milestones

5. **Course Management**
   - Enrolled courses list
   - Course details and schedules
   - Credit hour tracking

#### 🎨 Design System

**Color Palette:**
```css
--dark-green: #1E5E1E      /* Primary brand color */
--accent-green: #2E7D32    /* Secondary/accent color */
--white: #FFFFFF           /* Background and text */
--warning-color: #ff9800   /* For alerts and warnings */
--light-bg: #f8f9fa        /* Page background */
```

**Typography:**
- Primary: Inter (headings, UI elements)
- Secondary: Roboto (body text)

#### ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color combinations
- Focus indicators on interactive elements

### HCI Heuristics Implementation

This project implements Nielsen's 10 Usability Heuristics:

1. ✅ **Visibility of System Status** - Loading indicators, active states, notifications
2. ✅ **Match Between System and Real World** - Intuitive icons, real-world language
3. ✅ **User Control and Freedom** - Easy navigation, logout options, back buttons
4. ✅ **Consistency and Standards** - Unified design language throughout
5. ✅ **Error Prevention** - Form validation, confirmation dialogs
6. ✅ **Recognition Rather Than Recall** - Clear labels, visible options
7. ✅ **Flexibility and Efficiency of Use** - Keyboard shortcuts, hover effects
8. ✅ **Aesthetic and Minimalist Design** - Clean interface, no clutter
9. ✅ **Help Users Recognize, Diagnose, and Recover from Errors** - Clear error messages
10. ✅ **Help and Documentation** - Format hints, tooltips, examples

---

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of conduct
- Development process
- Pull request workflow
- Coding standards
- Testing requirements

**Quick Contribution Steps:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright (c) 2024 H0NEYP0T-466**

---

## 🛡 Security

Security is a priority for this project. If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md) to report it responsibly.

**Quick Summary:**
- 🚨 Do not report security issues publicly
- 📧 Use private vulnerability reporting or email
- ⏱️ We aim to respond within 48 hours
- 🔒 We coordinate disclosure timelines with reporters

---

## 🎓 Educational Context

This project was developed as part of the Human-Computer Interaction (HCI) course at Lahore Garrison University. It demonstrates:

- Practical application of HCI principles
- User-centered design methodology
- Responsive web development
- Accessibility best practices
- Modern web design patterns

---

## 📞 Contact & Support

- **Issues:** [GitHub Issues](https://github.com/H0NEYP0T-466/HciLab-workbench/issues)
- **Discussions:** [GitHub Discussions](https://github.com/H0NEYP0T-466/HciLab-workbench/discussions)
- **Security:** See [SECURITY.md](SECURITY.md)

---

<p align="center">
  Made with ❤️ for HCI Education
</p>

<p align="center">
  <sub>If you find this project helpful, please consider giving it a ⭐</sub>
</p>
