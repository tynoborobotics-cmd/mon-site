// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Theme toggle
document.querySelector('.theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    this.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Improved Search with debounce and better filtering
const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

document.querySelector('.search-input').addEventListener('input', debounce(function(e) {
    const query = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.roadmap-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        const matches = query === '' || text.includes(query);
        card.style.display = matches ? 'block' : 'none';
        if (matches && query !== '') {
            card.style.borderColor = 'var(--accent-green)';
        } else {
            card.style.borderColor = 'rgba(0, 212, 255, 0.3)';
        }
    });
}, 300));

// Newsletter form with validation
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    // Simulate API call
    console.log('Subscribed:', email);
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
});

// Contact form with validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !emailRegex.test(email) || !message) {
        alert('Please fill all fields correctly.');
        return;
    }
    // Simulate API call
    console.log('Contact:', { name, email, message });
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});

// Advanced Cart with remove and total
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart();

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
        updateCart();
        alert(`${item.name} added to cart for $${item.price}!`);
    });
});

function updateCart() {
    document.querySelector('.cart-count').textContent = cart.length;
}

document.querySelector('.cart-icon').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    let cartSummary = 'Your Cart:\n';
    let total = 0;
    cart.forEach((item, index) => {
        cartSummary += `${index + 1}. ${item.name} - $${item.price} [Remove]\n`;
        total += item.price;
    });
    cartSummary += `\nTotal: $${total.toFixed(2)}\n\nClick OK to checkout or cancel to close.`;
    if (confirm(cartSummary)) {
        // Simulate checkout
        alert('Proceeding to checkout...');
    }
    // Add remove logic: prompt for index to remove
    const removeIndex = prompt('Enter item number to remove (or cancel):');
    if (removeIndex && !isNaN(removeIndex) && removeIndex > 0 && removeIndex <= cart.length) {
        cart.splice(removeIndex - 1, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }
});

// Intersection observer for fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.featured-card, .roadmap-card, .team-member, .blog-post').forEach(el => {
    el.classList.add('fade-in-up-hidden');
    observer.observe(el);
});

// Placeholder for Google Analytics
// gtag('config', 'YOUR_ID');
