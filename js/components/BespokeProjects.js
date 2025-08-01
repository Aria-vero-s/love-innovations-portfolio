export default class BespokeProjects {
    constructor() {
        this.projects = [];
    }

    async render() {
        // Load project data
        await this.loadProjects();

        return `
            <!-- Header -->
            <div class="text-center mb-20 animate-on-scroll">
                <div class="space-y-6">
                    <div class="bespoke-line w-16 h-0.5 bg-orange-500 mx-auto"></div>
                    <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                        BESPOKE CRAFTSMANSHIP
                    </h2>
                    <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Handcrafted furniture and storage solutions designed for lifetime durability. Each piece combines traditional techniques with contemporary design.
                    </p>
                </div>
            </div>

            <!-- Projects Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${this.projects.map((project, index) => `
                    <div class="animate-on-scroll delay-${300 + (index * 100)} cursor-pointer project-card" data-project-id="${project.id}">
                        <div class="bg-card border border-border hover:border-orange-500 transition-all duration-300 hover:shadow-lg group overflow-hidden">
                            <div class="aspect-[4/3] overflow-hidden">
                                <img 
                                    src="${project.mainImage || project.images?.[0] || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'}"
                                    alt="${project.title}"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div class="p-6">
                                <div class="text-xs text-orange-500 tracking-wide mb-2 uppercase">Bespoke Craftsmanship</div>
                                <h3 class="text-xl mb-3">${project.title}</h3>
                                <p class="text-muted-foreground text-sm mb-4">
                                    ${project.description}
                                </p>
                                <div class="flex items-center text-orange-500 text-sm">
                                    <span>View Project</span>
                                    <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    async loadProjects() {
        // Default projects in case external loading fails
        this.projects = [
            {
                id: 'bespoke-dining-table',
                title: 'Handcrafted Dining Table',
                description: 'Custom dining table crafted from premium English oak with traditional mortise and tenon joinery.',
                mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
                category: 'Bespoke Craftsmanship',
                details: {
                    status: 'Completed',
                    duration: '6 weeks',
                    client: 'Private Family',
                    location: 'Surrey'
                }
            },
            {
                id: 'bespoke-library-shelving',
                title: 'Built-in Library Shelving',
                description: 'Floor-to-ceiling library shelving system with integrated lighting and hidden storage compartments.',
                mainImage: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=800&h=600&fit=crop',
                category: 'Bespoke Craftsmanship',
                details: {
                    status: 'Completed',
                    duration: '8 weeks',
                    client: 'Book Collector',
                    location: 'Oxford'
                }
            },
            {
                id: 'bespoke-wardrobe-system',
                title: 'Custom Wardrobe System',
                description: 'Bespoke wardrobe with cedar-lined compartments, soft-close drawers, and integrated LED lighting.',
                mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
                category: 'Bespoke Craftsmanship',
                details: {
                    status: 'Completed',
                    duration: '10 weeks',
                    client: 'Executive Couple',
                    location: 'Hampshire'
                }
            },
            {
                id: 'bespoke-kitchen-island',
                title: 'Artisan Kitchen Island',
                description: 'Solid wood kitchen island with integrated wine storage, spice racks, and marble work surface.',
                mainImage: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop',
                category: 'Bespoke Craftsmanship',
                details: {
                    status: 'Completed',
                    duration: '4 weeks',
                    client: 'Culinary Enthusiast',
                    location: 'Brighton'
                }
            },
            {
                id: 'bespoke-floating-shelves',
                title: 'Floating Display Shelves',
                description: 'Minimalist floating shelves with invisible brackets and integrated cable management.',
                mainImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
                category: 'Bespoke Craftsmanship',
                details: {
                    status: 'Completed',
                    duration: '2 weeks',
                    client: 'Art Collector',
                    location: 'Central London'
                }
            },
            {
                id: 'bespoke-antique-restoration',
                title: 'Antique Chest Restoration',
                description: 'Meticulous restoration of 18th-century chest using period-appropriate techniques and materials.',
                mainImage: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
                category: 'Bespoke Craftsmanship',
                details: {
                    status: 'Completed',
                    duration: '12 weeks',
                    client: 'Heritage Trust',
                    location: 'Historic House'
                }
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

            // If we loaded any external projects, merge them with defaults
            if (loadedProjects.length > 0) {
                this.projects = [...loadedProjects, ...this.projects];
            }
        } catch (error) {
            console.log('Using default bespoke projects data');
        }
    }

    bindEvents(onBack, onProjectSelect) {
        // Initialize scroll animations
        this.initScrollAnimations();

        // Bind project card clicks
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project-id');
                if (onProjectSelect) {
                    onProjectSelect(projectId);
                }
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