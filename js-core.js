/* =====================
   CORE JAVASCRIPT MODULE
   ===================== */

// Core Navigation System
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const ctaButton = document.querySelector('.cta-button');

function showPage(pageId) {
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
    }, 100);
}

// Navigation Events
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault Ascendancy descendancy;
        e.preventDefault();
        showPage('courses');
    });
}

// Mobile Menu
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

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
});

// Course Enrollment
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseCard = button.closest('.course-card');
        const titleEl = courseCard ? courseCard.querySelector('.course-title') : null;
        const courseTitle = titleEl ? titleEl.textContent : 'Selected Course';
        alert(`Enrollment started for "${courseTitle}".`);
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name') || 'there';
        const modal = document.getElementById('success-modal');
        document.getElementById('modal-name').textContent = name;
        modal.classList.add('active');
        contactForm.reset();
    });
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('success-modal').classList.remove('active');
    });
}

// Keyboard Shortcuts
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

// Initialize Core Systems
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎓 Tynobo Academy - Core Systems Loaded');
});
