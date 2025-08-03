// Project detail page functionality

import { allProjects } from './data/projects.js';

class ProjectDetailPage {
    constructor() {
        this.project = null;
        this.projectId = '';
        this.category = '';
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        // Get project ID and category from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        this.projectId = urlParams.get('id');
        this.category = urlParams.get('category');

        if (this.projectId) {
            this.loadAndRenderProject();
        } else {
            this.renderNotFound();
        }

        // Setup back button
        this.setupBackButton();
    }

    setupBackButton() {
        const backBtn = document.getElementById('back-to-projects-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.handleBackToProjects();
            });
        }
    }

    async loadAndRenderProject() {
        await this.loadProject();
        this.renderProject();
    }

    async loadProject() {
        this.project = allProjects[this.projectId] || null;
        // … external JSON fallback if you like …
    }

    // Determine projects listing URL based on category
    getProjectsPageUrl() {
        switch (this.category) {
            case 'marine':
                return 'marine-projects.html';
            case 'property':
                return 'property-projects.html';
            case 'bespoke':
                return 'bespoke-projects.html';
            default:
                return '/';
        }
    }

    renderProject() {
        const container = document.getElementById('project-content');
        if (!container) return;

        if (!this.project) {
            this.renderNotFound();
            return;
        }

        // Reset current image index
        this.currentImageIndex = 0;

        container.innerHTML = `
            <!-- Project Header -->
            <div class="text-center mb-16 animate-on-scroll">
                <div class="space-y-6">
                    <div class="text-sm text-orange-500 tracking-wide uppercase">${this.project.category}</div>
                    <h1 class="text-4xl md:text-5xl text-foreground tracking-tight">
                        ${this.project.title}
                    </h1>
                    <p class="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        ${this.project.description}
                    </p>
                </div>
            </div>

            <!-- Image Gallery -->
            <div class="max-w-5xl mx-auto">
                <!-- Main Image -->
                <div class="animate-on-scroll delay-300 mb-6">
                    <div class="aspect-video overflow-hidden bg-muted">
                        <img 
                            id="main-image"
                            src="${this.project.images[0]}" 
                            alt="${this.project.title}"
                            class="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <!-- Thumbnail Gallery -->
                ${this.project.images.length > 1 ? `
                    <div class="animate-on-scroll delay-500">
                        <div class="flex space-x-4 overflow-x-auto pb-4">
                            ${this.project.images.map((image, index) => `
                                <button 
                                    class="thumbnail flex-shrink-0 aspect-video w-24 md:w-32 overflow-hidden bg-muted border-2 transition-all duration-300 ${index === 0 ? 'border-orange-500' : 'border-border hover:border-orange-300'}"
                                    data-index="${index}"
                                    onclick="window.projectDetailPage.changeMainImage(${index})"
                                >
                                    <img 
                                        src="${image}" 
                                        alt="${this.project.title} - Image ${index + 1}"
                                        class="w-full h-full object-cover"
                                    />
                                </button>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Call to Action -->
            <div class="text-center mt-16 animate-on-scroll delay-1100">
                <div class="space-y-6">
                    <h3 class="text-2xl text-foreground tracking-tight">Interested in Similar Work?</h3>
                    <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Every project is unique, crafted with precision and attention to detail. Get in touch to discuss your vision.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onclick="window.location.href='/#contact'"
                            class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 tracking-wide transition-all duration-300 hover:scale-105"
                        >
                            Start Your Project
                        </button>
                        <button 
                            onclick="window.location.href='${this.getProjectsPageUrl()}'"
                            class="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 text-lg tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            View More Projects
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.setupImageModal();

        // Initialize scroll animations
        this.initScrollAnimations();

        // Reinitialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // NEW: hook up click handler on the main image
    setupImageModal() {
        const mainImg = document.getElementById('main-image');
        if (mainImg) {
          mainImg.addEventListener('click', () => {
            this.openImageModal(this.currentImageIndex);
          });
        }
        // re-create Lucide icons in modal arrows
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    
      openImageModal(index) {
        this.currentImageIndex = index;
        document.getElementById('modal-image').src = this.project.images[index];
        document.getElementById('image-modal').classList.add('open');
      }
    
      closeImageModal() {
        document.getElementById('image-modal').classList.remove('open');
      }
    
      prevImageModal() {
        const total = this.project.images.length;
        this.currentImageIndex = (this.currentImageIndex - 1 + total) % total;
        document.getElementById('modal-image').src = this.project.images[this.currentImageIndex];
      }
    
      nextImageModal() {
        const total = this.project.images.length;
        this.currentImageIndex = (this.currentImageIndex + 1) % total;
        document.getElementById('modal-image').src = this.project.images[this.currentImageIndex];
      }

    changeMainImage(index) {
        if (!this.project || !this.project.images || index >= this.project.images.length) return;

        this.currentImageIndex = index;

        // Update main image
        const mainImage = document.getElementById('main-image');
        if (mainImage) {
            mainImage.src = this.project.images[index];
        }

        // Update thumbnail borders
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.remove('border-border', 'hover:border-orange-300');
                thumb.classList.add('border-orange-500');
            } else {
                thumb.classList.remove('border-orange-500');
                thumb.classList.add('border-border', 'hover:border-orange-300');
            }
        });
    }

    renderNotFound() {
        const container = document.getElementById('project-content');
        if (!container) return;

        container.innerHTML = `
            <div class="text-center">
                <h1 class="text-4xl mb-4">Project Not Found</h1>
                <p class="text-muted-foreground mb-8">The requested project could not be loaded.</p>
                <button onclick="window.history.back()" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 tracking-wide transition-all duration-300">
                    Go Back
                </button>
            </div>
        `;
    }

    handleBackToProjects() {
        // For the featured project "piano-chest", return to bespoke projects page since it's a bespoke project
        if (this.projectId === 'piano-chest') {
            window.location.href = 'bespoke-projects.html';
            return;
        }

        // Use browser history if available, otherwise navigate to appropriate category page
        if (window.history.length > 1) {
            window.history.back();
        } else {
            switch (this.category) {
                case 'marine':
                    window.location.href = 'marine-projects.html';
                    break;
                case 'property':
                    window.location.href = 'property-projects.html';
                    break;
                case 'bespoke':
                    window.location.href = 'bespoke-projects.html';
                    break;
                default:
                    window.location.href = '/';
            }
        }
    }

    initScrollAnimations() {
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

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Initialize project detail page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.projectDetailPage = new ProjectDetailPage();
});

// Handle browser back button
window.addEventListener('popstate', (event) => {
    // Refresh the page to handle back navigation properly
    window.location.reload();
});