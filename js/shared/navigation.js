// Shared navigation functionality
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupScrollAnimations();
        
        // Initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    setupMobileMenu() {
        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        let isOpen = false;

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                isOpen = !isOpen;
                if (isOpen) {
                    menu.classList.remove('hidden');
                    toggle.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
                } else {
                    menu.classList.add('hidden');
                    toggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
                }
                
                // Reinitialize icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (isOpen && !toggle.contains(e.target) && !menu.contains(e.target)) {
                    isOpen = false;
                    menu.classList.add('hidden');
                    toggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }
            });
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    
                    // Special handling for lines
                    const lines = entry.target.querySelectorAll('.marine-line, .property-line, .bespoke-line');
                    lines.forEach(line => {
                        setTimeout(() => {
                            line.style.width = '4rem';
                            line.style.transition = 'width 0.8s ease-out';
                        }, 200);
                    });
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Utility function for smooth scrolling (for homepage)
function scrollToSection(sectionId) {
    // If we're not on the homepage, navigate there first
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        window.location.href = `/#${sectionId}`;
        return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize navigation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.navigationManager = new NavigationManager();
});

// Handle page visibility change to restart animations if needed
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        setTimeout(() => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 100);
    }
});