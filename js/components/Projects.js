function createProjects() {
    return `
        <section id="projects" class="py-24 bg-background">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <!-- Header -->
                <div class="text-center mb-20 animate-on-scroll animate-fade-in-up">
                    <div class="space-y-6">
                        <div class="w-16 h-0.5 bg-orange-500 mx-auto"></div>
                        <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                            FEATURED PROJECT
                        </h2>
                    </div>
                </div>

                <!-- Featured Project Highlight -->
                <div class="mb-20 animate-on-scroll animate-fade-in-up delay-200">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <!-- Video Section -->
                        <div class="relative">
                            <div class="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                                <video 
                                    id="featuredVideo" 
                                    class="w-full h-64 md:h-80 lg:h-96 object-cover object-[center_25%] cursor-pointer"
                                    poster="./images/03_furniture/project/thumbnail.png"
                                    onclick="toggleVideoPlay()"
                                >
                                    <source src="./images/03_furniture/project/video.mp4" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                                
                                <!-- Play Button Overlay -->
                                <div id="playButton" class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all duration-300 cursor-pointer" onclick="toggleVideoPlay()">
                                    <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300">
                                        <svg class="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Fullscreen Button -->
                                <button id="fullscreenBtn" class="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-lg flex items-center justify-center transition-all duration-300" onclick="toggleFullscreen()">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/>
                                    </svg>
                                </button>

                                <!-- Category Badge -->
                                <div class="absolute top-4 left-4">
                                    <span class="bg-orange-500/90 text-white px-3 py-1 text-sm tracking-wide rounded">
                                        BESPOKE PIANO CHEST
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Content Section -->
                        <div class="space-y-8">
                            <div class="space-y-6">
                                <h3 class="text-3xl md:text-4xl text-foreground tracking-tight">
                                    A Craft with Meaning
                                </h3>
                                <p class="text-lg text-muted-foreground leading-relaxed">
                                    When a client brought in her friend’s childhood piano, Ben transformed it into a handcrafted chest using its original pieces. This is the moment she saw it.
                                </p>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onclick="handleNavigateToProjects('bespoke')" 
                                    class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 tracking-wide transition-all duration-300 hover:shadow-lg"
                                >
                                    VIEW MORE PROJECTS
                                </button>
                                <button 
                                    onclick="handleProjectSelect('piano-chest-transformation')" 
                                    class="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 tracking-wide transition-all duration-300"
                                >
                                    VIEW PROJECT DETAILS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    `;
}

window.createProjects = createProjects;