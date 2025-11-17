// ================================================
// NAVIGATION TOGGLE FUNCTIONALITY
// ================================================

/**
 * Toggle the navigation menu on mobile devices
 * Adds smooth slide-down animation with CSS transitions
 */
function initNavToggle() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Toggle 'active' class to show/hide menu
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const lines = navToggle.querySelectorAll('.hamburger-line');
            lines.forEach((line, index) => {
                if (navMenu.classList.contains('active')) {
                    // Transform to X shape
                    if (index === 0) {
                        line.style.transform = 'rotate(45deg) translateY(8px)';
                    } else if (index === 1) {
                        line.style.opacity = '0';
                    } else if (index === 2) {
                        line.style.transform = 'rotate(-45deg) translateY(-8px)';
                    }
                } else {
                    // Reset to hamburger shape
                    line.style.transform = '';
                    line.style.opacity = '1';
                }
            });
        });
        
        // Close menu when clicking on a link (mobile)
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    // Reset hamburger icon
                    const lines = navToggle.querySelectorAll('.hamburger-line');
                    lines.forEach(line => {
                        line.style.transform = '';
                        line.style.opacity = '1';
                    });
                }
            });
        });
    }
}

// ================================================
// FORM VALIDATION FUNCTIONALITY
// ================================================

/**
 * Validate a single form field
 * @param {HTMLElement} input - The input element to validate
 * @param {HTMLElement} errorElement - The error message element
 * @returns {boolean} - True if valid, false otherwise
 */
function validateField(input, errorElement) {
    const value = input.value.trim();
    const fieldName = input.id;
    
    // Clear previous error state
    input.classList.remove('error');
    input.classList.remove('valid');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
    
    // Check if field is empty
    if (value === '') {
        showError(input, errorElement, 'This field is required');
        return false;
    }
    
    // Email-specific validation
    if (fieldName === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(input, errorElement, 'Please enter a valid email address');
            return false;
        }
    }
    
    // If all validations pass, show success state
    input.classList.add('valid');
    return true;
}

/**
 * Display error message and apply error styling
 * @param {HTMLElement} input - The input element
 * @param {HTMLElement} errorElement - The error message element
 * @param {string} message - The error message to display
 */
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
    
    // Add shake animation
    input.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
        input.style.animation = '';
    }, 300);
}

/**
 * Display success message after successful form submission
 * @param {HTMLElement} successMessage - The success message element
 */
function showSuccessMessage(successMessage) {
    successMessage.classList.add('show');
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

/**
 * Reset all form fields to their initial state
 * @param {HTMLFormElement} form - The form element
 */
function resetForm(form) {
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.classList.remove('valid', 'error');
    });
    form.reset();
}

/**
 * Initialize form validation
 */
function initFormValidation() {
    const form = document.getElementById('feedbackForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!form) return;
    
    // Get form fields and error elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentsInput = document.getElementById('comments');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const commentsError = document.getElementById('commentsError');
    
    // Real-time validation on blur (when user leaves the field)
    nameInput.addEventListener('blur', () => validateField(nameInput, nameError));
    emailInput.addEventListener('blur', () => validateField(emailInput, emailError));
    commentsInput.addEventListener('blur', () => validateField(commentsInput, commentsError));
    
    // Real-time validation on input (as user types)
    nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('error')) {
            validateField(nameInput, nameError);
        }
    });
    
    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('error')) {
            validateField(emailInput, emailError);
        }
    });
    
    commentsInput.addEventListener('input', () => {
        if (commentsInput.classList.contains('error')) {
            validateField(commentsInput, commentsError);
        }
    });
    
    // Form submission handler
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Validate all fields
        const isNameValid = validateField(nameInput, nameError);
        const isEmailValid = validateField(emailInput, emailError);
        const isCommentsValid = validateField(commentsInput, commentsError);
        
        // Check if all fields are valid
        if (isNameValid && isEmailValid && isCommentsValid) {
            // All fields are valid - show success message
            console.log('Form submitted successfully!');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Comments:', commentsInput.value);
            
            // Show success message with animation
            showSuccessMessage(successMessage);
            
            // Reset form after successful submission
            setTimeout(() => {
                resetForm(form);
            }, 1000);
        } else {
            // Form has errors - prevent submission
            console.log('Form has errors. Please fix them before submitting.');
            
            // Focus on the first error field
            if (!isNameValid) {
                nameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            } else if (!isCommentsValid) {
                commentsInput.focus();
            }
        }
    });
}

// ================================================
// INITIALIZE ALL FUNCTIONALITY ON PAGE LOAD
// ================================================

/**
 * Main initialization function
 * Called when the DOM is fully loaded
 */
function init() {
    console.log('Initializing Feedback Form Application...');
    
    // Initialize navigation toggle
    initNavToggle();
    console.log('Navigation toggle initialized');
    
    // Initialize form validation
    initFormValidation();
    console.log('Form validation initialized');
    
    console.log('Application ready!');
}

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}

// ================================================
// ADDITIONAL ENHANCEMENTS
// ================================================

/**
 * Add smooth scroll behavior for navigation links
 */
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav-link')) {
        const href = event.target.getAttribute('href');
        if (href && href.startsWith('#')) {
            event.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
});
