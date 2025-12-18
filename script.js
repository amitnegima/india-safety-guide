// Global state
let currentLanguage = 'en';
let currentCategory = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    showLoading();
    initializeEventListeners();
    setTimeout(() => {
        renderCards();
        hideLoading();
        updateStats();
    }, 500);
});

// Show/Hide Loading
function showLoading() {
    const loading = document.getElementById('loadingIndicator');
    if (loading) loading.classList.remove('hidden');
}

function hideLoading() {
    const loading = document.getElementById('loadingIndicator');
    if (loading) loading.classList.add('hidden');
}

// Initialize event listeners
function initializeEventListeners() {
    // Language toggle
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.addEventListener('click', toggleLanguage);

    // Category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update current category
            currentCategory = this.getAttribute('data-category');
            // Clear search
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';
            // Render cards
            renderCards();
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            clearSearch.style.display = searchTerm ? 'flex' : 'none';
            filterCards(searchTerm);
        });
    }

    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            searchInput.value = '';
            this.style.display = 'none';
            renderCards();
        });
    }
}

// Filter cards based on search
function filterCards(searchTerm) {
    if (!searchTerm) {
        renderCards();
        return;
    }

    const container = document.getElementById('cardsContainer');
    const cards = container.querySelectorAll('.info-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show message if no results
    if (visibleCount === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3 data-en="No results found" data-hi="कोई परिणाम नहीं मिला">No results found</h3>
                <p data-en="Try different keywords" data-hi="अलग कीवर्ड आज़माएं">Try different keywords</p>
            </div>
        `;
        updateLanguageText();
    }
}

// Toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    updateLanguageText();
    renderCards();
}

// Update all text elements based on current language
function updateLanguageText() {
    const langText = document.getElementById('langText');
    langText.textContent = currentLanguage === 'en' ? 'हिंदी' : 'English';

    // Update all elements with data-en and data-hi attributes
    const translatableElements = document.querySelectorAll('[data-en][data-hi]');
    translatableElements.forEach(element => {
        if (currentLanguage === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-hi');
        }
    });

    // Update search placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const placeholder = currentLanguage === 'en' 
            ? searchInput.getAttribute('data-en-placeholder')
            : searchInput.getAttribute('data-hi-placeholder');
        if (placeholder) searchInput.placeholder = placeholder;
    }
}

// Update statistics
function updateStats() {
    let totalTips = 0;
    let totalVideos = 0;

    contentData.forEach(item => {
        const dosEn = item.dos.en || [];
        const dontsEn = item.donts.en || [];
        
        totalTips += dosEn.length + dontsEn.length;
        
        dosEn.forEach(tip => {
            if (typeof tip === 'object' && tip.video) totalVideos++;
        });
        dontsEn.forEach(tip => {
            if (typeof tip === 'object' && tip.video) totalVideos++;
        });
        
        if (item.videoUrl) totalVideos++;
    });

    document.getElementById('totalTips').textContent = totalTips;
    document.getElementById('totalVideos').textContent = totalVideos;
    document.getElementById('totalCategories').textContent = contentData.length;
}

// Render cards based on current category and language
function renderCards() {
    const container = document.getElementById('cardsContainer');
    
    // Filter content based on category
    let filteredContent = currentCategory === 'all' 
        ? contentData 
        : contentData.filter(item => item.category === currentCategory);

    // Clear container
    container.innerHTML = '';

    // Check if there's content to display
    if (filteredContent.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-inbox"></i>
                <h3 data-en="No content available" data-hi="कोई सामग्री उपलब्ध नहीं">No content available</h3>
                <p data-en="Please select a different category" data-hi="कृपया एक अलग श्रेणी चुनें">Please select a different category</p>
            </div>
        `;
        updateLanguageText();
        return;
    }

    // Create cards
    filteredContent.forEach(item => {
        const card = createCard(item);
        container.appendChild(card);
    });
}

// Create a card element
function createCard(data) {
    const card = document.createElement('div');
    card.className = 'info-card';
    card.setAttribute('data-category', data.category);

    const title = currentLanguage === 'en' ? data.title.en : data.title.hi;
    const dos = currentLanguage === 'en' ? data.dos.en : data.dos.hi;
    const donts = currentLanguage === 'en' ? data.donts.en : data.donts.hi;

    const dosLabel = currentLanguage === 'en' ? 'Do\'s' : 'करें';
    const dontsLabel = currentLanguage === 'en' ? 'Don\'ts' : 'न करें';
    const watchVideoLabel = currentLanguage === 'en' ? 'Watch Video Guide' : 'वीडियो गाइड देखें';

    // Create video section HTML
    let videoSection = '';
    if (data.videoUrl) {
        if (data.videoType === 'local') {
            videoSection = `
                <div class="card-video-section">
                    <div class="card-video-container">
                        <video 
                            controls 
                            preload="metadata"
                            poster=""
                            title="${title}"
                            onerror="this.parentElement.innerHTML='<div class=\\'video-error\\'><i class=\\'fas fa-exclamation-triangle\\'></i><p>${currentLanguage === 'en' ? 'Video not found. Please add video file.' : 'वीडियो नहीं मिला। कृपया वीडियो फ़ाइल जोड़ें।'}</p></div>'">
                            <source src="${data.videoUrl}" type="video/mp4">
                            <source src="${data.videoUrl.replace('.mp4', '.webm')}" type="video/webm">
                            Your browser does not support the video tag.
                        </video>
                        <div class="video-badge">
                            <i class="fas fa-video"></i>
                            <span>${currentLanguage === 'en' ? 'VIDEO' : 'वीडियो'}</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            videoSection = `
                <div class="card-video-section">
                    <div class="video-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>${watchVideoLabel}</p>
                    </div>
                </div>
            `;
        }
    }

    // Helper function to create list items with video buttons
    const createListItem = (item, index, type) => {
        const itemText = typeof item === 'string' ? item : item.text;
        const itemVideo = typeof item === 'string' ? null : item.video;
        const hasVideo = itemVideo !== null;
        const tooltipText = currentLanguage === 'en' ? 'Watch video guide' : 'वीडियो गाइड देखें';
        
        return `
            <li data-video="${itemVideo || ''}" data-text="${itemText}" ${hasVideo ? 'class="has-video"' : ''}>
                <div class="list-item-content">
                    <span>${itemText}</span>
                    ${hasVideo ? `<button class="list-item-video-btn tooltip" data-tooltip="${tooltipText}" title="${tooltipText}"><i class="fas fa-play"></i></button>` : ''}
                </div>
            </li>
        `;
    };

    card.innerHTML = `
        ${videoSection}
        <div class="card-body">
            <div class="card-header">
                <i class="${data.icon} card-icon"></i>
                <h3 class="card-title">${title}</h3>
            </div>
            <div class="card-content">
                <div class="dos-section">
                    <h4><i class="fas fa-check-circle"></i> ${dosLabel}</h4>
                    <ul class="dos-list">
                        ${dos.map((item, index) => createListItem(item, index, 'do')).join('')}
                    </ul>
                </div>
                <div class="donts-section">
                    <h4><i class="fas fa-times-circle"></i> ${dontsLabel}</h4>
                    <ul class="donts-list">
                        ${donts.map((item, index) => createListItem(item, index, 'dont')).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    // Add event listeners for video buttons
    card.querySelectorAll('.list-item-video-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const listItem = btn.closest('li');
            const videoUrl = listItem.getAttribute('data-video');
            const text = listItem.getAttribute('data-text');
            if (videoUrl) {
                openVideoModal(videoUrl, text, title);
            }
        });
    });

    return card;
}

// Open video modal
function openVideoModal(videoUrl, pointText, categoryTitle) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalTitle.innerHTML = `<i class="fas fa-play-circle"></i> ${categoryTitle}`;
    modalDescription.textContent = pointText;
    
    if (videoUrl) {
        modalVideo.innerHTML = `
            <video 
                controls 
                autoplay
                preload="auto"
                style="width: 100%; height: 100%;"
                title="${pointText}">
                <source src="${videoUrl}" type="video/mp4">
                <source src="${videoUrl.replace('.mp4', '.webm')}" type="video/webm">
                <p>${currentLanguage === 'en' ? 'Your browser does not support the video tag.' : 'आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।'}</p>
            </video>
        `;
    } else {
        modalVideo.innerHTML = `
            <div class="animation-placeholder">
                <i class="fas fa-film"></i>
                <p>${currentLanguage === 'en' ? 'Video coming soon' : 'वीडियो जल्द ही आ रहा है'}</p>
            </div>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    // Stop any playing videos
    const videos = modalVideo.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    
    modal.classList.remove('active');
    modalVideo.innerHTML = '';
    document.body.style.overflow = 'auto';
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add stagger animation to cards
function addStaggerAnimation() {
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Call after rendering cards
const originalRenderCards = renderCards;
renderCards = function() {
    originalRenderCards();
    addStaggerAnimation();
};

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('videoModal');
    if (e.target === modal) {
        closeVideoModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});
