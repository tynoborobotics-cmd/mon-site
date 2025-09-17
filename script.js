document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Cart Functionality
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;

    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            cartItems++;
            cartCount.textContent = cartItems;
            alert(`Added ${button.dataset.name} to cart for $${button.dataset.price}`);
        });
    });

    // Mobile Menu Toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const autocomplete = document.getElementById('autocomplete');
    const searchResults = document.getElementById('search-results');

    // Keywords for autocomplete and synonyms
    const searchKeywords = [
        'foundations', 'beginner', 'math', 'python', 'sql', 'data handling', 'visualization', 'machine learning', 'ml', 'regression', 'classification', 'deep learning', 'ai', 'neural networks', 'tensorflow', 'pytorch', 'big data', 'spark', 'aws', 'mlops', 'applied', 'ethics', 'portfolio', 'interview'
    ];
    const synonyms = { 'ai': 'artificial intelligence', 'ml': 'machine learning', 'ds': 'data science' };

    // Debounce function
    function debounce(func, delay) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    }

    // Simple Levenshtein distance for spelling correction
    function levenshteinDistance(str1, str2) {
        const matrix = [];
        for (let i = 0; i <= str2.length; i++) {
            matrix[i] = [i];
        }
        for (let j = 0; j <= str1.length; j++) {
            matrix[0][j] = j;
        }
        for (let i = 1; i <= str2.length; i++) {
            for (let j = 1; j <= str1.length; j++) {
                if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[str2.length][str1.length];
    }

    function suggestSpelling(query) {
        if (query.length < 3) return '';
        const suggestions = searchKeywords.filter(word => levenshteinDistance(query, word) <= 2 && word.includes(query.slice(0, 3)));
        return suggestions.length > 0 ? suggestions[0] : '';
    }

    function highlightText(card, query) {
        card.innerHTML = card.innerHTML.replace(new RegExp(`(${query})`, 'gi'), '<span class="highlight">$1</span>');
    }

    function displaySearchResults(cards, query) {
        searchResults.innerHTML = `<h4>Results for "${query}" (${cards.length} found)</h4>`;
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.querySelectorAll('.highlight').forEach(span => span.classList.remove('highlight')); // Remove old highlights
            searchResults.appendChild(clone);
        });
    }

    function showAllCards() {
        document.querySelectorAll('.roadmap-card').forEach(card => {
            card.style.display = 'block';
        });
    }

    // Search with autocomplete
    searchInput.addEventListener('input', debounce(function(e) {
        const query = e.target.value.toLowerCase().trim();
        if (query.length === 0) {
            autocomplete.classList.remove('show');
            searchResults.classList.remove('show');
            showAllCards();
            return;
        }

        // Autocomplete
        const suggestions = searchKeywords.filter(kw => kw.startsWith(query)).slice(0, 5);
        autocomplete.innerHTML = '';
        if (suggestions.length > 0) {
            suggestions.forEach(sug => {
                const item = document.createElement('div');
                item.classList.add('autocomplete-item');
                item.textContent = sug;
                item.addEventListener('click', () => {
                    searchInput.value = sug;
                    autocomplete.classList.remove('show');
                    searchInput.dispatchEvent(new Event('input'));
                });
                autocomplete.appendChild(item);
            });
            autocomplete.classList.add('show');
        } else {
            autocomplete.classList.remove('show');
        }

        // Spelling suggestion
        const corrected = suggestSpelling(query);
        if (corrected && corrected !== query) {
            e.target.setAttribute('data-suggestion', corrected);
        }

        // Apply synonyms
        let searchQuery = query;
        for (let key in synonyms) {
            if (query.includes(key)) {
                searchQuery = query.replace(key, synonyms[key]);
                break;
            }
        }

        // Filter cards
        const cards = document.querySelectorAll('.roadmap-card');
        let visibleCards = [];
        cards.forEach(card => {
            const text = card.textContent.toLowerCase() + ' ' + card.dataset.keywords;
            if (text.includes(searchQuery)) {
                highlightText(card, searchQuery);
                card.style.display = 'block';
                visibleCards.push(card);
            } else {
                card.style.display = 'none';
            }
        });

        displaySearchResults(visibleCards, query);
        searchResults.classList.add('show');
    }, 200));

    // Close autocomplete on outside click
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target)) {
            autocomplete.classList.remove('show');
        }
    });
});
