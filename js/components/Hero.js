function createHero() {
    return `
        <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
            <!-- Background Image -->
            <div class="absolute inset-0 z-0">
                ${createImageWithFallback(
                    './images/flight2.jpeg',
                    'Love Innovations',
                    'w-full h-full object-cover'
                )}
                <div class="absolute inset-0 bg-black/50"></div>
            </div>

            <!-- Hero Content -->
            <div class="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
                <div class="space-y-8">
                    <!-- Title -->
                    <div class="animate-on-scroll animate-fade-in-up">
                        <h1 class="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight">
                            <span class="block text-white">Land & Water</span>
                        </h1>
                    </div>

                    <!-- Subtitle -->
                    <div class="animate-on-scroll animate-fade-in-up delay-200">
                        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Bespoke woodworking, property care, and boat maintenance tailored for lasting quality.
                        </p>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="animate-on-scroll animate-fade-in-up delay-400">
                        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#services" class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg tracking-wide transition-all duration-300 hover:scale-105">
                                EXPLORE SERVICES
                            </a>
                            <button onclick="scrollToContact()" class="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg tracking-wide transition-all duration-300">
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    `;
}

window.createHero = createHero;