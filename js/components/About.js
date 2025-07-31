function createAbout() {
    return `
        <section id="about" class="py-24 bg-background">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <!-- Content -->
                    <div class="space-y-8 animate-on-scroll animate-fade-in-left">
                        <div class="space-y-6">
                            <div class="w-16 h-0.5 bg-orange-500"></div>
                            <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                                ABOUT BEN
                            </h2>
                        </div>

                        <div class="space-y-6">
                            <p class="text-lg text-muted-foreground leading-relaxed">
                                With a BSc in Civil Engineering and over nine years of hands-on experience across diverse engineering and construction projects, I bring technical expertise and craftsman precision to every job.
                            </p>
                            
                            <p class="text-lg text-muted-foreground leading-relaxed">
                                From marine engineering solutions to property restoration and bespoke woodwork, my approach combines analytical problem-solving with meticulous attention to detail. Every project is an opportunity to deliver excellence that stands the test of time.
                            </p>
                        </div>

                        <!-- Button Group -->
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button onclick="scrollToContact()" class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 tracking-wide transition-all duration-300 hover:scale-105">
                                DISCUSS YOUR PROJECT
                            </button>
                            <button onclick="showMoreAboutModal()" class="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 tracking-wide transition-all duration-300 hover:scale-105">
                                MORE ABOUT ME
                            </button>
                        </div>
                    </div>

                    <!-- Image -->
                    <div class="animate-on-scroll animate-fade-in-right delay-200">
                        <div class="relative">
                            ${createImageWithFallback(
                                './images/profile.jpg',
                                'Ben Love - Civil Engineer and Craftsman',
                                'w-full h-96 object-cover object-[center_37%] shadow-lg'
                            )}
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- More About Me Modal -->
            <div id="more-about-modal" class="fixed inset-0 z-50 hidden bg-black/50 backdrop-blur-sm">
                <div class="flex items-center justify-center min-h-screen p-4">
                    <div class="bg-background border border-border rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <!-- Modal Header -->
                        <div class="flex items-center justify-between p-6 border-b border-border">
                            <h3 class="text-2xl text-foreground tracking-tight">Ben Love</h3>
                            <button onclick="hideMoreAboutModal()" class="text-muted-foreground hover:text-foreground transition-colors">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Modal Content -->
                        <div class="p-6 space-y-8">
                            <!-- Contact -->
                            <div class="space-y-6">
                                <h4 class="text-xl text-foreground tracking-tight mb-4">Contact</h4>
                                <div class="flex flex-wrap gap-x-8 gap-y-2">
                                <div class="flex items-center space-x-2">
                                    <span class="font-semibold text-foreground whitespace-nowrap">Phone:</span>
                                    <span>+44 123 123 1234</span>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <span class="font-semibold text-foreground whitespace-nowrap">Email:</span>
                                    <a href="mailto:benlove@loveinnovations.com" class="hover:underline text-orange-500">benlove@loveinnovations.com</a>
                                </div>
                                </div>
                            </div>

                            <!-- Detailed Bio -->
                            <div class="space-y-6">
                                <div class="w-16 h-0.5 bg-orange-500"></div>
                                <h4 class="text-xl text-foreground tracking-tight">Summary</h4>
                                
                                <div class="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Ben Love is a dedicated tradesman with over nine years of engineering experience. He holds a 2:1 BSc in Civil Engineering from Kingston University. He began his career gaining geotechnical experience at Synergy Boreholes, where he honed his skills in subsurface investigations. He then advanced to a civil engineering role at Countryside, contributing to various construction projects.
                                    </p>
                                    
                                    <p>
                                        Ben's expertise expanded as he collaborated on projects within the underground network for 4Rail Services, enhancing his understanding of rail infrastructure. At Barnet Council, he worked as a Design Development Engineer, focusing on innovative approaches to traffic and urban development. Pursuing his passion for maritime pursuits, Ben transitioned into boat building, where he taught himself marine engineering, merging his civil engineering background with hands-on craftsmanship.
                                    </p>
                                </div>
                            </div>

                            <!-- Education Timeline -->
                            <div class="space-y-6">
                                <div class="w-16 h-0.5 bg-orange-500"></div>
                                <h4 class="text-xl text-foreground tracking-tight">Education</h4>
                                
                                <div class="space-y-6">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                        <div>
                                            <h5 class="text-foreground">Kingston University</h5>
                                            <p class="text-sm text-muted-foreground">2:1 BSc in Civil Engineering</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Experience Timeline -->
                            <div class="space-y-6">
                                <div class="w-16 h-0.5 bg-orange-500"></div>
                                <h4 class="text-xl text-foreground tracking-tight">Work Experience</h4>
                                
                                <div class="space-y-6">
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                        <div>
                                            <h5 class="text-foreground">Synergy Boreholes</h5>
                                            <p class="text-sm text-muted-foreground">Geotechnical experience and subsurface investigations</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                        <div>
                                            <h5 class="text-foreground">Countryside</h5>
                                            <p class="text-sm text-muted-foreground">Civil engineering role on construction projects</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                        <div>
                                            <h5 class="text-foreground">4Rail Services</h5>
                                            <p class="text-sm text-muted-foreground">Underground network and rail infrastructure projects</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                        <div>
                                            <h5 class="text-foreground">Barnet Council</h5>
                                            <p class="text-sm text-muted-foreground">Design Development Engineer - traffic and urban development</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex gap-4">
                                        <div class="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                        <div>
                                            <h5 class="text-foreground">Marine Engineering Transition</h5>
                                            <p class="text-sm text-muted-foreground">Self-taught marine engineering and boat building expertise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Skills Section -->
                            <div class="space-y-6">
                            <div class="w-16 h-0.5 bg-orange-500"></div>
                            <h4 class="text-xl text-foreground tracking-tight">Skills</h4>

                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                                <div class="bg-card border border-border rounded-lg p-6 hover:border-orange-500/50 transition-colors">
                                <h5 class="text-lg text-foreground mb-3">Marine Engineering</h5>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Fiberglass work</li>
                                    <li>Electrical wiring</li>
                                    <li>Plumbing & leak detection</li>
                                    <li>Carbon fibre work</li>
                                </ul>
                                </div>

                                <div class="bg-card border border-border rounded-lg p-6 hover:border-orange-500/50 transition-colors">
                                <h5 class="text-lg text-foreground mb-3">Property Maintenance</h5>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Structural repairs</li>
                                    <li>Electrical wiring</li>
                                    <li>Plumbing maintenance</li>
                                    <li>Carpentry work</li>
                                    <li>Painting</li>
                                </ul>
                                </div>

                                <div class="bg-card border border-border rounded-lg p-6 hover:border-orange-500/50 transition-colors">
                                <h5 class="text-lg text-foreground mb-3">Woodworking & Carpentry</h5>
                                <ul class="list-disc list-inside space-y-1">
                                    <li>Custom furniture</li>
                                    <li>Cabinet making & finish</li>
                                    <li>Use of hand & power tools</li>
                                    <li>Detailed finishing & sanding</li>
                                </ul>
                                </div>
                            </div>
                            </div>

                        </div>

                        <!-- Modal Footer -->
                        <div class="flex justify-end gap-4 p-6 border-t border-border">
                            <button onclick="hideMoreAboutModal()" class="border border-border text-foreground hover:bg-muted px-6 py-2 tracking-wide transition-colors">
                                Close
                            </button>
                            <button onclick="hideMoreAboutModal(); scrollToContact();" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 tracking-wide transition-colors">
                                Get In Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Modal functionality
function showMoreAboutModal() {
    const modal = document.getElementById('more-about-modal');
    if (modal) {
        modal.classList.remove('hidden');
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';

        // Add click outside to close
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                hideMoreAboutModal();
            }
        });

        // Add escape key to close
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                hideMoreAboutModal();
            }
        });
    }
}

function hideMoreAboutModal() {
    const modal = document.getElementById('more-about-modal');
    if (modal) {
        modal.classList.add('hidden');
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Scroll to contact function
function scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// Export functions to global scope
window.createAbout = createAbout;
window.showMoreAboutModal = showMoreAboutModal;
window.hideMoreAboutModal = hideMoreAboutModal;
window.scrollToContact = scrollToContact;