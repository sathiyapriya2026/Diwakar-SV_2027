/**
 * script.js - Global Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Library Management System initialized.');

    // 1. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Add scroll effect to navbar (glassmorphism enhancement)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.style.background = 'rgba(255, 255, 255, 0.8)';
                navbar.style.backdropFilter = 'blur(12px)';
                navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.7)'; // Default glass
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 3. Simple Form Validation Utility
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // Prevent default submission on mock pages
            e.preventDefault();
            
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500'); // Assuming utility class exists or style added
                    field.style.borderColor = 'var(--danger)';
                    
                    // Simple shake animation
                    field.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-5px)' },
                        { transform: 'translateX(5px)' },
                        { transform: 'translateX(0)' }
                    ], { duration: 300 });
                } else {
                    field.style.borderColor = ''; // Reset
                }
            });

            if (isValid) {
                // If it's a login form, redirect to dashboard
                if(form.id === 'login-form') {
                    const btn = form.querySelector('button[type="submit"]');
                    const originalText = btn.innerHTML;
                    btn.innerHTML = `<span class="flex items-center gap-2"><svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Logging in...</span>`;
                    
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1000);
                }
            }
        });
    });
});
