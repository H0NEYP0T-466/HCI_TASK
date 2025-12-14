# Student Portal - Semester Project

A modern, responsive student portal built with clean HTML, CSS, and JavaScript following HCI best practices.

## 📁 Project Structure

```
Semester Project/
├── pages/                  # HTML pages
│   ├── login.html         # Login page with glassmorphism design
│   └── dashboard.html     # Main dashboard page
├── components/            # JavaScript components
│   └── dashboard.js       # Dashboard logic and interactivity
├── styles/               # CSS stylesheets
│   ├── login.css         # Login page styles
│   └── dashboard.css     # Dashboard styles
├── assets/               # Images and media
│   ├── lgu.png          # University logo
│   └── blur_login_img.jpg # Background image
├── data.js              # Sample data for the application
├── index.html           # Entry point (redirects to appropriate page)
└── login.html           # Legacy redirect to pages/login.html
```

## 🎨 Design Features

### Login Page
- **Glassmorphism Design**: Semi-transparent card with backdrop blur
- **Blurred Background**: Beautiful campus image as background
- **Dark Green Accent**: 4px top bar matching university branding
- **Loading Animation**: Realistic spinner and text change on login
- **Responsive Layout**: Works on all screen sizes
- **Professional Typography**: Inter/Roboto fonts

### Dashboard
- **Hover-based Sidebar**: Hidden by default (72px), expands to 260px on hover
- **Responsive Layout**: Content adjusts when sidebar expands (no overlap)
- **Notification Card**: Proper notification system with slide-in animation
- **Icon-based Stats**: Visual indicators for key metrics
- **Consistent Color Scheme**: White and green theme throughout

## 🎯 HCI Improvements

### Fixed Heuristic Violations
1. **Color Semantics**: Outstanding fee now uses warning color (orange) instead of green
   - Matches real-world expectation: debts/outstanding amounts should look alerting
   - Green was misleading as it suggests something positive

2. **Match Between System and Real World**
   - Warning triangle icon for outstanding fees
   - Calendar icon for semester enrollment
   - Graduation cap for CGPA
   - Users icon for section

3. **Consistency**
   - Unified white/green color palette
   - Consistent spacing and typography
   - Professional, academic design throughout

## 🚀 Getting Started

### Running the Application

1. **Using a simple HTTP server** (recommended):
   ```bash
   cd "Semester Project"
   python3 -m http.server 8080
   ```
   Then open: http://localhost:8080

2. **Or open directly**: Navigate to `index.html` in your browser

### Login Credentials

- **Roll Number Format**: `fa-YY-program-XXX` (e.g., `fa-23-bscs-567`)
- **Password**: `12345`

## 🎨 Color Palette

```css
--dark-green: #1E5E1E      /* Primary brand color */
--accent-green: #2E7D32    /* Secondary/accent color */
--white: #FFFFFF           /* Background and text */
--warning-color: #ff9800   /* For outstanding fees */
--light-bg: #f8f9fa       /* Page background */
```

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation with hover expand
- **Tablet**: Optimized grid layouts
- **Mobile**: Collapsible sidebar, stacked cards

## 🔧 Technical Details

### Technologies Used
- Pure HTML5, CSS3, JavaScript (ES6+)
- Google Fonts (Inter, Roboto)
- Font Awesome 6.5.0 for icons
- Chart.js for attendance visualization

### Performance Optimizations
- Specific CSS transitions (no `transition: all`)
- Optimized animations
- Efficient DOM manipulation
- Minimal dependencies

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Features

### Authentication
- Roll number validation with regex
- Password verification
- LocalStorage session management
- Auto-redirect on authentication state

### Dashboard Sections
1. **Stats Overview**: Semester, Outstanding, CGPA, Section
2. **Attendance**: Chart and detailed breakdown
3. **Challans**: Fee payment history
4. **Academic Calendar**: Important dates
5. **Courses**: Current enrollment
6. **Profile**: Student information

### Interactive Elements
- Hover-based sidebar navigation
- Click-to-open notifications
- Modal confirmations (logout)
- Loading states and feedback
- Route-based view switching

## 🏆 HCI Heuristics Compliance

✅ **Visibility of System Status**: Loading indicators, active states
✅ **Match Between System and Real World**: Intuitive icons and colors
✅ **User Control and Freedom**: Easy navigation, clear actions
✅ **Consistency and Standards**: Unified design language
✅ **Error Prevention**: Form validation, confirmations
✅ **Recognition Rather Than Recall**: Clear labels, icons
✅ **Flexibility and Efficiency**: Keyboard navigation, shortcuts
✅ **Aesthetic and Minimalist Design**: Clean, professional interface
✅ **Help Users with Errors**: Clear error messages
✅ **Help and Documentation**: Hints and format examples

## 👥 Credits

Developed as part of HCI course project for Lahore Garrison University.

## 📄 License

Educational project - All rights reserved.
