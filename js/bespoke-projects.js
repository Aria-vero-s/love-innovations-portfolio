// Bespoke projects page functionality
class BespokeProjectsPage {
    constructor() {
        this.projects = [];
        this.init();
    }

    async init() {
        await this.loadProjects();
        this.renderProjects();
        this.initScrollAnimations();
    }

    async loadProjects() {
        // Default projects in case external loading fails
        this.projects = [
            {
                id: 'piano-chest',
                title: 'Piano to Chest Transformation',
                description: 'When a client brought in her friend\'s childhood piano, Ben transformed it into a handcrafted storage chest using its original pieces. This emotional project showcases the connection between craftsmanship and memory, preserving the piano\'s history while creating something beautiful and functional.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159723/IMG-20241207-WA0012_oqxzte.jpg',
                category: 'Heritage Restoration',
                featured: true
            },
            {
                id: 'ceiling-medallion',
                title: 'Handpainted Ceiling Medallion',
                description: 'Ceiling Medallion.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754178190/WhatsApp_Image_2025-08-03_at_12.45.30_AM_1_vohux9.jpg',
                category: 'Bespoke Craftsmanship'
            },
            {
                id: 'custom-window-build',
                title: 'Custom Window',
                description: 'Complete loft conversion creating a master suite with ensuite and dressing area.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161949/IMG-20250711-WA0143_figtpp.jpg',
                category: 'Bespoke Craftsmanship'
            },
            {
                id: 'black-door',
                title: 'Door Repair & Upgrade',
                description: 'Door.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161529/IMG-20250711-WA0183_bwp5ls.jpg',
                category: 'Bespoke Craftsmanship'
            },
            {
                id: 'guitar',
                title: 'Guitar Project',
                description: 'Guitar.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159710/IMG-20250311-WA0002_xda9zw.jpg',
                category: 'Bespoke Craftsmanship'
            },
            {
                id: 'sanding-job',
                title: 'Door Restoration',
                description: 'Solid wood Door restoration.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159726/IMG-20250531-WA0007_skn1fx.jpg',
                category: 'Bespoke Craftsmanship'
            },
            {
                id: 'vertical-storage',
                title: 'Vertical Storage',
                description: 'Vertical Storage.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754162098/IMG-20250711-WA0195_ujqexw.jpg',
                category: 'Bespoke Craftsmanship'
            }
        ];

        // Try to load external project data
        try {
            const bespokeProjects = await Promise.allSettled([
                fetch('/data/projects/bespoke/dining-table.json'),
                fetch('/data/projects/bespoke/library-shelving.json')
            ]);

            const loadedProjects = [];
            for (const result of bespokeProjects) {
                if (result.status === 'fulfilled' && result.value.ok) {
                    try {
                        const project = await result.value.json();
                        loadedProjects.push(project);
                    } catch (e) {
                        console.log('Failed to parse project JSON');
                    }
                }
            }

            // If we loaded any external projects, use them to enhance our defaults
            if (loadedProjects.length > 0) {
                // Keep piano-chest as first project and merge with loaded projects
                const pianoChest = this.projects.find(p => p.id === 'piano-chest');
                const otherDefaults = this.projects.filter(p => p.id !== 'piano-chest');
                
                // Update existing projects with loaded data
                loadedProjects.forEach(loaded => {
                    const index = otherDefaults.findIndex(p => p.id === loaded.id);
                    if (index !== -1) {
                        otherDefaults[index] = { ...otherDefaults[index], ...loaded };
                    } else {
                        otherDefaults.push(loaded);
                    }
                });
                
                this.projects = [pianoChest, ...otherDefaults];
            }
        } catch (error) {
            console.log('Using default bespoke projects data');
        }
    }

    renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container) return;

        container.innerHTML = this.projects.map((project, index) => `
            <div class="animate-on-scroll delay-${300 + (index * 100)} cursor-pointer project-card" data-project-id="${project.id}">
                <div class="bg-card border border-border hover:border-orange-500 transition-all duration-300 hover:shadow-lg group overflow-hidden h-full">
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img 
                            src="${project.mainImage || project.images?.[0] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'}"
                            alt="${project.title}"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        ${project.featured ? `
                            <div class="absolute top-4 right-4">
                                <span class="bg-yellow-500 text-white px-2 py-1 text-xs tracking-wide">
                                    FEATURED
                                </span>
                            </div>
                        ` : ''}
                    </div>
                    <div class="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <div class="text-xs text-orange-500 tracking-wide mb-2 uppercase">${project.category || 'Bespoke Craftsmanship'}</div>
                            <h3 class="text-xl mb-3 leading-tight">${project.title}</h3>
                            <p class="text-muted-foreground text-sm mb-4 leading-relaxed">
                                ${project.description}
                            </p>
                        </div>
                        <div class="flex items-center text-orange-500 text-sm mt-auto">
                            <span>View Project</span>
                            <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        // Bind project card clicks
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project-id');
                window.location.href = `project-detail.html?id=${projectId}&category=bespoke`;
            });
        });

        // Reinitialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
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
                    
                    // Special handling for bespoke line
                    const bespokeLine = entry.target.querySelector('.bespoke-line');
                    if (bespokeLine) {
                        setTimeout(() => {
                            bespokeLine.style.width = '4rem';
                            bespokeLine.style.transition = 'width 0.8s ease-out';
                        }, 200);
                    }
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

// Initialize bespoke projects page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.bespokeProjectsPage = new BespokeProjectsPage();
});