// ===========================
// Global Variables
// ===========================
let currentSection = 'overview';

// ===========================
// Password Toggle Functionality
// ===========================
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// ===========================
// Login Form Handler
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const studentId = document.getElementById('studentId').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Validation
            if (studentId.trim() === '' || password.trim() === '') {
                showNotification('Please fill in all fields', 'warning');
                return;
            }
            
            // Simulate login
            showNotification('Logging in...', 'info');
            
            setTimeout(function() {
                // Store user info (in real app, this would be done securely)
                if (rememberMe) {
                    localStorage.setItem('studentId', studentId);
                }
                
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            }, 1000);
        });
    }
});

// ===========================
// Dashboard Section Navigation
// ===========================
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Update active menu item
    const menuItems = document.querySelectorAll('.sidebar-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Find and activate the clicked menu item
    const activeMenuItem = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active');
    }
    
    currentSection = sectionId;
    
    // Save current section to session storage
    sessionStorage.setItem('currentSection', sectionId);
}

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `custom-notification notification-${type}`;
    
    // Set icon based on type
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';
    if (type === 'danger') icon = 'fa-times-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just # or JavaScript:void
            if (href === '#' || href.startsWith('javascript:')) {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===========================
// Load User Data (Dashboard)
// ===========================
function loadUserData() {
    const studentId = localStorage.getItem('studentId') || 'LGU-2021-CS-001';
    const userName = 'John Doe';
    
    // Update user name in navbar
    const userDropdown = document.getElementById('userDropdown');
    if (userDropdown) {
        userDropdown.innerHTML = `<i class="fas fa-user-circle"></i> ${userName}`;
    }
}

// ===========================
// Initialize Dashboard
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the dashboard page
    if (document.querySelector('.dashboard-body')) {
        loadUserData();
        
        // Restore last viewed section
        const lastSection = sessionStorage.getItem('currentSection');
        if (lastSection) {
            showSection(lastSection);
        }
    }
});

// ===========================
// Grade Calculator
// ===========================
function calculateGPA(grades) {
    const gradePoints = {
        'A+': 4.0,
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.3,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.3,
        'C': 2.0,
        'C-': 1.7,
        'D': 1.0,
        'F': 0.0
    };
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    grades.forEach(grade => {
        const points = gradePoints[grade.grade] || 0;
        totalPoints += points * grade.credits;
        totalCredits += grade.credits;
    });
    
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0.00;
}

// ===========================
// Attendance Calculator
// ===========================
function calculateAttendance(present, total) {
    if (total === 0) return 0;
    return ((present / total) * 100).toFixed(1);
}

// ===========================
// Search Functionality
// ===========================
function searchCourses(query) {
    query = query.toLowerCase().trim();
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const courseName = card.querySelector('.course-header h4').textContent.toLowerCase();
        const courseCode = card.querySelector('.course-code').textContent.toLowerCase();
        
        if (courseName.includes(query) || courseCode.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===========================
// Date Formatter
// ===========================
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// ===========================
// Time Formatter
// ===========================
function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleTimeString('en-US', options);
}

// ===========================
// Add Notification Styles Dynamically
// ===========================
(function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .custom-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            gap: 1rem;
            z-index: 9999;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            min-width: 300px;
        }
        
        .custom-notification.show {
            opacity: 1;
            transform: translateX(0);
        }
        
        .custom-notification i {
            font-size: 1.5rem;
        }
        
        .notification-info {
            border-left: 4px solid #3b82f6;
        }
        
        .notification-info i {
            color: #3b82f6;
        }
        
        .notification-success {
            border-left: 4px solid #10b981;
        }
        
        .notification-success i {
            color: #10b981;
        }
        
        .notification-warning {
            border-left: 4px solid #f59e0b;
        }
        
        .notification-warning i {
            color: #f59e0b;
        }
        
        .notification-danger {
            border-left: 4px solid #ef4444;
        }
        
        .notification-danger i {
            color: #ef4444;
        }
        
        @media (max-width: 576px) {
            .custom-notification {
                top: 10px;
                right: 10px;
                left: 10px;
                min-width: auto;
            }
        }
    `;
    document.head.appendChild(style);
})();

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main-header');
    const currentScroll = window.pageYOffset;
    
    if (navbar) {
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Mobile Menu Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            const navbarNav = document.querySelector('#navbarNav');
            if (navbarNav) {
                navbarNav.classList.toggle('show');
            }
        });
    }
});

// ===========================
// Print Transcript Functionality
// ===========================
function printTranscript() {
    window.print();
}

// ===========================
// Export Data to CSV
// ===========================
function exportToCSV(data, filename) {
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

function convertToCSV(data) {
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[header]));
    
    return [
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');
}

// ===========================
// Animation on Scroll
// ===========================
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .announcement-card, .quick-link-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ===========================
// Console Message
// ===========================
console.log('%cLGU Student Portal', 'color: #1e3a8a; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to Lahore Garrison University Student Portal', 'color: #3b82f6; font-size: 14px;');
console.log('%cVersion 1.0.0', 'color: #6b7280; font-size: 12px;');
