// Date and Time
function updateTime() {
    const dt = document.getElementById('current-datetime');
    if (dt) dt.innerText = new Date().toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// FAQ Logic
const questions = document.querySelectorAll('.faq-question');
questions.forEach(q => {
    q.onclick = () => {
        const item = q.parentElement;
        item.classList.toggle('active');
        
        // Close other FAQs
        questions.forEach(other => {
            if (other !== q) other.parentElement.classList.remove('active');
        });
    };
});

// 3. Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        
        // Add class to show red/green colors
        this.classList.add('was-validated');

        // Check if all fields are filled
        if (this.checkValidity()) {
            const name = document.getElementById('name').value;
            alert("Thank you " + name + "! Your message has been sent."); 
            
            this.reset(); // Clear form
            this.classList.remove('was-validated'); // Remove colors
        }
    };
}
