// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Language toggle
document.querySelector('.lang-toggle').addEventListener('change', function(e) {
    document.body.classList.toggle('arabic', e.target.value === 'ar');
    // Placeholder for full translation logic (requires backend or JSON files)
    if (e.target.value === 'ar') {
        document.querySelector('.hero h1').textContent = 'إتقان علم البيانات';
        document.querySelectorAll('.btn-primary')[0].textContent = 'تصفح الدورات';
        document.querySelectorAll('.btn-secondary')[0].textContent = 'تسوق الكتب الإلكترونية';
    } else {
        document.querySelector('.hero h1').textContent = 'Master Data Science';
        document.querySelectorAll('.btn-primary')[0].textContent = 'Browse Courses';
        document.querySelectorAll('.btn-secondary')[0].textContent = 'Shop E-Books';
    }
});

// Search functionality
document.querySelector('.search-input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.roadmap-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}! You'll receive exclusive Tynobo course updates and special offers.`);
    this.reset();
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email}.`);
    this.reset();
});

// Cart icon placeholder
document.querySelector('.cart-icon').addEventListener('click', function() {
    alert('Shopping cart functionality coming soon!');
});

// Intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.featured-card, .roadmap-card, .team-member').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Google Analytics (placeholder)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
