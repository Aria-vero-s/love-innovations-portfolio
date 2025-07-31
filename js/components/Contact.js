function createContact() {
    return `
        <section id="contact" class="py-24 bg-card">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20 animate-on-scroll animate-fade-in-up">
                    <div class="space-y-6">
                        <div class="w-16 h-0.5 bg-orange-500 mx-auto"></div>
                        <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                            START YOUR PROJECT
                        </h2>
                        <p class="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Ready to bring precision engineering and artisan craftsmanship to your next project?
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <!-- Contact Information -->
                    <div class="space-y-8 animate-on-scroll animate-fade-in-left delay-200">
                        <div class="space-y-6">
                            <h3 class="text-2xl text-foreground tracking-tight">Get In Touch</h3>
                            <p class="text-muted-foreground leading-relaxed">
                                Every project begins with a conversation. Let's discuss how we can bring engineering excellence and craftsman quality to your vision.
                            </p>
                        </div>

                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="p-3 bg-orange-500 text-white">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-foreground mb-1">Email</h4>
                                    <a href="mailto:benjaminlove@hotmail.co.uk" class="text-muted-foreground hover:text-orange-500 transition-colors">
                                        benjaminlove@hotmail.co.uk
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="p-3 bg-orange-500 text-white">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-foreground mb-1">Phone</h4>
                                    <a href="tel:+447983620380" class="text-muted-foreground hover:text-orange-500 transition-colors">
                                        +44 7983 620380
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="p-3 bg-orange-500 text-white">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-foreground mb-1">Service Area</h4>
                                    <p class="text-muted-foreground">London, England, UK</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="p-3 bg-orange-500 text-white">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-foreground mb-1">Response Time</h4>
                                    <p class="text-muted-foreground">Within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <!-- Why Choose Section -->
                        <div class="border border-border shadow-sm bg-background p-8">
                            <h4 class="text-xl text-foreground mb-6 tracking-tight">Engineering Excellence</h4>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="flex items-center space-x-3">
                                    <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    <span class="text-muted-foreground">BSc Civil Engineering qualification</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    <span class="text-muted-foreground">9+ years professional experience</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    <span class="text-muted-foreground">Marine & property specialization</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    <span class="text-muted-foreground">Bespoke solutions for every project</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    <span class="text-muted-foreground">Precision engineering approach</span>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                    <span class="text-muted-foreground">Artisan attention to detail</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="border border-border shadow-sm bg-background p-8 animate-on-scroll animate-fade-in-right delay-400">
                        <form onsubmit="handleFormSubmit(event)" class="space-y-6">
                            <div class="space-y-4">
                                <h3 class="text-xl text-foreground tracking-tight">Project Enquiry</h3>
                                <p class="text-muted-foreground">Tell us about your project and we'll get back to you within 24 hours.</p>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        class="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:border-orange-500 focus:ring-0 transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        class="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:border-orange-500 focus:ring-0 transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    class="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:border-orange-500 focus:ring-0 transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    class="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:border-orange-500 focus:ring-0 transition-colors"
                                />
                            </div>

                            <div>
                                <textarea
                                    placeholder="Tell us about your project requirements, timeline, and any specific details..."
                                    rows="6"
                                    class="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:border-orange-500 focus:ring-0 transition-colors resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                class="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 tracking-wide transition-all duration-300"
                            >
                                SEND ENQUIRY
                            </button>

                            <p class="text-sm text-muted-foreground text-center">
                                By submitting this form, you agree to be contacted about your project enquiry.
                            </p>
                        </form>
                    </div>
                </div>

                <!-- Footer -->
                <div class="mt-20 pt-8 border-t border-border text-center space-y-2">
                    <p class="text-muted-foreground">&copy; 2025 Love Innovations. All rights reserved.</p>
                    <p class="text-sm text-muted-foreground">Website created by Ariane Saulnier</p>
                </div>
            </div>
        </section>
    `;
}

window.createContact = createContact;