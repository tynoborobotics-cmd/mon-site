/* =====================
   LEGACY COMPATIBILITY MODULE
   ===================== */

// Disabled functions for calm theme
function createQuantumField() {
    const field = document.createElement('div');
    field.className = 'quantum-field';
    field.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background: url('assets/images/quantum-dots.png') repeat;
        animation: quantumFlow 20s linear infinite;
    `;
    document.querySelector('.hero').appendChild(field);
}

function createNeuralWeb() { /* disabled for calm theme */ }

// Legacy class for compatibility
class QuantumAI { /* removed in calm theme to avoid missing DOM elements */ }

// Initialize Legacy Systems
document.addEventListener('DOMContentLoaded', () => {
    createQuantumField();
    
    // Academy activation log
    setTimeout(() => {
        console.log('🎓 Tynobo Academy - World-Class UI/UX Activated');
        console.log('✨ Advanced interactions enabled');
        console.log('📱 Responsive design optimized');
        console.log('♿ Accessibility features loaded');
        console.log('⚡ Performance optimized');
        console.log('🌌 Quantum Field Activated');
    }, 1000);
});
