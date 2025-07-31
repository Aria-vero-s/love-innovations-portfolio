// Utility functions

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Initialize general interactions
function initializeInteractions() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize video controls if video exists
    initializeVideoControls();
}

// Initialize video controls for featured video
function initializeVideoControls() {
    const video = document.getElementById('featuredVideo');
    const playButton = document.getElementById('playButton');
    
    if (video && playButton) {
        // Remove existing event listeners to prevent duplicates
        video.removeEventListener('pause', handleVideoPause);
        video.removeEventListener('ended', handleVideoEnded);
        video.removeEventListener('play', handleVideoPlay);
        
        // Add event listeners
        video.addEventListener('pause', handleVideoPause);
        video.addEventListener('ended', handleVideoEnded);
        video.addEventListener('play', handleVideoPlay);
        
        // Handle fullscreen changes
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('fullscreenchange', handleFullscreenChange);
    }
}

// Event handlers for video controls
function handleVideoPause() {
    const playButton = document.getElementById('playButton');
    if (playButton) playButton.style.display = 'flex';
}

function handleVideoEnded() {
    const playButton = document.getElementById('playButton');
    if (playButton) playButton.style.display = 'flex';
}

function handleVideoPlay() {
    const playButton = document.getElementById('playButton');
    if (playButton) playButton.style.display = 'none';
}

function handleFullscreenChange() {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        if (document.fullscreenElement) {
            // In fullscreen - change icon to exit fullscreen
            fullscreenBtn.innerHTML = `
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            `;
        } else {
            // Not in fullscreen - change icon back to fullscreen
            fullscreenBtn.innerHTML = `
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/>
                </svg>
            `;
        }
    }
}

// Handle form submissions
function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    // Add form submission logic here
}

// Scroll to contact section
function scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Image with fallback functionality
function createImageWithFallback(src, alt, className = '', fallbackSrc = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80') {
    return `
        <img 
            src="${src}" 
            alt="${alt}" 
            class="${className}"
            onerror="this.src='${fallbackSrc}'"
            loading="lazy"
        />
    `;
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export to global scope
window.initializeScrollAnimations = initializeScrollAnimations;
window.initializeInteractions = initializeInteractions;
window.initializeVideoControls = initializeVideoControls;
window.handleFormSubmit = handleFormSubmit;
window.scrollToContact = scrollToContact;
window.createImageWithFallback = createImageWithFallback;
window.debounce = debounce;