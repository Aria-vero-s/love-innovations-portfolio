function createNavigation() {
    return `
        <nav class="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md nav-bg border-b border-border z-50">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="#" onclick="handleBackToHome(); return false;" class="brand-font text-2xl text-foreground tracking-tight hover:text-orange-500 transition-colors">
                        LOVE INNOVATIONS
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#about" class="text-foreground hover:text-orange-500 transition-colors tracking-wide">ABOUT</a>
                        <a href="#services" class="text-foreground hover:text-orange-500 transition-colors tracking-wide">SERVICES</a>
                        <a href="#projects" class="text-foreground hover:text-orange-500 transition-colors tracking-wide">PROJECTS</a>
                        <a href="#contact" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm tracking-wide transition-all duration-200">
                            CONTACT
                        </a>
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
                    </div>

                    <!-- Mobile menu button -->
                    <div class="md:hidden flex items-center space-x-3">
                        <!-- Mobile Theme Toggle -->
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
                        
                        <button class="text-foreground hover:text-orange-500" data-mobile-menu-button>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <div class="hidden md:hidden pb-4" data-mobile-menu>
                    <div class="flex flex-col space-y-4">
                        <a href="#about" class="text-foreground hover:text-orange-500 transition-colors tracking-wide">ABOUT</a>
                        <a href="#services" class="text-foreground hover:text-orange-500 transition-colors tracking-wide">SERVICES</a>
                        <a href="#projects" class="text-foreground hover:text-orange-500 transition-colors tracking-wide">PROJECTS</a>
                        <a href="#contact" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm tracking-wide transition-all duration-200 inline-block w-fit">
                            CONTACT
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

window.createNavigation = createNavigation;