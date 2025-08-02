// Marine projects page functionality
class MarineProjectsPage {
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
                id: 'wheelhouse',
                title: 'Houseboat Wheelhouse',
                description: 'Houseboat Wheelhouse.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159939/IMG-20250705-WA0146_wvv072.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'top-deck',
                title: 'Houseboat Roof Deck',
                description: 'Houseboat Roof Deck.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160203/IMG-20250705-WA0306_p33hme.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-countertop-sink',
                title: 'Boat Countertop & Sink',
                description: 'Boat Countertop & Sink.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159709/IMG-20250516-WA0009_cvzwhw.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-move-service',
                title: 'Boat Move Service',
                description: 'Boat Move Service',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159727/IMG-20250208-WA0002_ma4jil.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-roof',
                title: 'Boat Roof',
                description: 'Boat Roof',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161789/IMG-20250711-WA0224_fbu1lk.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-skylight',
                title: 'Boat Skylight',
                description: 'Boat Skylight',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160013/IMG-20250705-WA0016_we8emh.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-exterior',
                title: 'Boat Exterior',
                description: 'Boat Exterior.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161516/IMG-20250711-WA0222_ryehqe.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-interior-refit',
                title: 'Advanced Navigation System Installation',
                description: 'State-of-the-art navigation and communication systems with integrated weather monitoring.',
                mainImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-bench',
                title: 'Boat Bench',
                description: 'Boat Bench.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161586/IMG-20250711-WA0140_s3ybky.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-oven-fit',
                title: 'Boat Oven Fit',
                description: 'Boat Oven',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/project0001.jpg',
                category: 'Marine Engineering'
            },
            {
                id: 'boat-toilet-build',
                title: 'Boat Toilet Build',
                description: 'Boat toilet build',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161564/IMG-20250711-WA0158_esmqd3.jpg',
                category: 'Marine Engineering'
            }
        ];

        // Try to load external project data
        try {
            const marineProjects = await Promise.allSettled([
                fetch('/data/projects/marine/yacht-restoration.json'),
                fetch('/data/projects/marine/engine-rebuild.json')
            ]);

            const loadedProjects = [];
            for (const result of marineProjects) {
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
                // Update existing projects with loaded data
                loadedProjects.forEach(loaded => {
                    const index = this.projects.findIndex(p => p.id === loaded.id);
                    if (index !== -1) {
                        this.projects[index] = { ...this.projects[index], ...loaded };
                    } else {
                        this.projects.push(loaded);
                    }
                });
            }
        } catch (error) {
            console.log('Using default marine projects data');
        }
    }

    renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container) return;

        container.innerHTML = this.projects.map((project, index) => `
            <div class="animate-on-scroll delay-${300 + (index * 100)} cursor-pointer project-card" data-project-id="${project.id}">
                <div class="bg-card border border-border hover:border-orange-500 transition-all duration-300 hover:shadow-lg group overflow-hidden h-full">
                    <div class="aspect-[4/3] overflow-hidden">
                        <img 
                            src="${project.mainImage || project.images?.[0] || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'}"
                            alt="${project.title}"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <div class="text-xs text-orange-500 tracking-wide mb-2 uppercase">Marine Engineering</div>
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
                window.location.href = `project-detail.html?id=${projectId}&category=marine`;
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
                    
                    // Special handling for marine line
                    const marineLine = entry.target.querySelector('.marine-line');
                    if (marineLine) {
                        setTimeout(() => {
                            marineLine.style.width = '4rem';
                            marineLine.style.transition = 'width 0.8s ease-out';
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

// Initialize marine projects page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.marineProjectsPage = new MarineProjectsPage();
});