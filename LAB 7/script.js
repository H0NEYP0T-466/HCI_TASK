document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    function updateActiveLink() {
        const sections = document.querySelectorAll('section, footer#contact');
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        let current = '';
        const offset = 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            if (scrollPos >= top - offset) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
    }, observerOptions);
    const animateElements = document.querySelectorAll('.course-card, .strength-card, .skill-badge, .education-main-card');
    animateElements.forEach(element => observer.observe(element));
});