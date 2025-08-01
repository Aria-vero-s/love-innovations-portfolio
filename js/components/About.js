export default class About {
    constructor() {
        this.profileImage = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=600&fit=crop&crop=center';
    }

    async render() {
        const processSteps = [
            {
                step: "01",
                title: "Initial Consultation",
                description: "Free consultation to understand your vision, requirements, and timeline.",
                duration: "Within 24 hours"
            },
            {
                step: "02",
                title: "Design & Planning",
                description: "Detailed technical assessment, design proposals, and project planning.",
                duration: "3-5 days"
            },
            {
                step: "03",
                title: "Execution",
                description: "Precision craftsmanship with regular progress updates and quality checks.",
                duration: "Project dependent"
            },
            {
                step: "04",
                title: "Completion",
                description: "Final walkthrough, quality assurance, and ongoing support as needed.",
                duration: "Same day"
            }
        ];

        const benefits = [
            {
                title: "Transparent Pricing",
                description: "No hidden costs. Clear estimates provided upfront with detailed breakdowns."
            },
            {
                title: "Ongoing Support",
                description: "Ben is committed to client satisfaction and offers continued support after the project is complete, where possible."
            },
            {
                title: "Regular Updates",
                description: "Stay informed with progress photos and regular communication throughout."
            }
        ];

        return `
            <!-- Main About Content -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24 animate-on-scroll">
                <div class="space-y-8">
                    <div class="space-y-6">
                        <div class="about-line w-16 h-0.5 bg-orange-500"></div>
                        <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                            BEN LOVE
                        </h2>
                    </div>
                    
                    <div class="space-y-6">
                        <p class="text-lg text-muted-foreground leading-relaxed">
                            Ben is a versatile tradesman with a background in civil engineering and over nine years of experience across property, marine, and bespoke furniture projects. Whether on land or at sea, Ben brings thoughtful, durable solutions to every project.
                        </p>
                    </div>

                    <!-- Service highlights -->
                    <div class="grid grid-cols-1 gap-4 pt-6">
                        <div class="flex items-center space-x-4 group animate-on-scroll delay-300">
                            <div class="w-2 h-2 bg-orange-500 group-hover:scale-125 transition-transform duration-200"></div>
                            <span class="text-foreground tracking-wide">Boat Maintenance & Engineering</span>
                        </div>
                        <div class="flex items-center space-x-4 group animate-on-scroll delay-400">
                            <div class="w-2 h-2 bg-orange-500 group-hover:scale-125 transition-transform duration-200"></div>
                            <span class="text-foreground tracking-wide">Property Care & Restoration</span>
                        </div>
                        <div class="flex items-center space-x-4 group animate-on-scroll delay-500">
                            <div class="w-2 h-2 bg-orange-500 group-hover:scale-125 transition-transform duration-200"></div>
                            <span class="text-foreground tracking-wide">Bespoke Woodwork & Furniture</span>
                        </div>
                    </div>

                    <!-- Engineering Excellence Button - Opens Modal -->
                    <button
                        id="credentials-toggle"
                        class="flex items-center space-x-3 text-orange-500 hover:text-white transition-colors group pt-4 animate-on-scroll delay-100"
                    >
                        <span class="tracking-wide">READ MORE</span>
                        <i data-lucide="chevron-right" class="w-4 h-4 transition-transform duration-200"></i>
                    </button>
                </div>

                <div class="lg:order-last animate-on-scroll delay-200 w-full">
                <div class="relative w-full lg:max-w-lg mx-auto">
                    <img 
                    src="./images/profile.jpg"
                    alt="Ben Love profile picture"
                    class="w-full h-80 md:h-96 lg:h-[480px] object-cover object-[center_40%] profile-image"
                    />
                    <div class="absolute inset-0"></div>
                </div>
                </div>

            </div>

            <!-- What to Expect Section -->
            <div class="mb-24 animate-on-scroll delay-700">
                <div class="text-center mb-16">
                    <div class="space-y-6">
                        <div class="expect-line w-16 h-0.5 bg-orange-500 mx-auto"></div>
                        <h2 class="text-3xl md:text-4xl text-foreground tracking-tight">
                            WHAT TO EXPECT
                        </h2>
                        <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            A streamlined process designed for clarity, quality, and your peace of mind
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="process-steps">
                    ${processSteps.map((step, index) => `
                        <div class="animate-on-scroll delay-[${800 + index*100}ms] process-step-card" data-step="${step.step}">
                            <div class="border border-border bg-card group transition-all duration-500 p-6 space-y-4 h-full">
                                <div class="flex items-center justify-between">
                                    <span class="text-3xl tracking-tight text-orange-500/30 transition-colors duration-500 step-number">
                                        ${step.step}
                                    </span>
                                    ${index < processSteps.length - 1 ? '<i data-lucide="arrow-right" class="w-4 h-4 text-muted-foreground lg:hidden"></i>' : ''}
                                </div>
                                <div class="space-y-3">
                                    <h4 class="text-lg tracking-tight text-foreground transition-colors duration-500 step-title">
                                        ${step.title}
                                    </h4>
                                    <p class="text-sm text-muted-foreground leading-relaxed">
                                        ${step.description}
                                    </p>
                                    <div class="text-xs tracking-wide pt-2 text-orange-500 transition-colors duration-500 step-duration">
                                        ${step.duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Process Benefits -->
                <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${benefits.map((benefit, index) => `
                        <div class="flex items-start space-x-4 animate-on-scroll delay-${1200 + (index * 100)}">
                            <div class="p-2 bg-orange-500 text-white mt-1">
                                <i data-lucide="check-circle" class="w-6 h-6"></i>
                            </div>
                            <div class="space-y-2">
                                <h4 class="text-foreground tracking-tight">${benefit.title}</h4>
                                <p class="text-sm text-muted-foreground leading-relaxed">
                                    ${benefit.description}
                                </p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    bindEvents() {
        const toggleBtn = document.getElementById('credentials-toggle');
        const modal = document.getElementById('credentials-modal');
        const closeBtn = document.getElementById('close-credentials-modal');

        // Open modal
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        }

        // Close modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        }

        // Close modal when clicking outside
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
        }

        // Initialize scroll animations
        this.initScrollAnimations();

        // Initialize sequential step animation
        this.initSequentialStepAnimation();
    }

    initSequentialStepAnimation() {
        const processStepsContainer = document.getElementById('process-steps');
        if (!processStepsContainer) return;

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startSequentialAnimation();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(processStepsContainer);
    }

    async startSequentialAnimation() {
        const cards = document.querySelectorAll('.process-step-card');

        // Wait a bit before starting the sequence
        await this.delay(800);

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const cardElement = card.querySelector('div');
            const stepNumber = card.querySelector('.step-number');
            const stepTitle = card.querySelector('.step-title');
            const stepDuration = card.querySelector('.step-duration');

            // Animate this card
            cardElement.classList.add('border-orange-500', 'shadow-lg', 'shadow-orange-500/20', 'scale-105');
            stepNumber.classList.remove('text-orange-500/30');
            stepNumber.classList.add('text-orange-500');
            stepTitle.classList.add('text-orange-500');
            stepDuration.classList.add('text-orange-600');

            // Wait for this animation
            await this.delay(800);

            // Reset this card
            cardElement.classList.remove('border-orange-500', 'shadow-lg', 'shadow-orange-500/20', 'scale-105');
            stepNumber.classList.add('text-orange-500/30');
            stepNumber.classList.remove('text-orange-500');
            stepTitle.classList.remove('text-orange-500');
            stepDuration.classList.remove('text-orange-600');

            // Small pause between cards
            await this.delay(200);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');

                    // Special handling for lines
                    const aboutLine = entry.target.querySelector('.about-line');
                    const expectLine = entry.target.querySelector('.expect-line');

                    if (aboutLine) {
                        setTimeout(() => {
                            aboutLine.style.width = '4rem';
                            aboutLine.style.transition = 'width 0.8s ease-out';
                        }, 300);
                    }

                    if (expectLine) {
                        setTimeout(() => {
                            expectLine.style.width = '4rem';
                            expectLine.style.transition = 'width 0.8s ease-out';
                        }, 800);
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