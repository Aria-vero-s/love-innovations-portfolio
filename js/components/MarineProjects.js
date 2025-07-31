function createMarineProjects() {
    const projects = getProjectsByCategory('marine');
    console.log('Marine projects loaded:', projects);  // Debug logging

    return `
        <div class="min-h-screen bg-background">
            <div class="pt-24 pb-16">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <!-- Back Button -->
                    <button 
                        onclick="handleBackToHome()" 
                        class="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        <span>Back to Home</span>
                    </button>

                    <!-- Header -->
                    <div class="text-center mb-16 animate-on-scroll animate-fade-in-up">
                        <div class="space-y-6">
                            <div class="w-16 h-0.5 bg-orange-500 mx-auto"></div>
                            <h1 class="text-4xl md:text-5xl text-foreground tracking-tight">
                                MARINE ENGINEERING
                            </h1>
                            <p class="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Precision marine solutions from heritage restoration to performance enhancement, 
                                delivering excellence in boat maintenance and marine engineering.
                            </p>
                        </div>
                    </div>

                    <!-- Debug Info -->
                    <div class="mb-4 p-4 bg-card border border-border rounded">
                        <p class="text-foreground">Marine projects found: ${projects.length}</p>
                        ${projects.map(p => `<p class="text-sm text-muted-foreground">- ${p.title} (${p.id})</p>`).join('')}
                        <button onclick="handleProjectSelect('test-marine-id');" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">Test Marine Project Select</button>
                    </div>

                    <!-- Projects Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        ${projects.map((project, index) => `
                            <div class="border border-border shadow-sm bg-card overflow-hidden hover:shadow-lg transition-all duration-300 animate-on-scroll animate-fade-in-up" style="animation-delay: ${index * 0.1}s">
                                <div class="group cursor-pointer" onclick="console.log('Clicking marine project:', '${project.id}'); handleProjectSelect('${project.id}');">
                                    <!-- Project Image -->
                                    <div class="relative overflow-hidden">
                                        ${createImageWithFallback(
                                            project.images[0],
                                            project.title,
                                            'w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500'
                                        )}
                                        
                                        <!-- Category Badge -->
                                        <div class="absolute top-4 left-4">
                                            <span class="bg-orange-500/90 text-white px-3 py-1 text-sm tracking-wide rounded">
                                                MARINE ENGINEERING
                                            </span>
                                        </div>

                                        ${project.featured ? `
                                            <!-- Featured Badge -->
                                            <div class="absolute top-4 right-4">
                                                <span class="bg-primary/90 text-primary-foreground px-3 py-1 text-sm tracking-wide rounded">
                                                    FEATURED
                                                </span>
                                            </div>
                                        ` : ''}

                                        ${project.videoUrl ? `
                                            <!-- Video Indicator -->
                                            <div class="absolute bottom-4 right-4">
                                                <div class="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                                                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>

                                    <!-- Project Content -->
                                    <div class="p-6">
                                        <div class="space-y-4">
                                            <h3 class="text-xl text-foreground tracking-tight group-hover:text-orange-500 transition-colors">
                                                ${project.title}
                                            </h3>
                                            
                                            <p class="text-sm text-muted-foreground leading-relaxed">
                                                ${project.shortDescription}
                                            </p>

                                            <!-- Project Details -->
                                            <div class="flex flex-wrap gap-4 text-xs text-muted-foreground">
                                                <div class="flex items-center space-x-1">
                                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                    </svg>
                                                    <span>${project.duration}</span>
                                                </div>
                                                <div class="flex items-center space-x-1">
                                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                    </svg>
                                                    <span>${project.location}</span>
                                                </div>
                                                ${project.client ? `
                                                    <div class="flex items-center space-x-1">
                                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                                        </svg>
                                                        <span>${project.client}</span>
                                                    </div>
                                                ` : ''}
                                            </div>

                                            <!-- Tags -->
                                            <div class="flex flex-wrap gap-1">
                                                ${project.tags.slice(0, 3).map(tag => 
                                                    `<span class="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded-full">${tag}</span>`
                                                ).join('')}
                                                ${project.tags.length > 3 ? `
                                                    <span class="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded-full">
                                                        +${project.tags.length - 3} more
                                                    </span>
                                                ` : ''}
                                            </div>

                                            <!-- View Details Button -->
                                            <div class="pt-2">
                                                <button onclick="console.log('Detail button clicked:', '${project.id}'); handleProjectSelect('${project.id}');" class="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm tracking-wide transition-all duration-300 rounded">
                                                    VIEW PROJECT DETAILS →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    ${projects.length === 0 ? `
                        <!-- Empty State -->
                        <div class="text-center py-16">
                            <h3 class="text-xl text-foreground mb-4">No Projects Found</h3>
                            <p class="text-muted-foreground">
                                We're always working on new marine engineering projects. Check back soon!
                            </p>
                        </div>
                    ` : ''}

                    <!-- CTA Section -->
                    <div class="text-center bg-card border border-border rounded-lg p-8 animate-on-scroll animate-fade-in-up">
                        <h3 class="text-2xl text-foreground mb-4">
                            Need Marine Engineering Expertise?
                        </h3>
                        <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            From yacht restoration to performance enhancement, we deliver precision marine engineering 
                            solutions with attention to detail and engineering excellence.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                onclick="handleNavigateToContact()" 
                                class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 tracking-wide transition-all duration-300 hover:shadow-lg"
                            >
                                GET YOUR QUOTE
                            </button>
                            <button 
                                onclick="handleBackToHome()" 
                                class="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 tracking-wide transition-all duration-300"
                            >
                                VIEW ALL SERVICES
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

window.createMarineProjects = createMarineProjects;