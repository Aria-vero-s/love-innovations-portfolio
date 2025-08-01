export default class Testimonials {
    constructor() {}

    async render() {
        const testimonials = [
            {
                rating: 5,
                text: "Ben's engineering background really shows in his work. The attention to detail on our boat's carbon fiber repairs was exceptional. Professional, reliable, and incredibly skilled.",
                author: "James Mitchell",
                role: "Houseboat Owner",
                initials: "JM"
            },
            {
                rating: 5,
                text: "Transformed our Victorian property while maintaining its character. Ben's approach combines traditional craftsmanship with modern engineering - exactly what we needed.",
                author: "Sarah Thompson",
                role: "Property Developer",
                initials: "ST"
            },
            {
                rating: 5,
                text: "The dining table Ben created is a masterpiece. His precision and attention to detail are remarkable. It's clear he takes pride in every aspect of his craft.",
                author: "Robert Chen",
                role: "Homeowner",
                initials: "RC"
            }
        ];

        return `
            <!-- Header -->
            <div class="text-center mb-20 animate-on-scroll">
                <div class="space-y-6">
                    <div class="testimonials-line w-16 h-0.5 bg-orange-500 mx-auto"></div>
                    <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                        CLIENT REVIEWS
                    </h2>
                    <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        What the clients say about working with Love Innovations
                    </p>
                </div>
            </div>

            <!-- Testimonials Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                ${testimonials.map((testimonial, index) => `
                    <div class="animate-on-scroll delay-${300 + (index * 100)}">
                        <div class="bg-card border border-border p-8 h-full">
                            <!-- Rating -->
                            <div class="flex items-center mb-6">
                                ${Array(testimonial.rating).fill(0).map(() => 
                                    '<i data-lucide="star" class="w-5 h-5 text-orange-500 fill-current"></i>'
                                ).join('')}
                            </div>
                            
                            <!-- Testimonial Text -->
                            <blockquote class="text-muted-foreground leading-relaxed mb-6 italic">
                                "${testimonial.text}"
                            </blockquote>
                            
                            <!-- Author -->
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mr-4">
                                    <span class="text-orange-500 font-medium">${testimonial.initials}</span>
                                </div>
                                <div>
                                    <div class="text-foreground">${testimonial.author}</div>
                                    <div class="text-sm text-muted-foreground">${testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Trust Indicators -->
            <div class="border-t border-border pt-16 animate-on-scroll delay-600">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="space-y-4">
                        <div class="text-4xl text-orange-500">9+</div>
                        <div class="text-foreground tracking-tight">Years Experience</div>
                        <div class="text-sm text-muted-foreground">Across marine, property & bespoke projects</div>
                    </div>
                    <div class="space-y-4">
                        <div class="text-4xl text-orange-500">100%</div>
                        <div class="text-foreground tracking-tight">Client Satisfaction</div>
                        <div class="text-sm text-muted-foreground">Every project completed to the highest standard</div>
                    </div>
                    <div class="space-y-4">
                        <div class="text-4xl text-orange-500">50+</div>
                        <div class="text-foreground tracking-tight">Projects Completed</div>
                        <div class="text-sm text-muted-foreground">From minor repairs to major installations</div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Initialize scroll animations
        this.initScrollAnimations();
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
                    
                    // Special handling for testimonials line
                    const testimonialsLine = entry.target.querySelector('.testimonials-line');
                    if (testimonialsLine) {
                        setTimeout(() => {
                            testimonialsLine.style.width = '4rem';
                            testimonialsLine.style.transition = 'width 0.8s ease-out';
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