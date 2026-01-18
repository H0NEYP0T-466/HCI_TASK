# HCI_TASK

<p align="center">

  <!-- Core -->
  ![GitHub License](https://img.shields.io/github/license/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=brightgreen)  
  ![GitHub Stars](https://img.shields.io/github/stars/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=yellow)  
  ![GitHub Forks](https://img.shields.io/github/forks/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=blue)  
  ![GitHub Issues](https://img.shields.io/github/issues/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=red)  
  ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=orange)  
  ![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)  

  <!-- Activity -->
  ![Last Commit](https://img.shields.io/github/last-commit/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=purple)  
  ![Commit Activity](https://img.shields.io/github/commit-activity/m/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=teal)  
  ![Repo Size](https://img.shields.io/github/repo-size/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=blueviolet)  
  ![Code Size](https://img.shields.io/github/languages/code-size/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=indigo)  

  <!-- Languages -->
  ![Top Language](https://img.shields.io/github/languages/top/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=critical)  
  ![Languages Count](https://img.shields.io/github/languages/count/H0NEYP0T-466/HCI_TASK?style=for-the-badge&color=success)  

  <!-- Community -->
  ![Documentation](https://img.shields.io/badge/Docs-Available-green?style=for-the-badge&logo=readthedocs&logoColor=white)  
  ![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge)  

</p>

## 📝 Description

A comprehensive Human-Computer Interaction (HCI) course repository containing lab assignments, papers, and a complete semester project. The repository showcases practical implementations of HCI principles, including a modern student portal with glassmorphism design, responsive layouts, and user-centered interface patterns.

## 🔗 Quick Links

- [📖 Documentation](#-table-of-contents)
- [🐛 Report Bug](https://github.com/H0NEYP0T-466/HCI_TASK/issues/new?template=bug_report.yml)
- [💡 Request Feature](https://github.com/H0NEYP0T-466/HCI_TASK/issues/new?template=feature_request.yml)
- [🤝 Contributing](CONTRIBUTING.md)
- [🛡️ Security](SECURITY.md)

## 📑 Table of Contents

- [Description](#-description)
- [Quick Links](#-quick-links)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Folder Structure](#-folder-structure)
- [Tech Stack](#-tech-stack)
- [Dependencies & Packages](#-dependencies--packages)
- [Contributing](#-contributing)
- [License](#-license)
- [Security](#-security)
- [Code of Conduct](#-code-of-conduct)

## ✨ Features

### 🎓 Semester Project - Student Portal
- **Modern Glassmorphism UI**: Semi-transparent design with backdrop blur effects
- **Responsive Dashboard**: Hover-based expandable sidebar (72px → 260px)
- **Authentication System**: Roll number validation with session management
- **Interactive Components**: 
  - Real-time attendance tracking with Chart.js visualization
  - Fee challan management
  - Academic calendar integration
  - Course enrollment display
  - Student profile management
- **HCI Compliant Design**: Follows all 10 Nielsen's usability heuristics
- **Loading Animations**: Professional spinner and state feedback
- **Color Semantics**: Warning colors for outstanding fees, success for positive metrics

### 📚 Lab Assignments
- **Lab 1**: Introduction to HTML and CSS styling fundamentals
- **Lab 2**: Advanced CSS layouts and positioning techniques
- **Lab 4**: Interactive forms and user input handling
- **Lab 5**: Responsive design principles and media queries
- **Lab 6**: JavaScript fundamentals and DOM manipulation
- **Lab 7**: Advanced JavaScript interactions and event handling
- **Lab Paper**: Comprehensive HCI concepts and design patterns
- **OEL**: Online examination lab with interactive components

### 🎨 Design Highlights
- Consistent dark green branding (#1E5E1E)
- Professional typography (Inter, Roboto fonts)
- Icon-based navigation using Font Awesome 6.5.0
- Mobile-first responsive approach
- Accessibility considerations

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3.x (for local development server) or any HTTP server
- Git (for cloning the repository)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/H0NEYP0T-466/HCI_TASK.git
   cd HCI_TASK
   ```

2. **Run the Semester Project**
   ```bash
   cd "Semester Project"
   python3 -m http.server 8080
   ```
   Then open your browser to: `http://localhost:8080`

3. **Alternative: Direct File Access**
   
   Navigate to any lab folder or the Semester Project folder and open `index.html` directly in your browser.

### Login Credentials (Semester Project)

- **Roll Number Format**: `fa-YY-program-XXX` (e.g., `fa-23-bscs-567`)
- **Password**: `12345`

## ⚡ Usage

### Running Individual Labs

Each lab is self-contained. Navigate to the specific lab directory and open `index.html`:

```bash
# Example: Running Lab 7
cd "LAB 7"
python3 -m http.server 8000
```

### Semester Project Features

1. **Login**: Enter credentials in the format specified above
2. **Dashboard Navigation**: Use the hover-based sidebar to access different sections
3. **View Attendance**: Check attendance statistics with visual charts
4. **Check Fees**: Review challan history and outstanding payments
5. **Course Management**: View enrolled courses and schedules
6. **Profile**: Access and review student information

### Development

To modify or extend the project:

1. Edit HTML files for structure changes
2. Modify CSS files in the `styles/` directory for styling
3. Update JavaScript in `components/` or root-level JS files for functionality
4. Test changes across different browsers and devices

## 📂 Folder Structure

```
HCI_TASK/
├── LAB 1/                      # Basic HTML/CSS introduction
│   ├── index.html
│   ├── styles.css
│   └── New Text Document.txt
├── LAB 2/                      # Advanced CSS layouts
│   ├── index.html
│   └── style.css
├── LAB 4/                      # Forms and user input
│   ├── index.html
│   └── style.css
├── LAB 5/                      # Responsive design
│   ├── index.html
│   └── style.css
├── LAB 6/                      # JavaScript fundamentals
│   ├── index.html
│   ├── script.js
│   └── style.css
├── LAB 7/                      # Advanced JavaScript
│   ├── index.html
│   ├── script.js
│   └── style.css
├── LAB_Paper/                  # HCI concepts lab
│   ├── index.html
│   ├── script.js
│   └── style.css
├── OEL/                        # Online examination lab
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Semester Project/           # Main student portal application
│   ├── pages/                  # HTML pages
│   │   ├── login.html
│   │   └── dashboard.html
│   ├── components/             # JavaScript modules
│   │   └── dashboard.js
│   ├── styles/                 # CSS stylesheets
│   │   ├── login.css
│   │   └── dashboard.css
│   ├── assets/                 # Images and media
│   │   ├── lgu.png
│   │   └── blur_login_img.jpg
│   ├── data.js                 # Sample data
│   ├── app.js                  # Main application logic
│   ├── index.html              # Entry point
│   ├── login.html              # Legacy redirect
│   ├── styles.css              # Global styles
│   ├── README.md               # Project-specific documentation
│   ├── IMPLEMENTATION_SUMMARY.md
│   └── IMPLEMENTATION_CHECKLIST.md
├── semester project/           # Additional project resources
│   ├── README.md
│   └── Project_Report.md
├── shoaib/                     # Additional resources
│   └── index.html
├── group#12.rar                # Archived project files
├── README.md                   # This file
├── LICENSE                     # MIT License
├── CONTRIBUTING.md             # Contribution guidelines
├── SECURITY.md                 # Security policy
└── CODE_OF_CONDUCT.md          # Code of conduct
```

## 🛠 Tech Stack

### Languages
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

### Libraries & Frameworks
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

### Design & Fonts
![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

### Development Tools
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

### Browser Support
![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoftedge&logoColor=white)

## 📦 Dependencies & Packages

This project is built with vanilla HTML, CSS, and JavaScript with external CDN resources. No package manager or build tools are required.

### Runtime Dependencies (CDN)

<details>
<summary><b>External Libraries</b></summary>

- **[Chart.js](https://www.chartjs.org/)** - Simple yet flexible JavaScript charting library for data visualization
  ![Chart.js](https://img.shields.io/badge/Chart.js-v3.x-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

- **[Font Awesome](https://fontawesome.com/)** v6.5.0 - Icon library for UI elements
  ![Font Awesome](https://img.shields.io/badge/Font%20Awesome-v6.5.0-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

- **[Google Fonts](https://fonts.google.com/)** - Web fonts (Inter, Roboto)
  ![Google Fonts](https://img.shields.io/badge/Inter%20%26%20Roboto-4285F4?style=for-the-badge&logo=google&logoColor=white)

</details>

### Dev Dependencies

No build tools, bundlers, or development dependencies required. This project uses pure HTML/CSS/JavaScript for maximum compatibility and ease of deployment.

**Note**: All external resources are loaded via CDN, ensuring the project remains lightweight with no local dependencies to install or maintain.

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛡 Security

We take security seriously. If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md) for responsible disclosure.

## 📏 Code of Conduct

This project adheres to the Contributor Covenant [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

<p align="center">Made with ❤️ by H0NEYP0T-466</p>
<p align="center">⭐ Star this repository if you find it helpful!</p>
