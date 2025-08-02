// Main JavaScript application
class LoveInnovationsApp {
    constructor() {
        this.currentView = 'home';
        this.currentProjectId = '';
        this.components = {};
        this.init();
    }

    async init() {
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Load all components
        await this.loadComponents();

        // Initialize hero animations
        this.initHeroAnimations();

        // Render initial view
        this.renderCurrentView();
    }

    async loadComponents() {
        // Load component modules
        const componentModules = [
            'About',
            'Services',
            'Projects',
            'Testimonials',
            'Contact',
            'MarineProjects',
            'PropertyProjects',
            'BespokeProjects',
            'ProjectDetail'
        ];

        for (const moduleName of componentModules) {
            try {
                const module = await import(`./components/${moduleName}.js`);
                this.components[moduleName] = new module.default();
            } catch (error) {
                console.error(`Failed to load component ${moduleName}:`, error);
            }
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

    scrollToSection(sectionId) {
        if (this.currentView !== 'home') {
            this.handleBackToHome();
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    handleNavigateToProjects(serviceType) {
        switch (serviceType) {
            case 'marine':
                this.currentView = 'marine-projects';
                break;
            case 'property':
                this.currentView = 'property-projects';
                break;
            case 'bespoke':
                this.currentView = 'bespoke-projects';
                break;
        }
        this.renderCurrentView();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    handleBackToHome() {
        this.currentView = 'home';
        this.renderCurrentView();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    handleNavigateToContact() {
        this.currentView = 'home';
        this.renderCurrentView();
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    }

    handleProjectSelect(projectId) {
        this.currentProjectId = projectId;
        this.currentView = 'project-detail';
        this.renderCurrentView();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    handleBackToProjects() {
        // Determine which project page to return to based on the current project
        if (this.currentProjectId.includes('piano') || this.currentProjectId.includes('chest') ||
            this.currentProjectId.includes('furniture') || this.currentProjectId.includes('dining') ||
            this.currentProjectId.includes('wardrobe') || this.currentProjectId.includes('kitchen-cabinets') ||
            this.currentProjectId.includes('floating') || this.currentProjectId.includes('antique')) {
            this.currentView = 'bespoke-projects';
        } else if (this.currentProjectId.includes('property') || this.currentProjectId.includes('renovation') ||
            this.currentProjectId.includes('luxury') || this.currentProjectId.includes('structural') ||
            this.currentProjectId.includes('bathroom') || this.currentProjectId.includes('kitchen-extension') ||
            this.currentProjectId.includes('period') || this.currentProjectId.includes('commercial')) {
            this.currentView = 'property-projects';
        } else {
            this.currentView = 'marine-projects';
        }
        this.renderCurrentView();
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }

    renderCurrentView() {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        // Show/hide navigation based on current view
        const homeNav = document.getElementById('home-navigation');
        const subNav = document.getElementById('project-sub-navigation');
        const footer = document.getElementById('site-footer');

        if (this.currentView === 'home') {
            homeNav.classList.remove('hidden');
            subNav.classList.add('hidden');
            footer.classList.remove('hidden');
            document.getElementById('home-view').classList.add('active');

            // Render home sections
            this.renderHomeSections();
        } else {
            homeNav.classList.add('hidden');
            subNav.classList.remove('hidden');
            footer.classList.add('hidden');

            // Show appropriate project view
            const viewElement = document.getElementById(`${this.currentView}-view`);
            if (viewElement) {
                viewElement.classList.add('active');
                this.renderProjectView();
            }
        }
    }

    async renderHomeSections() {
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

    async renderProjectView() {
        let component;
        let container;

        switch (this.currentView) {
            case 'marine-projects':
                component = this.components.MarineProjects;
                container = document.querySelector('#marine-projects-view > div');
                break;
            case 'property-projects':
                component = this.components.PropertyProjects;
                container = document.querySelector('#property-projects-view > div');
                break;
            case 'bespoke-projects':
                component = this.components.BespokeProjects;
                container = document.querySelector('#bespoke-projects-view > div');
                break;
            case 'project-detail':
                component = this.components.ProjectDetail;
                container = document.querySelector('#project-detail-view > div');
                break;
        }

        if (component && container) {
            if (this.currentView === 'project-detail') {
                container.innerHTML = await component.render(this.currentProjectId);
                component.bindEvents(
                    () => this.handleBackToProjects(),
                    () => this.handleNavigateToContact()
                );
            } else {
                container.innerHTML = await component.render();
                component.bindEvents(
                    () => this.handleBackToHome(),
                    (projectId) => this.handleProjectSelect(projectId)
                );
            }
        }

        // Reinitialize icons after rendering
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new LoveInnovationsApp();
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