// Property projects page functionality
class PropertyProjectsPage {
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
                id: 'property-entryway',
                title: 'Property Entryway',
                description: 'Complete entryway renovation.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160091/IMG-20250706-WA0001_gps7so.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'guesthouse-bathroom-renovation',
                title: 'Property Bathroom Renovation',
                description: 'Complete floor installation, painting and new bath.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159685/IMG-20241007-WA0010_fwaoxb.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'property-window-fix',
                title: 'Property Window Fix',
                description: 'Property Window Fix.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159686/IMG-20241109-WA0002_lr3yle.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'guesthouse-bathroom-renovation',
                title: 'Guesthouse Bathroom Renovation',
                description: 'Bathroom renovation with new floor, and structural repairs to the roof.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161361/IMG-20250705-WA0328_kvrfpb.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'kitchen-cabinets',
                title: 'Kitchen Cabinets',
                description: 'Bespoke kitchen cabinets fit to hide an eyesore water heater and plumbing readjustments.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754162095/IMG-20250711-WA0165_gicmkw.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'property-kitchen-renovation',
                title: 'Property Kitchen Renovation',
                description: 'Property Kitchen Renovation.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159919/IMG-20250624-WA0001_qir6if.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'shed',
                title: 'Outdoor Shed',
                description: 'shed.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159922/IMG-20250620-WA0013_rbwqrd.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'paint-job',
                title: 'Paint Job',
                description: 'Paint Job.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159685/IMG-20241007-WA0011_kbw5b3.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'storage',
                title: 'Storage Room',
                description: 'Paint Job.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161519/IMG-20250711-WA0091_piylaq.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'plumbing-fix',
                title: 'WC Plumbing Fix',
                description: 'WC plumbing.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161519/IMG-20250711-WA0129_g5vuwg.jpg',
                category: 'Property Excellence'
            },
            {
                id: 'red-toilet',
                title: 'WC Paint Job',
                description: 'WC Paint Job.',
                mainImage: 'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159684/IMG-20241007-WA0004_yxwedx.jpg',
                category: 'Property Excellence'
            }
        ];

        // Try to load external project data
        try {
            const propertyProjects = await Promise.allSettled([
                fetch('/data/projects/property/victorian-renovation.json'),
                fetch('/data/projects/property/garden-office.json')
            ]);

            const loadedProjects = [];
            for (const result of propertyProjects) {
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
            console.log('Using default property projects data');
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
                            src="${project.mainImage || project.images?.[0] || 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop'}"
                            alt="${project.title}"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div class="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <div class="text-xs text-orange-500 tracking-wide mb-2 uppercase">Property Excellence</div>
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
                window.location.href = `project-detail.html?id=${projectId}&category=property`;
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
                    
                    // Special handling for property line
                    const propertyLine = entry.target.querySelector('.property-line');
                    if (propertyLine) {
                        setTimeout(() => {
                            propertyLine.style.width = '4rem';
                            propertyLine.style.transition = 'width 0.8s ease-out';
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

// Initialize property projects page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.propertyProjectsPage = new PropertyProjectsPage();
});