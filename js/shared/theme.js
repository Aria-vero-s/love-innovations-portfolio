// Theme management
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            this.setTheme('dark'); // Always default to dark mode
        }

        // Set up theme toggle listeners
        this.setupToggleListeners();
    }

    setTheme(theme) {
        const html = document.documentElement;
        const body = document.body;
        
        if (theme === 'dark') {
            html.classList.add('dark');
            body.classList.add('dark');
        } else {
            html.classList.remove('dark');
            body.classList.remove('dark');
        }
        
        localStorage.setItem('theme', theme);
        this.updateToggleIcons();
    }

    toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateToggleIcons() {
        const theme = localStorage.getItem('theme') || 'dark';
        
        // Update all sun icons (show in dark mode)
        const sunIcons = document.querySelectorAll('[data-lucide="sun"]');
        sunIcons.forEach(icon => {
            if (theme === 'dark') {
                icon.classList.remove('hidden');
                icon.classList.add('block');
            } else {
                icon.classList.add('hidden');
                icon.classList.remove('block');
            }
        });
        
        // Update all moon icons (show in light mode)
        const moonIcons = document.querySelectorAll('[data-lucide="moon"]');
        moonIcons.forEach(icon => {
            if (theme === 'dark') {
                icon.classList.add('hidden');
                icon.classList.remove('block');
            } else {
                icon.classList.remove('hidden');
                icon.classList.add('block');
            }
        });
    }

    setupToggleListeners() {
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
    
    // Reinitialize icons after theme setup
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            // Update icons after they're created
            if (window.themeManager) {
                window.themeManager.updateToggleIcons();
            }
        }
    }, 100);
});