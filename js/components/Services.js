export default class Services {
    constructor() {
        this.onNavigateToProjects = null;
    }

    async render() {
        const services = [
            {
                icon: "anchor",
                title: "Houseboat",
                number: "01",
                description: "Comprehensive boat maintenance services, including custom carbon fibre parts, interior modifications, and storage upgrades. Covers everything from fiberglass repairs and waterproofing to electrical, plumbing, and cosmetic work.",
                image: "./images/01_marine/wheelhouse/wheelhouse-1.jpeg",
                intro: "Precision marine solutions from carbon fiber fabrication to complete electrical systems.",
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
                icon: "home",
                title: "Property",
                number: "02",
                description: "Structural and general repairs, floor installations, and tiling. Also includes plumbing diagnostics and repairs, along with high-quality interior and exterior painting and finishing.",
                image: "./images/02_property/entrance/cropped-entrance.jpeg",
                intro: "Comprehensive property solutions with engineering precision and craftsman quality.",
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
                icon: "hammer",
                title: "Custom Woodwork",
                number: "03",
                description: "Handcrafted woodwork tailored to individual needs, from custom storage solutions to kitchen cabinetry. Each piece is designed and built with precision and attention to detail.",
                image: "./images/03_bespoke/top-deck/cropped-top-deck.jpg",
                intro: "Handcrafted furniture and storage solutions designed for lifetime durability.",
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
            <!-- Header -->
            <div class="text-center mb-20 animate-on-scroll">
                <div class="space-y-6">
                    <div class="services-line w-16 h-0.5 bg-orange-500 mx-auto"></div>
                    <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                        SERVICES
                    </h2>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="space-y-20">
                ${services.map((service, index) => `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll delay-${300 + (index * 200)}">
                        <!-- Content -->
                        <div class="space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}">
                            <div class="flex items-center space-x-4">
                                <span class="text-6xl text-foreground tracking-tight">${service.number}</span>
                                <div class="flex items-center space-x-3">
                                    <!-- <div class="p-2 bg-orange-500 text-white">
                                        <i data-lucide="${service.icon}" class="w-6 h-6"></i>
                                    </div> -->
                                    <h3 class="text-6xl text-foreground tracking-tight">${service.title}</h3>
                                </div>
                            </div>

                            <!-- Engaging intro line -->
                            <p class="text-lg text-muted-foreground leading-relaxed">
                                ${service.description}
                            </p>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                ${service.features.map((feature, featureIndex) => `
                                    <div class="flex items-center space-x-3 group">
                                        <i data-lucide="arrow-right" class="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform duration-200"></i>
                                        <span class="text-foreground">${feature}</span>
                                    </div>
                                `).join('')}
                            </div>

                            <!-- Enhanced VIEW PROJECTS button -->
                            <div class="pt-4">
                                <button 
                                    class="service-project-btn group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-orange-500 hover:border-orange-600 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                                    data-service="${service.serviceType}"
                                >
                                    <div class="flex items-center space-x-3">
                                        <span class="text-lg font-semibold">VIEW PROJECTS</span>
                                        <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"></i>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <!-- Image -->
                        <div class="${index % 2 === 1 ? 'lg:order-1' : ''}">
                            <div class="relative overflow-hidden group">
                                <img 
                                    src="${service.image}"
                                    alt="${service.title}"
                                    class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    bindEvents(onNavigateToProjects) {
        this.onNavigateToProjects = onNavigateToProjects;

        // Bind project navigation buttons
        const projectButtons = document.querySelectorAll('.service-project-btn');
        projectButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const serviceType = e.currentTarget.getAttribute('data-service');
                if (this.onNavigateToProjects) {
                    this.onNavigateToProjects(serviceType);
                }
            });
        });

        // Bind contact button
        const contactBtn = document.getElementById('services-contact-btn');
        if (contactBtn) {
            contactBtn.addEventListener('click', this.handleScrollToContact);
        }

        // Initialize scroll animations
        this.initScrollAnimations();
    }

    handleScrollToContact() {
        const element = document.getElementById('contact');
        if (element) {
            const headerOffset = 100; // Account for fixed navigation
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
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
                    
                    // Special handling for services line
                    const servicesLine = entry.target.querySelector('.services-line');
                    if (servicesLine) {
                        setTimeout(() => {
                            servicesLine.style.width = '4rem';
                            servicesLine.style.transition = 'width 0.8s ease-out';
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