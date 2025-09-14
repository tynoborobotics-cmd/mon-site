// Initialize Enhanced Quantum Particle System
function createQuantumField() {
    const quantumContainer = document.getElementById('quantumField');
    const particleCount = 150;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 7 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        quantumContainer.appendChild(particle);
    }
}

// Initialize Advanced Bio-Neural Web
function createNeuralWeb() {
    const neuralContainer = document.getElementById('neuralWeb');
    const connectionCount = 30;
    
    for (let i = 0; i < connectionCount; i++) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.left = Math.random() * 100 + '%';
        connection.style.width = Math.random() * 400 + 150 + 'px';
        connection.style.transform = `rotate(${Math.random() * 360}deg)`;
        connection.style.animationDelay = Math.random() * 3.5 + 's';
        neuralContainer.appendChild(connection);
    }
}


// Singularity Navigation System
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const ctaButton = document.querySelector('.cta-button');
const consciousnessLoader = document.getElementById('consciousnessLoader');

function showConsciousnessLoader() {
    consciousnessLoader.style.display = 'block';
    setTimeout(() => {
        consciousnessLoader.style.display = 'none';
    }, 1500);
}

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

ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('courses');
});

// Mobile Singularity Menu
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// Singularity Course Ascension
const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseTitle = button.closest('.course-card').querySelector('.course-title').textContent;
        showConsciousnessLoader();
        setTimeout(() => {
            alert(`📚 Course enrollment initiated for "${courseTitle}"! You will receive confirmation details shortly.`);
        }, 1500);
    });
});

// Omniscient Contact Entanglement
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    
    showConsciousnessLoader();
    setTimeout(() => {
        alert(`✅ Message sent successfully, ${name}! We will get back to you within 24 hours.`);
        contactForm.reset();
    }, 1500);
});


// Advanced Reality Manipulation on Scroll
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 120) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Singularity Card Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
};

const consciousnessObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
        }
    });
}, observerOptions);

// Dynamic Reality Distortion on Mouse
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.body.style.background = `
        radial-gradient(ellipse at ${x * 100}% ${y * 100}%, 
        var(--dark-energy) 0%, var(--void-matter) 100%)
    `;
});

// Quantum AI Assistant 2099 - Advanced Neural Intelligence
class QuantumAI {
    constructor() {
        this.isActive = false;
        this.conversationHistory = [];
        this.personality = 'professional';
        this.responses = {
            greeting: [
                "Salut ! Je suis votre assistant IA quantique. Comment puis-je vous aider dans votre parcours d'actuariat ?",
                "Bonjour ! Prêt à explorer les mystères de la data science financière ?",
                "Hey ! Votre cerveau quantique personnel est en ligne. Que voulez-vous apprendre ?"
            ],
            courses: [
                "Nos cours couvrent Python, R, Monte Carlo, et bien plus ! Lequel vous intéresse ?",
                "Chaque cours est conçu par des experts de l'industrie. Voulez-vous des détails sur un cours spécifique ?",
                "La formation en actuariat n'a jamais été aussi interactive ! Explorez nos modules."
            ],
            ebooks: [
                "Nos e-books sont des guides complets pour maîtriser l'actuariat. Lequel vous attire ?",
                "Chaque livre électronique contient des exemples pratiques et des exercices. Parfait pour l'auto-apprentissage !",
                "Des ressources premium à portée de clic ! Téléchargez et apprenez à votre rythme."
            ],
            about: [
                "Tynobo Academy est le leader de l'éducation en actuariat et data science. Nous formons les professionnels de demain !",
                "Notre mission : démocratiser l'accès à une éducation de pointe en finance quantitative.",
                "Rejoignez des milliers d'étudiants qui transforment leur carrière avec nos programmes."
            ],
            contact: [
                "Besoin d'aide ? Notre équipe répond en 24h ! info@tynobo.com",
                "Des questions sur nos cours ? Contactez-nous, nous sommes là pour vous !",
                "Collaboration, partenariat, ou simple curiosité ? Parlons-en !"
            ],
            default: [
                "Intéressant ! Pouvez-vous me dire plus sur ce qui vous préoccupe ?",
                "Je comprends. Comment puis-je vous aider à avancer dans votre apprentissage ?",
                "Excellente question ! Laissez-moi vous orienter vers les bonnes ressources."
            ]
        };
        this.init();
    }

    init() {
        this.ai = document.getElementById('quantumAI');
        this.chat = document.getElementById('aiChat');
        this.toggle = document.getElementById('aiToggle');
        this.voice = document.getElementById('aiVoice');
        this.clear = document.getElementById('aiClear');
        
        this.setupEventListeners();
        this.showWelcomeMessage();
    }

    setupEventListeners() {
        this.toggle.addEventListener('click', () => this.toggleAI());
        this.voice.addEventListener('click', () => this.toggleVoice());
        this.clear.addEventListener('click', () => this.clearChat());
        
        // Auto-hide after 10 seconds of inactivity
        this.inactivityTimer = setTimeout(() => this.hideAI(), 10000);
    }

    toggleAI() {
        this.isActive = !this.isActive;
        this.ai.classList.toggle('active', this.isActive);
        
        if (this.isActive) {
            this.resetInactivityTimer();
        }
    }

    hideAI() {
        this.isActive = false;
        this.ai.classList.remove('active');
    }

