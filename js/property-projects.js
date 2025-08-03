// Property projects page functionality

import { allProjects } from './data/projects.js';

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
        // Property
        this.projects = Object.values(allProjects)
            .filter(p => p.category === 'Property Project')
            .map(p => ({
                id: p.id,
                title: p.title,
                description: p.description,
                shortDescription:
                    p.description.length > 50
                        ? p.description.slice(0, 100) + '…'
                        : p.description,
                mainImage: p.images[0],
                category: p.category
            }));
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
                            <div class="text-xs text-orange-500 tracking-wide mb-2 uppercase">Property Project</div>
                            <h3 class="text-xl mb-3 leading-tight">${project.title}</h3>
                            <p class="text-muted-foreground text-sm mb-4 leading-relaxed">
                                ${project.shortDescription}
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