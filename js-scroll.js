/* =====================
   SCROLL & ANIMATION MODULE
   ===================== */

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

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Setup card animations
    const consciousnessCards = document.querySelectorAll('.course-card, .bio-card');
    consciousnessCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        consciousnessObserver.observe(card);
    });
    
    console.log('✨ Scroll & Animation Module Loaded');
});
