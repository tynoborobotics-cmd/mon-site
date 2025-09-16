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

// Search functionality (enhanced to highlight matches)
document.querySelector('.search-input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.roadmap-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        if (query === '' || text.includes(query)) {
            card.style.display = 'block';
            // Highlight matching text (placeholder; requires more advanced implementation for production)
            if (query !== '') {
                card.style.borderColor = 'var(--accent-green)';
            } else {
                card.style.borderColor = 'rgba(0, 212, 255, 0.3)';
            }
        } else {
            card.style.display = 'none';
        }
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

// Simple cart functionality (local storage based)
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const item = {
            id: this.closest('.roadmap-card').dataset.id,
            type: this.closest('.roadmap-card').dataset.type,
            name: this.dataset.name,
            price: parseFloat(this.dataset.price)
        };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${item.name} added to cart for $${item.price}!`);
    });
});

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cart.length;
}

document.querySelector('.cart-icon').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        let cartSummary = 'Your Cart:\n';
        let total = 0;
        cart.forEach(item => {
            cartSummary += `${item.name} - $${item.price}\n`;
            total += item.price;
        });
        cartSummary += `\nTotal: $${total.toFixed(2)}`;
        alert(cartSummary);
        // Placeholder for checkout: In production, redirect to checkout page
    }
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

document.querySelectorAll('.featured-card, .roadmap-card, .team-member, .blog-post').forEach(card => {
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
