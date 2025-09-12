document.addEventListener('DOMContentLoaded', () => {
    // Particle Network Animation (Three.js)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl-bg').appendChild(renderer.domElement);

    const particles = new THREE.Group();
    const particleCount = 100;
    const geometry = new THREE.SphereGeometry(0.05, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x10b981 });

    for (let i = 0; i < particleCount; i++) {
        const particle = new THREE.Mesh(geometry, material);
        particle.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        particles.add(particle);
    }
    scene.add(particles);
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.002;
        particles.children.forEach(p => {
            p.position.x += Math.sin(Date.now() * 0.001 + p.position.y) * 0.01;
        });
        renderer.render(scene, camera);
    }
    animate();

    // Sticky CTA Scroll Behavior
    const stickyCta = document.getElementById('sticky-cta');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            stickyCta.classList.remove('hidden');
            gsap.to(stickyCta, { y: 0, duration: 0.3 });
        } else {
            gsap.to(stickyCta, { y: '100%', duration: 0.3, onComplete: () => stickyCta.classList.add('hidden') });
        }
    });

    // Course Filter Functionality
    const courses = document.querySelectorAll('.course-card');
    const levelFilter = document.getElementById('level-filter');
    const topicFilter = document.getElementById('topic-filter');
    const formatFilter = document.getElementById('format-filter');

    function filterCourses() {
        const level = levelFilter.value;
        const topic = topicFilter.value;
        const format = formatFilter.value;

        courses.forEach(course => {
            const matchesLevel = level === 'all' || course.dataset.level === level;
            const matchesTopic = topic === 'all' || course.dataset.topic === topic;
            const matchesFormat = format === 'all' || course.dataset.format === format;

            if (matchesLevel && matchesTopic && matchesFormat) {
                course.style.display = 'block';
                gsap.fromTo(course, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
            } else {
                course.style.display = 'none';
            }
        });
    }

    [levelFilter, topicFilter, formatFilter].forEach(filter => {
        filter.addEventListener('change', filterCourses);
    });

    // Cart Functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price}`;
            cartList.appendChild(li);
            total += parseFloat(item.price);
        });
        cartTotal.textContent = total.toFixed(2);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    document.querySelectorAll('.cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.dataset.product;
            const price = btn.dataset.price;
            cart.push({ product, price });
            updateCart();
            gsap.from(cartList.lastChild, { opacity: 0, x: -20, duration: 0.3 });
        });
    });

    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Proceeding to purchase: ${btn.dataset.product}`);
            // Call back-end /purchase endpoint
        });
    });

    document.querySelectorAll('.enroll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Enrolling in: ${btn.dataset.course}`);
            // Call back-end /enroll endpoint
        });
    });

    // Newsletter Signup
    document.getElementById('subscribe-btn').addEventListener('click', () => {
        const email = document.getElementById('newsletter-email').value;
        if (/^\S+@\S+\.\S+$/.test(email)) {
            alert('Subscribed with: ' + email);
            // Send POST to /subscribe endpoint
            fetch('/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            }).then(res => res.json()).then(data => console.log(data));
        } else {
            alert('Please enter a valid email');
        }
    });
});
