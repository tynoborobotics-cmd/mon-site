// Futuristic Navigation System and Interactions

const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const ctaButton = document.querySelector('.cta-button');

// Enable smooth navigation on SPA-style anchor clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Only handle SPA navigation if link is # or current page
        const pageId = link.getAttribute('data-page');
        if (pageId && document.getElementById(pageId)) {
            e.preventDefault();
            showPage(pageId);
        }
    });
});

function showPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll(`[data-page="${pageId}"]`).forEach(link => link.classList.add('active'));

    if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
        if (document.getElementById('courses')) {
            e.preventDefault();
            showPage('courses');
        }
    });
}

// Mobile Menu Toggle
if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            mobileMenuBtn.focus();
        }
    });
}

// Course and E-book Enrollment/Download
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.course-card');
        const title = card.querySelector('.course-title')?.textContent || 'Selected Item';
        alert(`Action started for "${title}".`);
    });
});

// Scroll Behavior
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    nav.classList.toggle('scrolled', scrollTop > 50);
    nav.style.transform = (scrollTop > lastScrollTop && scrollTop > 100) ? 'translateY(-100%)' : 'translateY(0)';
    lastScrollTop = scrollTop;
}, { passive: true });

// Card Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.course-card, .bio-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.6s cubic-bezier(.4,2,.6,1) ${index * 0.1}s`;
    observer.observe(card);
});


    const perf = performance.getEntriesByType('navigation')[0];
    if (perf) {
        console.log(`Page loaded in ${perf.loadEventEnd - perf.loadEventStart}ms`);
    }
    console.log('🎓 Tynobo Academy - Futuristic UI/UX Initialized');