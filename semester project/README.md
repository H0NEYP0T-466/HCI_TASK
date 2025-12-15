# Final Semester Project Documentation

This directory contains the comprehensive documentation for the HCI Final Semester Project, formatted according to Lahore Garrison University's handbook requirements.

## 📁 Contents

- **Project_Report.md** - Main project report (Chapters 1-9)
- **Final_Semester_Project_Handbook.md** - University handbook guidelines
- **diagrams/** - All project diagrams (Use Case, Architecture, Activity, Class, DFD)
- **brochure/** - One-page brochure for open house presentation
- **pandoc/** - Templates and styling files for PDF generation

## 🔧 Building the PDFs

### Prerequisites

1. **Install Pandoc** (version 2.x or higher)
   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install pandoc pandoc-citeproc
   
   # macOS
   brew install pandoc
   
   # Windows
   # Download installer from: https://pandoc.org/installing.html
   ```

2. **Install LaTeX** (for PDF generation with proper fonts)
   ```bash
   # Ubuntu/Debian
   sudo apt-get install texlive-xetex texlive-fonts-recommended texlive-fonts-extra
   
   # macOS
   brew install --cask mactex
   
   # Windows
   # Download MiKTeX from: https://miktex.org/download
   ```

3. **Install Required Fonts**
   - Times New Roman (body text)
   - Arial (headings)
   
   These fonts are typically pre-installed on Windows and macOS. For Linux:
   ```bash
   sudo apt-get install ttf-mscorefonts-installer
   sudo fc-cache -f
   ```

### Building the PDFs

Run the Makefile to generate all PDFs:

```bash
cd "semester project"
make all
```

Or build individual documents:

```bash
# Build project report only
make report

# Build handbook only
make handbook

# Clean generated files
make clean
```

### Output Files

After building, you'll find:
- `Project_Report.pdf` - Complete project documentation
- `Final_Semester_Project_Handbook.pdf` - Handbook guidelines

## ✅ Formatting Compliance

The PDFs are automatically formatted to meet LGU requirements:

### Page Layout
- **Paper Size**: A4 (210 × 297 mm)
- **Margins**: 1 inch (25.4 mm) all sides
- **Line Spacing**: 1.5 lines
- **Paragraph Spacing**: 6pt after, 12pt before headings
- **Text Alignment**: Justified

### Typography
- **Body Text**: Times New Roman, 12pt
- **Headings**: Arial, 14-16pt (varies by level)
- **Page Numbers**: Bottom center, Roman (i, ii, iii...) for preface, Arabic (1, 2, 3...) for main content

### Elements
- **Table Captions**: Above table, bold
- **Figure Captions**: Below figure, italic
- **Table of Contents**: Auto-generated from headings
- **References**: Alphabetically sorted, APA/IEEE style

## 🔍 Verification Checklist

Before submission, verify:

- [ ] All PDFs build without errors
- [ ] Fonts are correctly applied (Times New Roman for body, Arial for headings)
- [ ] Page numbering follows the scheme (Roman → Arabic)
- [ ] All diagrams are visible and properly captioned
- [ ] Table of Contents includes all sections
- [ ] References are formatted and sorted
- [ ] No orphaned headings (heading at bottom of page with content on next)
- [ ] Line spacing is 1.5 throughout
- [ ] File size is reasonable (< 20 MB)

## 📊 Diagrams

All diagrams are provided as SVG files for scalability and can be regenerated or modified:

- **Use Case Diagram**: Student portal user interactions
- **Architecture Diagram**: Client-side MVC structure
- **Activity Diagram**: Login and dashboard workflows
- **Class Diagram**: JavaScript component structure
- **Data Flow Diagram**: Data movement in the application

## 🎨 Customization

### Modifying Content

1. Edit the `.md` files with any text editor
2. Follow Markdown syntax for formatting
3. Reference diagrams using: `![Caption](diagrams/filename.svg)`
4. Rebuild PDFs using `make`

### Updating Templates

- **pandoc/template.tex** - LaTeX formatting rules
- **pandoc/custom-reference.docx** - Word document styling

### Troubleshooting

**Issue**: Fonts not rendering correctly
- **Solution**: Ensure Times New Roman and Arial are installed, run `fc-cache -f` on Linux

**Issue**: Build fails with "xelatex not found"
- **Solution**: Install full TeX Live distribution

**Issue**: Diagrams not appearing in PDF
- **Solution**: Check SVG file paths are correct, convert to PNG if needed

**Issue**: References not formatted correctly
- **Solution**: Verify bibliography format in Markdown, check pandoc-citeproc installation

## 📝 Technical Stack Context

The documented project is a **client-side web application** with:
- **CSS**: 38.9% (styling and responsive design)
- **HTML**: 30.7% (structure and templates)
- **JavaScript**: 30.4% (interactivity and logic)

This composition reflects a modern, front-end focused architecture without heavy backend frameworks.

## 👥 Author

**Student**: H0NEYP0T-466  
**Institution**: Lahore Garrison University  
**Course**: Human-Computer Interaction  
**Academic Year**: 2023-2024

## 📄 License

Educational project - All rights reserved to Lahore Garrison University.
