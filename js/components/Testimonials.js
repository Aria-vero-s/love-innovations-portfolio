function createTestimonials() {
    const testimonials = [
        {
            name: "Sarah Mitchell",
            role: "Houseboat Owner",
            content: "Ben's work on my houseboat was exceptional. His engineering background really showed in his creative problem solving and my space feels so much bigger.",
            rating: 5
        },
        {
            name: "David Thompson", 
            role: "Property Developer",
            content: "Working with Ben on our apartment building renovation was a pleasure. A lot of fixing needed to be done and Ben was there every step of the way.",
            rating: 5
        },
        {
            name: "Emma Williams",
            role: "Homeowner", 
            content: "The bespoke furniture Ben created for us is absolutely beautiful. You can see the care and precision in every joint and finish.",
            rating: 5
        }
    ];

    return `
        <section id="testimonials" class="py-24 bg-card">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20 animate-on-scroll animate-fade-in-up">
                    <div class="space-y-6">
                        <div class="w-16 h-0.5 bg-orange-500 mx-auto"></div>
                        <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                            CLIENT TESTIMONIALS
                        </h2>
                        <p class="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            What the clients are saying
                        </p>
                    </div>
                </div>

                <!-- Testimonials Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${testimonials.map((testimonial, index) => `
                        <div class="border border-border shadow-sm bg-background p-8 space-y-6 animate-on-scroll animate-fade-in-up delay-${200 + index * 200}">
                            <!-- Rating -->
                            <div class="flex space-x-1">
                                ${Array(testimonial.rating).fill(0).map(() => `
                                    <svg class="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                `).join('')}
                            </div>
                            
                            <!-- Content -->
                            <blockquote class="text-muted-foreground leading-relaxed">
                                "${testimonial.content}"
                            </blockquote>
                            
                            <!-- Author -->
                            <div>
                                <div class="text-foreground tracking-tight">${testimonial.name}</div>
                                <div class="text-sm text-muted-foreground">${testimonial.role}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

window.createTestimonials = createTestimonials;