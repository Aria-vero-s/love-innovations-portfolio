export default class Contact {
    constructor() {}

    async render() {
        return `
            <!-- Header -->
            <div class="text-center mb-20 animate-on-scroll">
                <div class="space-y-6">
                    <div class="contact-line w-16 h-0.5 bg-orange-500 mx-auto"></div>
                    <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                        GET IN TOUCH
                    </h2>
                    <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Ready to discuss your project? Let's start with a conversation about your vision and requirements.
                    </p>
                </div>
            </div>

            <!-- Contact Content -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- Contact Information -->
                <div class="animate-on-scroll delay-300">
                    <div class="space-y-8">

                        <!-- Contact Methods -->
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="p-3 bg-orange-500/10 border border-orange-500/20 mt-1">
                                    <i data-lucide="phone" class="w-5 h-5 text-orange-500"></i>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-muted-foreground">+44 7394 065896</div>
                                    <div class="text-sm text-muted-foreground">Available 9AM - 6PM, Mon - Fri</div>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="p-3 bg-orange-500/10 border border-orange-500/20 mt-1">
                                    <i data-lucide="mail" class="w-5 h-5 text-orange-500"></i>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-muted-foreground">info@loveinnovations.co.uk</div>
                                    <div class="text-sm text-muted-foreground">Response within 24 hours</div>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="p-3 bg-orange-500/10 border border-orange-500/20 mt-1">
                                    <i data-lucide="map-pin" class="w-5 h-5 text-orange-500"></i>
                                </div>
                                <div class="space-y-1">
                                    <div class="text-muted-foreground">North London, England</div>
                                    <div class="text-sm text-muted-foreground">Travel available for larger projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="animate-on-scroll delay-400">
                    <form id="contact-form" action="https://formspree.io/f/xrbbolzo" method="POST" class="space-y-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-sm text-muted-foreground mb-2">Name *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    class="w-full px-4 py-3 bg-background border border-border focus:border-orange-500 focus:outline-none transition-colors"
                                    placeholder="Your full name"
                                >
                            </div>
                            <div>
                                <label for="email" class="block text-sm text-muted-foreground mb-2">Email *</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    class="w-full px-4 py-3 bg-background border border-border focus:border-orange-500 focus:outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                >
                            </div>
                        </div>

                        <div>
                            <label for="phone" class="block text-sm text-muted-foreground mb-2">Phone</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                class="w-full px-4 py-3 bg-background border border-border focus:border-orange-500 focus:outline-none transition-colors"
                                placeholder="+44 7XXX XXXXXX"
                            >
                        </div>

                        <div>
                            <label for="message" class="block text-sm text-muted-foreground mb-2">Project Details *</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5" 
                                required 
                                class="w-full px-4 py-3 bg-background border border-border focus:border-orange-500 focus:outline-none transition-colors resize-vertical"
                                placeholder="Please describe your project in detail. Include any specific requirements, materials preferences, or questions you have..."
                            ></textarea>
                        </div>

                        <div class="flex items-start space-x-3">
                            <input 
                                type="checkbox" 
                                id="consent" 
                                name="consent" 
                                required 
                                class="mt-1 text-orange-500 focus:ring-orange-500 border-border"
                            >
                            <label for="consent" class="text-sm text-muted-foreground">
                                I consent to being contacted about my project enquiry. Your details will be kept secure and not shared with third parties. *
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            class="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 tracking-wide transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            id="submit-btn"
                        >
                            <span class="flex items-center justify-center space-x-2">
                                <span>SEND MESSAGE</span>
                                <i data-lucide="send" class="w-4 h-4"></i>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        `;
    }

    bindEvents() {
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e);
            });
        }

        // Initialize scroll animations
        this.initScrollAnimations();
    }

    handleFormSubmit(e) {
        const submitBtn = document.getElementById('submit-btn');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="flex items-center justify-center space-x-2">
                <span>SENDING...</span>
                <i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i>
            </span>
        `;

        // Reinitialize icons for the spinner
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Simulate form submission
        setTimeout(() => {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <span class="flex items-center justify-center space-x-2">
                    <span>SEND MESSAGE</span>
                    <i data-lucide="send" class="w-4 h-4"></i>
                </span>
            `;

            // Show success message
            this.showNotification('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.', 'success');
            
            // Reset form
            e.target.reset();

            // Reinitialize icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 2000);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-24 right-6 z-50 px-6 py-4 border text-sm max-w-sm transform translate-x-full transition-transform duration-300 shadow-lg`;
        
        // Style based on type
        switch (type) {
            case 'success':
                notification.classList.add('bg-green-500', 'text-white', 'border-green-500');
                break;
            case 'error':
                notification.classList.add('bg-red-500', 'text-white', 'border-red-500');
                break;
            default:
                notification.classList.add('bg-background', 'text-foreground', 'border-border');
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
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
                    
                    // Special handling for contact line
                    const contactLine = entry.target.querySelector('.contact-line');
                    if (contactLine) {
                        setTimeout(() => {
                            contactLine.style.width = '4rem';
                            contactLine.style.transition = 'width 0.8s ease-out';
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