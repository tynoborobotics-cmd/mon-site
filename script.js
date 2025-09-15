// Initialize Enhanced Quantum Particle System
function createQuantumField() { /* disabled for calm theme */ }

// Initialize Advanced Bio-Neural Web
function createNeuralWeb() { /* disabled for calm theme */ }


// Singularity Navigation System
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const ctaButton = document.querySelector('.cta-button');
const consciousnessLoader = document.getElementById('consciousnessLoader');

function showConsciousnessLoader() { /* no loader in calm theme */ }

function showPage(pageId) {
    showConsciousnessLoader();
    
    // Hide navigation immediately on mobile
    if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
    }
    
    setTimeout(() => {
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));
        
        document.getElementById(pageId).classList.add('active');
        document.querySelector(`[data-page="${pageId}"]`).classList.add('active');
        
        // Ensure navigation is hidden after page change
        navMenu.classList.remove('active');
        window.scrollTo(0, 0);
    }, 750);
}

// God-Level Navigation Events
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('courses');
    });
}

// Mobile Singularity Menu
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && mobileMenuBtn && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// Singularity Course Ascension
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseCard = button.closest('.course-card');
        const titleEl = courseCard ? courseCard.querySelector('.course-title') : null;
        const courseTitle = titleEl ? titleEl.textContent : 'Selected Course';
        alert(`Enrollment started for "${courseTitle}".`);
    });
});

// Omniscient Contact Entanglement
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name') || 'there';
    alert(`Message sent successfully, ${name}! We will get back to you within 24 hours.`);
    contactForm.reset();
});


// Advanced Scroll Management with Performance Optimization
let lastScrollTop = 0;
let ticking = false;
const nav = document.querySelector('nav');

function updateNavOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (nav) {
        // Add scrolled class for styling
        nav.classList.toggle('scrolled', scrollTop > 50);
        
        // Hide/show navigation on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
    }
    
    lastScrollTop = scrollTop;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateNavOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick, { passive: true });

// Advanced Intersection Observer with Staggered Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const consciousnessObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation for multiple elements
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }, index * 100);
            
            // Unobserve after animation
            consciousnessObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Enhanced Card Interactions
function addCardInteractions() {
    const cards = document.querySelectorAll('.course-card, .bio-card');
    
    cards.forEach(card => {
        // Add hover sound effect (optional)
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click ripple effect
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(14, 165, 233, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation CSS
const rippleCSS = `
@keyframes ripple {
    to {
        transform: scale(2);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Dynamic Reality Distortion on Mouse
document.addEventListener('mousemove', () => { /* disable dynamic bg shift for calm theme */ });

// Quantum AI Assistant 2099 - Advanced Neural Intelligence
class QuantumAI { /* removed in calm theme to avoid missing DOM elements */ }

// Initialize Singularity Systems
// Advanced Loading and Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core systems
    createQuantumField();
    createNeuralWeb();
    
    // Setup card animations
    const consciousnessCards = document.querySelectorAll('.course-card, .bio-card');
    consciousnessCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        consciousnessObserver.observe(card);
    });
    
    // Initialize enhanced interactions
    addCardInteractions();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Initialize lazy loading for images
    initializeLazyLoading();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`🚀 Page loaded in ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
        });
    }
    
    // Academy activation log
    setTimeout(() => {
        console.log('🎓 Tynobo Academy - World-Class UI/UX Activated');
        console.log('✨ Advanced interactions enabled');
        console.log('📱 Responsive design optimized');
        console.log('♿ Accessibility features loaded');
        console.log('⚡ Performance optimized');
    }, 1000);
});

// Advanced Mobile Menu
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.setAttribute('aria-expanded', navMenu.classList.contains('active'));
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                mobileMenuBtn.focus();
            }
        });
    }
}

// Lazy Loading Implementation
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Keyboard Navigation Enhancement
function setupKeyboardNavigation() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-500);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID if not exists
    const mainContent = document.querySelector('.page') || document.querySelector('main');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
}

// Godhood Keyboard Commands
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                showPage('home');
                break;
            case '2':
                e.preventDefault();
                showPage('courses');
                break;
            case '3':
                e.preventDefault();
                showPage('about');
                break;
            case '4':
                e.preventDefault();
                showPage('ebooks');
                break;
            case '5':
                e.preventDefault();
                showPage('contact');
                break;
        }
    }
});

// Enhanced Visual Feedback on Interactions
document.addEventListener('click', () => { /* remove click ripple */ });

// Advanced Quantum Effects 2099
function initializeQuantumTrails() { /* disabled */ }

function createQuantumTrail() { /* disabled */ }

function createNeuralNetwork() { /* disabled */ }

function addHolographicInteractions() { /* disabled */ }

// Quantum AI Integration with Page Navigation
function integrateAIWithNavigation() { /* removed */ }

// Initialize AI integration
document.addEventListener('DOMContentLoaded', () => {});
