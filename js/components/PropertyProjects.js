function createPropertyProjects() {
    const projects = [
        {
            id: "luxury-renovation",
            title: "Luxury Property Renovation",
            description: "Complete transformation of a Victorian townhouse with modern engineering solutions and premium finishes.",
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024",
            location: "London",
            category: "Full Renovation"
        },
        {
            id: "structural-repair", 
            title: "Foundation & Structural Repair",
            description: "Engineering assessment and repair of foundation issues with advanced underpinning techniques.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2024",
            location: "Surrey", 
            category: "Structural Engineering"
        },
        {
            id: "bathroom-remodel",
            title: "Master Bathroom Redesign",
            description: "Complete bathroom renovation with custom tiling, premium fixtures, and advanced plumbing systems.",
            image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            date: "2023",
            location: "Brighton",
            category: "Interior Design"
        }
    ];

    return `
        <section class="min-h-screen pt-32 pb-12 bg-background">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="mb-16 animate-on-scroll animate-fade-in-up">
                    <button onclick="handleBackToHome()" class="flex items-center space-x-2 text-muted-foreground hover:text-orange-500 transition-colors mb-8 group">
                        <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        <span>Back to Services</span>
                    </button>

                    <div class="space-y-6">
                        <div class="flex items-center space-x-4">
                            <div class="p-3 bg-orange-500 text-white">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                            </div>
                            <div>
                                <div class="w-16 h-0.5 bg-orange-500 mb-4"></div>
                                <h1 class="text-4xl md:text-6xl text-foreground tracking-tight">
                                    PROPERTY EXCELLENCE
                                </h1>
                                <p class="text-xl text-muted-foreground mt-4">
                                    Comprehensive property solutions with engineering precision and craftsman quality
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Projects Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${projects.map((project, index) => `
                        <div class="border border-border shadow-sm bg-card overflow-hidden group hover:shadow-lg transition-all duration-300 animate-on-scroll animate-fade-in-up delay-${200 + index * 100}">
                            <div class="relative">
                                ${createImageWithFallback(
                                    project.image,
                                    project.title,
                                    'w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
                                )}
                                <div class="absolute top-4 left-4">
                                    <span class="bg-orange-500/90 text-white px-2 py-1 text-xs tracking-wide">
                                        ${project.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div class="p-6 space-y-4">
                                <h3 class="text-xl text-foreground tracking-tight group-hover:text-orange-500 transition-colors">
                                    ${project.title}
                                </h3>
                                <p class="text-sm text-muted-foreground leading-relaxed">
                                    ${project.description}
                                </p>
                                
                                <div class="flex items-center justify-between text-xs text-muted-foreground">
                                    <div class="flex items-center space-x-1">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        <span>${project.date}</span>
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        <span>${project.location}</span>
                                    </div>
                                </div>

                                <button
                                    onclick="handleProjectSelect('${project.id}')"
                                    class="w-full bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 text-sm tracking-wide transition-all duration-300"
                                >
                                    VIEW DETAILS
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

window.createPropertyProjects = createPropertyProjects;