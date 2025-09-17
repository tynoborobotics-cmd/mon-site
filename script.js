// Existing JS remains, with enhanced search

// Keywords for autocomplete and synonyms
const searchKeywords = [
    'foundations', 'beginner', 'math', 'python', 'sql', 'data handling', 'visualization', 'machine learning', 'ml', 'regression', 'classification', 'deep learning', 'ai', 'neural networks', 'tensorflow', 'pytorch', 'big data', 'spark', 'aws', 'mlops', 'applied', 'ethics', 'portfolio', 'interview'
];
const synonyms = { 'ai': 'artificial intelligence', 'ml': 'machine learning', 'ds': 'data science' };

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

// Enhanced search with autocomplete, filters, highlighting
const searchInput = document.querySelector('.search-input');
const autocomplete = document.getElementById('autocomplete');
const searchResults = document.getElementById('search-results');
const filters = document.getElementById('search-filters');

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
    displayAutocomplete(suggestions, query);

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
            visibleCards.push(card);
        } else {
            card.style.display = 'none';
        }
    });

    // Apply filters
    const typeFilters = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    if (typeFilters.length > 0) {
        visibleCards = visibleCards.filter(card => typeFilters.includes(card.dataset.type));
    }

    // Sort
    const sortValue = document.getElementById('sort-select').value;
    if (sortValue === 'price') {
        visibleCards.sort((a, b) => parseFloat(a.querySelector('.buy-btn').dataset.price) - parseFloat(b.querySelector('.buy-btn').dataset.price));
    }

    displaySearchResults(visibleCards, query);
    searchResults.classList.add('show');
}, 200));

function displayAutocomplete(suggestions, query) {
    autocomplete.innerHTML = '';
    if (suggestions.length === 0) {
        autocomplete.classList.remove('show');
        return;
    }
    suggestions.forEach(sug => {
        const item = document.createElement('div');
        item.classList.add('autocomplete-item');
        item.textContent = sug;
        item.addEventListener('click', () => {
            searchInput.value = sug;
            autocomplete.classList.remove('show');
            // Trigger search with new value
            searchInput.dispatchEvent(new Event('input'));
        });
        autocomplete.appendChild(item);
    });
    autocomplete.classList.add('show');
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

// Filter and sort event listeners
filters.addEventListener('change', () => {
    const event = new Event('input');
    searchInput.dispatchEvent(event);
});

// Close dropdowns on outside click
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target)) {
        autocomplete.classList.remove('show');
    }
});

// Rest of existing JS (theme, cart, etc.)
