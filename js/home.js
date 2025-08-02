// Home page functionality
class HomePage {
    constructor() {
        this.components = {};
        this.init();
    }

    async init() {
        // Load and render all home page components
        await this.loadComponents();
        this.renderComponents();
        this.initHeroAnimations();
    }

    async loadComponents() {
        try {
            // Load component modules
            const componentModules = [
                'About',
                'Services', 
                'Projects',
                'Testimonials',
                'Contact'
            ];

            for (const moduleName of componentModules) {
                const module = await import(`./components/${moduleName}.js`);
                this.components[moduleName] = new module.default();
            }
        } catch (error) {
            console.error('Failed to load components:', error);
        }
    }

    async renderComponents() {
        // Render About section
        if (this.components.About) {
            const aboutContainer = document.querySelector('#about .max-w-7xl');
            aboutContainer.innerHTML = await this.components.About.render();
            this.components.About.bindEvents();
        }

        // Render Services section
        if (this.components.Services) {
            const servicesContainer = document.querySelector('#services .max-w-7xl');
            servicesContainer.innerHTML = await this.components.Services.render();
            this.components.Services.bindEvents((serviceType) => {
                this.handleNavigateToProjects(serviceType);
            });
        }

        // Render Featured Project section
        if (this.components.Projects) {
            const projectsContainer = document.querySelector('#project .max-w-7xl');
            projectsContainer.innerHTML = await this.components.Projects.render();
            this.components.Projects.bindEvents();
        }

        // Render Testimonials section
        if (this.components.Testimonials) {
            const testimonialsContainer = document.querySelector('#testimonials .max-w-7xl');
            testimonialsContainer.innerHTML = await this.components.Testimonials.render();
            this.components.Testimonials.bindEvents();
        }

        // Render Contact section
        if (this.components.Contact) {
            const contactContainer = document.querySelector('#contact .max-w-7xl');
            contactContainer.innerHTML = await this.components.Contact.render();
            this.components.Contact.bindEvents();
        }

        // Reinitialize icons after rendering
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    handleNavigateToProjects(serviceType) {
        switch (serviceType) {
            case 'marine':
                window.location.href = 'marine-projects.html';
                break;
            case 'property':
                window.location.href = 'property-projects.html';
                break;
            case 'bespoke':
                window.location.href = 'bespoke-projects.html';
                break;
        }
    }

    initHeroAnimations() {
        // Hero entrance animations
        const heroElements = {
            bg: document.querySelector('.hero-bg'),
            overlay: document.querySelector('.hero-overlay'),
            title: document.querySelector('.hero-title'),
            line: document.querySelector('.hero-line'),
            subtitle: document.querySelector('.hero-subtitle'),
            buttons: document.querySelector('.hero-buttons'),
            indicator: document.querySelector('.scroll-indicator')
        };

        // Trigger animations on load
        setTimeout(() => {
            if (heroElements.bg) {
                heroElements.bg.style.transform = 'scale(1)';
                heroElements.bg.style.transition = 'transform 1.5s ease-out';
            }
        }, 100);

        setTimeout(() => {
            if (heroElements.overlay) {
                heroElements.overlay.style.opacity = '1';
                heroElements.overlay.style.transition = 'opacity 1s ease-out';
            }
        }, 600);

        setTimeout(() => {
            if (heroElements.title) {
                heroElements.title.style.opacity = '1';
                heroElements.title.style.transform = 'translateY(0)';
                heroElements.title.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
            }
        }, 1000);

        setTimeout(() => {
            if (heroElements.line) {
                heroElements.line.style.width = '6rem';
                heroElements.line.style.transition = 'width 0.8s ease-out';
            }
        }, 1500);

        setTimeout(() => {
            if (heroElements.subtitle) {
                heroElements.subtitle.style.opacity = '1';
                heroElements.subtitle.style.transform = 'translateY(0)';
                heroElements.subtitle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            }
        }, 1300);

        setTimeout(() => {
            if (heroElements.buttons) {
                heroElements.buttons.style.opacity = '1';
                heroElements.buttons.style.transform = 'translateY(0)';
                heroElements.buttons.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            }
        }, 1600);

        setTimeout(() => {
            if (heroElements.indicator) {
                heroElements.indicator.style.opacity = '1';
                heroElements.indicator.style.transform = 'translateX(-50%) translateY(0)';
                heroElements.indicator.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            }
        }, 2000);
    }
}

// Initialize home page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we need to scroll to a specific section from hash
    const hash = window.location.hash;
    if (hash) {
        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    }

    window.homePage = new HomePage();
});