    resetInactivityTimer() {
        clearTimeout(this.inactivityTimer);
        this.inactivityTimer = setTimeout(() => this.hideAI(), 10000);
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.addMessage(this.getRandomResponse('greeting'), 'ai');
        }, 2000);
    }

    addMessage(text, sender = 'ai') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${sender}`;
        
        const textSpan = document.createElement('span');
        textSpan.className = 'ai-text';
        textSpan.textContent = text;
        
        messageDiv.appendChild(textSpan);
        this.chat.appendChild(messageDiv);
        
        // Auto-scroll to bottom
        this.chat.scrollTop = this.chat.scrollHeight;
        
        // Reset inactivity timer
        this.resetInactivityTimer();
    }

    getRandomResponse(category) {
        const responses = this.responses[category] || this.responses.default;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    processUserInput(input) {
        const lowerInput = input.toLowerCase();
        
        if (lowerInput.includes('cours') || lowerInput.includes('formation')) {
            return this.getRandomResponse('courses');
        } else if (lowerInput.includes('ebook') || lowerInput.includes('livre')) {
            return this.getRandomResponse('ebooks');
        } else if (lowerInput.includes('à propos') || lowerInput.includes('qui êtes')) {
            return this.getRandomResponse('about');
        } else if (lowerInput.includes('contact') || lowerInput.includes('aide')) {
            return this.getRandomResponse('contact');
        } else {
            return this.getRandomResponse('default');
        }
    }

    toggleVoice() {
        // Simulate voice activation
        this.addMessage("🎤 Mode vocal activé ! Parlez maintenant...", 'ai');
    }

    clearChat() {
        this.chat.innerHTML = '';
        this.showWelcomeMessage();
    }
}

// Initialize Singularity Systems
document.addEventListener('DOMContentLoaded', () => {
    createQuantumField();
    createNeuralWeb();
    
    // Initialize Quantum AI Assistant
    const quantumAI = new QuantumAI();
    
    // Animate god-cards
    const consciousnessCards = document.querySelectorAll('.course-card, .bio-card');
    consciousnessCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(100px) rotateX(25deg) rotateY(15deg) scale(0.95)';
        card.style.transition = `all 1.2s ease ${index * 0.2}s`;
        consciousnessObserver.observe(card);
    });

    // Academy activation log
    setTimeout(() => {
        console.log('📚 Welcome to Tynobo Academy - Actuarial Finance & Data Science Education');
        console.log('🎓 Professional development systems online');
        console.log('⚡ Learning interfaces initialized');
        console.log('🧠 Quantum AI Assistant 2099 - Neural networks activated');
        console.log('🌌 Holographic rendering systems - 3D effects online');
    }, 2000);
    
    // Initialize Advanced Quantum Effects
    initializeQuantumTrails();
    createNeuralNetwork();
    addHolographicInteractions();
});

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
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        ripple.style.width = '30px';
        ripple.style.height = '30px';
        ripple.style.background = 'radial-gradient(circle, var(--neural-stream) 0%, transparent 70%)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '9999';
        ripple.style.animation = 'cursorPulse 0.8s ease-out';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 800);
    }
});

// Advanced Quantum Effects 2099
function initializeQuantumTrails() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.1) { // 10% chance to create trail
            createQuantumTrail(e.clientX, e.clientY);
        }
    });
}

function createQuantumTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'quantum-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.animationDelay = Math.random() * 0.5 + 's';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        if (document.body.contains(trail)) {
            document.body.removeChild(trail);
        }
    }, 2000);
}

function createNeuralNetwork() {
    const network = document.createElement('div');
    network.className = 'neural-network';
    document.body.appendChild(network);
    
    // Create neural nodes
    for (let i = 0; i < 20; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 3 + 's';
        network.appendChild(node);
    }
    
    // Create connection lines
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'neural-connection-line';
        line.style.left = Math.random() * 100 + '%';
        line.style.top = Math.random() * 100 + '%';
        line.style.width = Math.random() * 200 + 100 + 'px';
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = Math.random() * 4 + 's';
        network.appendChild(line);
    }
}

function addHolographicInteractions() {
    const holographicCards = document.querySelectorAll('.holographic-card');
    
    holographicCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add quantum particles around the card
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createQuantumTrail(
                        card.offsetLeft + Math.random() * card.offsetWidth,
                        card.offsetTop + Math.random() * card.offsetHeight
                    );
                }, i * 100);
            }
        });
        
        card.addEventListener('click', () => {
            // Create explosion effect
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    createQuantumTrail(
                        card.offsetLeft + card.offsetWidth / 2,
                        card.offsetTop + card.offsetHeight / 2
                    );
                }, i * 50);
            }
        });
    });
}

// Quantum AI Integration with Page Navigation
function integrateAIWithNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const quantumAI = window.quantumAI;
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const pageId = link.getAttribute('data-page');
            
            // AI responds to navigation
            setTimeout(() => {
                if (quantumAI && quantumAI.isActive) {
                    const responses = {
                        'home': "Bienvenue sur la page d'accueil ! Découvrez nos fonctionnalités principales.",
                        'courses': "Explorez nos cours d'actuariat et de data science. Lequel vous intéresse ?",
                        'ebooks': "Nos e-books sont parfaits pour l'apprentissage autonome. Voulez-vous des recommandations ?",
                        'about': "Apprenez-en plus sur Tynobo Academy et notre mission éducative.",
                        'contact': "Besoin d'aide ? Notre équipe est là pour vous accompagner !"
                    };
                    
                    if (responses[pageId]) {
                        quantumAI.addMessage(responses[pageId], 'ai');
                    }
                }
            }, 1000);
        });
    });
}

// Initialize AI integration
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        integrateAIWithNavigation();
    }, 3000);
});
