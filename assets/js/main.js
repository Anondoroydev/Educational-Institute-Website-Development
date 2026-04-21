document.addEventListener('DOMContentLoaded', () => {

    // 1. Current Date & Time Update
    const datetimeElement = document.getElementById('current-datetime');
    if (datetimeElement) {
        const updateDateTime = () => {
            const now = new Date();
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            datetimeElement.textContent = now.toLocaleString('en-US', options);
        };
        updateDateTime(); // Initial call
        setInterval(updateDateTime, 1000); // Update every second
    }

    // 2. FAQ Collapsible Logic (Vanilla JS)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;
            const answer = currentItem.querySelector('.faq-answer');
            
            // Toggle active class on item
            currentItem.classList.toggle('active');

            if (currentItem.classList.contains('active')) {
                // If opening, set max-height to scrollHeight
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                // If closing, set max-height to 0
                answer.style.maxHeight = "0";
            }

            // Optional: Close other FAQs (Accordion style)
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherItem.classList.remove('active');
                    otherAnswer.style.maxHeight = "0";
                }
            });
        });
    });

    // 3. Contact Form Confirmation Popup
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission for demo
            
            // Show confirmation popup
            const nameInput = document.getElementById('name').value;
            alert(`Thank you, ${nameInput}! Your message has been successfully submitted. We will get back to you shortly.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // 4. Dark Mode Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update toggle icon if it exists
        updateToggleIcon(newTheme);
    };

    const updateToggleIcon = (theme) => {
        const icon = document.querySelector('#theme-toggle i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);

    // 5. Navbar Scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

});
