// Application state
let appState = {
    currentView: 'home',
    currentProjectId: '',
    theme: 'light' // default theme changed to light
};

// Initialize theme from localStorage or default to light
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        appState.theme = savedTheme;
    } else {
        // Default to light mode if no saved preference
        appState.theme = 'light';
    }
    applyTheme(appState.theme);
}

// Apply theme to document
function applyTheme(theme) {
    const html = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
        html.classList.add('dark');
        body.classList.add('dark');
    } else {
        html.classList.remove('dark');
        body.classList.remove('dark');
    }
    
    // Debug logging
    console.log('Applied theme:', theme);
    console.log('HTML classes:', html.className);
    console.log('Body classes:', body.className);
}

// Toggle theme function
function toggleTheme() {
    const newTheme = appState.theme === 'dark' ? 'light' : 'dark';
    appState.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    
    // Update theme toggle button icons
    updateThemeToggleIcons();
    
    // Debug logging
    console.log('Toggled to theme:', newTheme);
}

// Update theme toggle button icons
function updateThemeToggleIcons() {
    const sunIcons = document.querySelectorAll('[data-theme-icon="sun"]');
    const moonIcons = document.querySelectorAll('[data-theme-icon="moon"]');
    
    if (appState.theme === 'dark') {
        sunIcons.forEach(icon => icon.classList.add('hidden'));
        moonIcons.forEach(icon => icon.classList.remove('hidden'));
    } else {
        sunIcons.forEach(icon => icon.classList.remove('hidden'));
        moonIcons.forEach(icon => icon.classList.add('hidden'));
    }
}

// State management functions
function setState(newState) {
    appState = { ...appState, ...newState };
    render();
}

// Navigation handlers
function handleNavigateToProjects(serviceType) {
    switch (serviceType) {
        case 'marine':
            setState({ currentView: 'marine-projects' });
            break;
        case 'property':
            setState({ currentView: 'property-projects' });
            break;
        case 'bespoke':
            setState({ currentView: 'bespoke-projects' });
            break;
    }
    // Scroll to top when navigating to project pages
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

function handleBackToHome() {
    setState({ currentView: 'home' });
    // Scroll to top when returning home
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

function handleNavigateToContact() {
    setState({ currentView: 'home' });
    // Navigate to home and scroll to contact
    setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 200);
}

function handleProjectSelect(projectId) {
    console.log('handleProjectSelect called with ID:', projectId);  // Debug logging
    setState({ 
        currentProjectId: projectId,
        currentView: 'project-detail' 
    });
    // Scroll to top when navigating to project detail
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

function handleBackToProjects() {
    // Use the data structure to determine which project page to return to
    const category = getProjectCategory(appState.currentProjectId);
    
    let targetView;
    switch (category) {
        case 'marine':
            targetView = 'marine-projects';
            break;
        case 'property':
            targetView = 'property-projects';
            break;
        case 'bespoke':
            targetView = 'bespoke-projects';
            break;
        default:
            targetView = 'marine-projects';
            break;
    }
    
    setState({ currentView: targetView });
    // Scroll to top when returning to project pages
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
}

// Render function
function render() {
    const app = document.getElementById('app');
    const { currentView, currentProjectId } = appState;
    
    let content = '';
    
    // Navigation
    if (currentView === 'home') {
        content += createNavigation();
    } else {
        content += `
            <nav class="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="flex justify-between items-center h-20">
                        <button onclick="handleBackToHome()" class="text-2xl text-foreground tracking-tight hover:text-orange-500 transition-colors">
                            LOVE INNOVATIONS
                        </button>
                        <div class="flex items-center space-x-4">
                            <!-- Theme Toggle -->
                            <button 
                                onclick="toggleTheme()"
                                class="p-2 text-foreground hover:text-orange-500 transition-colors hover:bg-muted rounded-lg"
                                title="Toggle theme"
                            >
                                <!-- Sun icon for light mode -->
                                <svg data-theme-icon="sun" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <path d="m12 2 0 2"></path>
                                    <path d="m12 20 0 2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="m2 12 2 0"></path>
                                    <path d="m20 12 2 0"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                                <!-- Moon icon for dark mode -->
                                <svg data-theme-icon="moon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            </button>
                            <button onclick="handleBackToHome()" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm tracking-wide transition-all duration-200">
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
    
    // Main content based on current view
    switch (currentView) {
        case 'marine-projects':
            content += createMarineProjects();
            break;
        case 'property-projects':
            content += createPropertyProjects();
            break;
        case 'bespoke-projects':
            content += createBespokeProjects();
            break;
        case 'project-detail':
            content += createProjectDetail(currentProjectId);
            // Initialize project detail functionality after rendering
            setTimeout(() => {
                initializeProjectDetail(currentProjectId);
            }, 0);
            break;
        default:
            // Home view
            content += createHero();
            content += createAbout();
            content += createServices();
            content += createProjects();
            content += createTestimonials();
            content += createContact();
            break;
    }
    
    app.innerHTML = content;
    
    // Initialize scroll animations and other interactions
    initializeScrollAnimations();
    initializeInteractions();
    
    // Update theme toggle icons after render
    setTimeout(() => {
        updateThemeToggleIcons();
        // Initialize video controls for featured video if it exists
        initializeVideoControls();
    }, 0);
}

// Modal functionality for About section
function showMoreAboutModal() {
    const modal = document.getElementById('more-about-modal');
    if (modal) {
        modal.classList.remove('hidden');
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        // Add click outside to close
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideMoreAboutModal();
            }
        });
        
        // Add escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideMoreAboutModal();
            }
        });
    }
}

function hideMoreAboutModal() {
    const modal = document.getElementById('more-about-modal');
    if (modal) {
        modal.classList.add('hidden');
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Scroll to contact function
function scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    render();
});

// Video control functions for featured video
function toggleVideoPlay() {
    const video = document.getElementById('featuredVideo');
    const playButton = document.getElementById('playButton');
    
    if (video && playButton) {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
        } else {
            video.pause();
            playButton.style.display = 'flex';
        }
    }
}

function toggleFullscreen() {
    const video = document.getElementById('featuredVideo');
    
    if (video) {
        if (!document.fullscreenElement) {
            video.requestFullscreen().then(() => {
                // Video will continue playing in fullscreen
                if (video.paused) {
                    video.play();
                }
            }).catch(err => {
                console.log('Error attempting to enable fullscreen:', err);
            });
        } else {
            document.exitFullscreen().catch(err => {
                console.log('Error attempting to exit fullscreen:', err);
            });
        }
    }
}

// Export functions to global scope for onclick handlers
window.handleNavigateToProjects = handleNavigateToProjects;
window.handleBackToHome = handleBackToHome;
window.handleNavigateToContact = handleNavigateToContact;
window.handleProjectSelect = handleProjectSelect;
window.handleBackToProjects = handleBackToProjects;
window.toggleTheme = toggleTheme;
window.showMoreAboutModal = showMoreAboutModal;
window.hideMoreAboutModal = hideMoreAboutModal;
window.scrollToContact = scrollToContact;
window.toggleVideoPlay = toggleVideoPlay;
window.toggleFullscreen = toggleFullscreen;