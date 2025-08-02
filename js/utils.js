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
window.handleFormSubmit = handleFormSubmit;
window.scrollToContact = scrollToContact;
window.createImageWithFallback = createImageWithFallback;
window.debounce = debounce;