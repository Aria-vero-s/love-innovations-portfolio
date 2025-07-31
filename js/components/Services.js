function createServices() {
    const services = [
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8l4 4 4-4"></path>
            </svg>`,
            title: "Marine Engineering",
            number: "01",
            intro: "From minor repairs to full overhauls — tailored marine solutions.",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Precision marine solutions from carbon fiber fabrication to complete electrical systems.",
            features: [
                "Custom Carbon Fibre Components",
                "Interior Refits & Optimization", 
                "Structural Repairs & Restoration",
                "Marine Electrical & Plumbing",
                "Waterproofing & Sealing",
                "Cosmetic & Performance Upgrades"
            ],
            serviceType: "marine"
        },
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>`,
            title: "Property Excellence",
            number: "02", 
            intro: "Need help restoring your property? Here's what I offer.",
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Comprehensive property solutions with engineering precision and craftsman quality.",
            features: [
                "Structural Analysis & Repair",
                "Advanced Plumbing Solutions",
                "Premium Finishing Work",
                "Tiling & Flooring Systems", 
                "Interior & Exterior Painting",
                "Renovation Project Management"
            ],
            serviceType: "property"
        },
        {
            icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>`,
            title: "Bespoke Craftsmanship",
            number: "03",
            intro: "Transform ideas into heirloom pieces built to last generations.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Handcrafted furniture and storage solutions designed for lifetime durability.",
            features: [
                "Custom Furniture Design",
                "Handmade Storage Solutions",
                "Bespoke Cabinetry",
                "Wardrobe & Shelving Systems",
                "Restoration Projects", 
                "Specialty Wood Finishing"
            ],
            serviceType: "bespoke"
        }
    ];

    return `
        <section id="services" class="py-24 bg-card">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20 animate-on-scroll animate-fade-in-up">
                    <div class="space-y-6">
                        <div class="w-16 h-0.5 bg-orange-500 mx-auto"></div>
                        <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                            SERVICES
                        </h2>
                    </div>
                </div>

                <!-- Services Grid -->
                <div class="space-y-20">
                    ${services.map((service, index) => `
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} animate-on-scroll animate-fade-in-up delay-${500 + index * 200}">
                            <!-- Content -->
                            <div class="space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}">
                                <div class="flex items-center space-x-4">
                                    <span class="text-6xl text-white tracking-tight">${service.number}</span>
                                    <div class="flex items-center space-x-3">
                                        <div class="p-2 bg-orange-500 text-white">
                                            ${service.icon}
                                        </div>
                                        <h3 class="text-2xl text-foreground tracking-tight">${service.title}</h3>
                                    </div>
                                </div>

                                <!-- Engaging intro line -->
                                <div class="bg-black border-l-4 border-orange-500 p-4">
                                    <p class="text-lg text-white italic leading-relaxed">
                                        ${service.intro}
                                    </p>
                                </div>

                                <p class="text-lg text-muted-foreground leading-relaxed">
                                    ${service.description}
                                </p>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    ${service.features.map(feature => `
                                        <div class="flex items-center space-x-3 group">
                                            <svg class="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                            <span class="text-foreground">${feature}</span>
                                        </div>
                                    `).join('')}
                                </div>

                                <!-- Enhanced VIEW PROJECTS button -->
                                <div class="pt-4">
                                    <button 
                                        onclick="handleNavigateToProjects('${service.serviceType}')"
                                        class="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-orange-500 hover:border-orange-600 hover:scale-105"
                                    >
                                        <div class="flex items-center space-x-3">
                                            <span class="text-lg font-semibold">VIEW PROJECTS</span>
                                            <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <!-- Image -->
                            <div class="${index % 2 === 1 ? 'lg:order-1' : ''}">
                                <div class="relative overflow-hidden group">
                                    ${createImageWithFallback(
                                        service.image,
                                        service.title,
                                        'w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500'
                                    )}
                                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Bottom CTA -->
                <div class="text-center mt-20 animate-on-scroll animate-fade-in-up delay-1500">
                    <div class="space-y-6">
                        <h3 class="text-2xl text-foreground tracking-tight">Ready to Get Started?</h3>
                        <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Every project begins with understanding your vision. Let's discuss how we can bring engineering precision and artisan quality to your next project.
                        </p>
                        <button 
                            onclick="scrollToContact()"
                            class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 tracking-wide transition-all duration-300 hover:scale-105"
                        >
                            GET YOUR QUOTE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

window.createServices = createServices;