# HciLab-workbench

<p align="center">

  <!-- Core -->
  ![GitHub License](https://img.shields.io/github/license/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=brightgreen)  
  ![GitHub Stars](https://img.shields.io/github/stars/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=yellow)  
  ![GitHub Forks](https://img.shields.io/github/forks/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=blue)  
  ![GitHub Issues](https://img.shields.io/github/issues/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=red)  
  ![GitHub Pull Requests](https://img.shields.io/github/issues-pr/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=orange)  
  ![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=for-the-badge)  

  <!-- Activity -->
  ![Last Commit](https://img.shields.io/github/last-commit/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=purple)  
  ![Commit Activity](https://img.shields.io/github/commit-activity/m/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=teal)  
  ![Repo Size](https://img.shields.io/github/repo-size/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=blueviolet)  
  ![Code Size](https://img.shields.io/github/languages/code-size/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=indigo)  

  <!-- Languages -->
  ![Top Language](https://img.shields.io/github/languages/top/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=critical)  
  ![Languages Count](https://img.shields.io/github/languages/count/H0NEYP0T-466/HciLab-workbench?style=for-the-badge&color=success)  

  <!-- Community -->
  ![Documentation](https://img.shields.io/badge/Docs-Available-green?style=for-the-badge&logo=readthedocs&logoColor=white)  
  ![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=for-the-badge)  

</p>

## 📖 About

A comprehensive collection of Human-Computer Interaction (HCI) lab assignments and semester projects developed for the HCI course at Lahore Garrison University. This workbench showcases practical implementations of HCI principles, including usability heuristics, responsive design, and user interface best practices using modern web technologies.

## 🔗 Links

- 🐛 [Report Issues](https://github.com/H0NEYP0T-466/HciLab-workbench/issues)
- 🤝 [Contributing Guidelines](./CONTRIBUTING.md)
- 📜 [License](./LICENSE)
- 🛡️ [Security Policy](./SECURITY.md)
- 📏 [Code of Conduct](./CODE_OF_CONDUCT.md)

## 📑 Table of Contents

- [About](#-about)
- [Links](#-links)
- [Installation](#-installation)
- [Usage](#-usage)
- [Features](#-features)
- [Folder Structure](#-folder-structure)
- [Tech Stack](#-tech-stack)
- [Dependencies & Packages](#-dependencies--packages)
- [Contributing](#-contributing)
- [License](#-license)
- [Security](#-security)
- [Code of Conduct](#-code-of-conduct)

## 🚀 Installation

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of HTML, CSS, and JavaScript
- Optional: Python 3.x or Node.js for running a local web server

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/H0NEYP0T-466/HciLab-workbench.git
   cd HciLab-workbench
   ```

2. **Run a local web server (recommended)**
   
   Using Python:
   ```bash
   python3 -m http.server 8080
   ```
   
   Using Node.js (if you have `http-server` installed):
   ```bash
   npx http-server -p 8080
   ```

3. **Open in browser**
   
   Navigate to `http://localhost:8080` in your web browser.

4. **Or open files directly**
   
   You can also open individual HTML files directly in your browser by navigating to specific lab folders.

## ⚡ Usage

### Exploring Lab Assignments

Each lab folder contains standalone HTML/CSS/JavaScript projects that demonstrate specific HCI concepts:

```bash
# Navigate to a specific lab
cd "LAB 7"
# Open index.html in your browser
```

### Running the Semester Project

The semester project is a complete student portal application:

1. Navigate to the Semester Project folder:
   ```bash
   cd "Semester Project"
   python3 -m http.server 8080
   ```

2. Open `http://localhost:8080` in your browser

3. **Login Credentials:**
   - Roll Number: `fa-23-bscs-567` (format: `fa-YY-program-XXX`)
   - Password: `12345`

### Project Structure Navigation

- **LAB 1-7**: Individual lab assignments focusing on specific HCI principles
- **Semester Project**: Comprehensive student portal with authentication and dashboard
- **OEL**: Online Examination Lab assignments
- **LAB_Paper**: Additional lab paper implementations

## ✨ Features

### 🎯 Core HCI Implementations

- **Usability Heuristics**: Implementations following Nielsen's 10 usability heuristics
- **Responsive Design**: Mobile-first, adaptive layouts for all screen sizes
- **Accessibility**: WCAG-compliant color schemes and semantic HTML
- **User Feedback**: Loading states, animations, and real-time validation
- **Consistency**: Unified design language across all projects

### 🎨 Design Features

- **Glassmorphism UI**: Modern semi-transparent card designs with backdrop blur
- **Interactive Components**: Hover effects, transitions, and smooth animations
- **Icon Integration**: Font Awesome icons for enhanced visual communication
- **Data Visualization**: Chart.js integration for attendance and analytics
- **Color Theory**: Semantic color usage (warnings in orange, success in green)

### 💡 Semester Project Highlights

- **Authentication System**: Roll number validation and session management
- **Dynamic Dashboard**: Stats overview, attendance tracking, fee challans
- **Hover-based Navigation**: Expandable sidebar (72px → 260px on hover)
- **Notification System**: Slide-in notifications with proper animations
- **Profile Management**: Student information display and editing
- **Academic Calendar**: Important dates and events tracking

## 📂 Folder Structure

```
HciLab-workbench/
├── LAB 1/                     # Lab 1 assignments
├── LAB 2/                     # Lab 2 assignments
│   ├── index.html
│   └── style.css
├── LAB 4/                     # Lab 4 assignments
│   ├── index.html
│   └── style.css
├── LAB 5/                     # Lab 5 assignments
│   ├── index.html
│   └── style.css
├── LAB 6/                     # Lab 6 assignments
├── LAB 7/                     # Lab 7 assignments
│   ├── assets/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── LAB_Paper/                 # Additional lab paper implementations
│   ├── index.html
│   ├── script.js
│   └── style.css
├── OEL/                       # Online Examination Lab
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Semester Project/          # Main semester project
│   ├── components/            # JavaScript components
│   │   └── dashboard.js
│   ├── pages/                 # HTML pages
│   │   ├── login.html
│   │   └── dashboard.html
│   ├── styles/                # CSS stylesheets
│   │   ├── login.css
│   │   └── dashboard.css
│   ├── assets/                # Images and media
│   │   ├── lgu.png
│   │   └── blur_login_img.jpg
│   ├── app.js                 # Main application logic
│   ├── data.js                # Sample data
│   ├── index.html             # Entry point
│   ├── login.html             # Login redirect
│   ├── styles.css             # Global styles
│   └── README.md              # Project documentation
├── semester project/          # Alternative semester project
│   ├── README.md
│   └── Project_Report.md
├── shoaib/                    # Additional assignments
│   └── index.html
├── group#12.rar               # Archived group work
├── README.md                  # This file
├── LICENSE                    # MIT License
├── CONTRIBUTING.md            # Contribution guidelines
├── SECURITY.md                # Security policy
└── CODE_OF_CONDUCT.md         # Code of conduct
```

## 🛠 Tech Stack

### Languages

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

### Frameworks & Libraries

![Font Awesome](https://img.shields.io/badge/Font%20Awesome-%23339AF0.svg?style=for-the-badge&logo=fontawesome&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-%23FF6384.svg?style=for-the-badge&logo=chartdotjs&logoColor=white)

### Tools & Services

![Google Fonts](https://img.shields.io/badge/Google%20Fonts-%234285F4.svg?style=for-the-badge&logo=google&logoColor=white)
![Git](https://img.shields.io/badge/Git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-%23181717.svg?style=for-the-badge&logo=github&logoColor=white)

### Design & UI

![Glassmorphism](https://img.shields.io/badge/Glassmorphism-%2300D9FF.svg?style=for-the-badge)
![Responsive Design](https://img.shields.io/badge/Responsive%20Design-%2338B2AC.svg?style=for-the-badge)
![CSS Animations](https://img.shields.io/badge/CSS%20Animations-%231572B6.svg?style=for-the-badge)

## 📦 Dependencies & Packages

This project uses primarily CDN-based libraries with no package manager dependencies. All external libraries are loaded via CDN links in the HTML files.

### Runtime Dependencies (CDN)

<details>
<summary>Click to expand</summary>

![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.5.0-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)  
**Font Awesome v6.5.0** - Icon toolkit for UI elements  
CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css`

![Chart.js](https://img.shields.io/badge/Chart.js-latest-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)  
**Chart.js** - Data visualization library for attendance charts  
CDN: Loaded via CDN in dashboard component

![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Inter%20%26%20Roboto-4285F4?style=for-the-badge&logo=google&logoColor=white)  
**Google Fonts (Inter & Roboto)** - Typography for professional look  
CDN: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap`

</details>

### Dev Dependencies

No build tools or development dependencies are required. This is a vanilla HTML/CSS/JavaScript project.

> **Note:** This project follows a minimal dependency approach with no package.json or build system. All libraries are loaded via CDN to keep the project lightweight and easily deployable.

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](./CONTRIBUTING.md) before submitting pull requests.

### Quick Start

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For more details, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🛡 Security

We take security seriously. If you discover a security vulnerability, please follow our [Security Policy](./SECURITY.md) to report it responsibly.

## 📏 Code of Conduct

This project adheres to the Contributor Covenant [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

---

<p align="center">Made with ❤️ by H0NEYP0T-466</p>
