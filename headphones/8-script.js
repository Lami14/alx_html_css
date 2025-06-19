// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.querySelector('.nav-links');
    const menuBackdrop = document.createElement('div');
    
    // Create backdrop element
    menuBackdrop.classList.add('menu-backdrop');
    document.body.appendChild(menuBackdrop);
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        menuBackdrop.classList.toggle('active');
        
        // Toggle body scroll
        document.body.classList.toggle('no-scroll', navLinks.classList.contains('active'));
    });
    
    // Close menu when clicking on backdrop
    menuBackdrop.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
        this.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            menuBackdrop.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Show success message
                alert(`Thank you, ${name}! Your message has been sent successfully.`);
                
                // Reset form
                contactForm.reset();
                
                // Add visual feedback
                const button = document.querySelector('.form-button');
                button.textContent = 'Message Sent!';
                button.style.backgroundColor = '#4CAF50';
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    button.textContent = 'Send Message';
                    button.style.backgroundColor = '';
                }, 2000);
            }
        });
    }
    
    // Add focus/blur effects for form inputs
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        
        if (input) {
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });
        }
    });
});