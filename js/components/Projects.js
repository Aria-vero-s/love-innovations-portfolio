export default class Projects {
    constructor() {}

    async render() {
        const featuredProject = {
            id: "piano-chest", 
            title: "Piano to Chest Transformation",
            category: "Heritage Restoration",
            description: "When a client brought in her friend's childhood piano, Ben transformed it into a handcrafted chest using its original pieces. This emotional project showcases the connection between craftsmanship and memory.",
            videoUrl: "./images/03_bespoke/project/video.mp4",
            videoThumbnail: "./images/03_bespoke/project/thumbnail.png",
            details: {
                duration: "4 weeks",
                client: "Private Client", 
                location: "Client Home",
                value: "Priceless"
            }
        };

        this.featuredProject = featuredProject;


        return `
            <!-- Header -->
            <div class="text-center mb-20 animate-on-scroll">
                <div class="space-y-6">
                    <div class="projects-line w-16 h-0.5 bg-orange-500 mx-auto"></div>
                    <h2 class="text-4xl md:text-5xl text-foreground tracking-tight">
                        FEATURED PROJECT
                    </h2>
                </div>
            </div>

            <!-- Featured Project -->
            <div class="max-w-5xl mx-auto animate-on-scroll delay-300">
                <div class="bg-background border border-border overflow-hidden">
                    <!-- Video Section -->
                    <div class="relative aspect-video bg-muted">
                        <div id="featured-video-player" class="relative w-full h-full cursor-pointer group">
                            <img 
                                src="${featuredProject.videoThumbnail}" 
                                alt="${featuredProject.title}" 
                                class="w-full h-full object-cover object-[center_20%]"
                            />
                            <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div class="w-20 h-20 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                                    <i data-lucide="play" class="w-8 h-8 text-white ml-1"></i>
                                </div>
                            </div>
                            <div class="absolute top-4 right-4">
                                <button id="featured-fullscreen-btn" class="bg-black/50 hover:bg-black/70 text-white p-2 transition-colors group">
                                    <i data-lucide="maximize" class="w-4 h-4 group-hover:scale-110 transition-transform"></i>
                                </button>
                            </div>
                        </div>
                        <video id="featured-project-video" class="w-full h-full object-cover hidden" controls>
                            <source src="${featuredProject.videoUrl}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <!-- Project Information -->
                    <div class="p-8 lg:p-12">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <!-- Project Details -->
                            <div class="space-y-6">
                                <div>
                                    <h3 class="text-3xl lg:text-4xl mb-4 tracking-tight">${featuredProject.title}</h3>
                                    <p class="text-muted-foreground leading-relaxed">
                                        ${featuredProject.description}
                                    </p>
                                </div>
                            </div>

                            <!-- Call to Action -->
                            <div class="space-y-6">

                                <div class="space-y-4">
                                    <button 
                                        id="view-project-details-btn"
                                        class="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 tracking-wide transition-all duration-300 hover:shadow-lg"
                                        data-project-id="${featuredProject.id}"
                                    >
                                        View Project Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Initialize video player
        this.initVideoPlayer();
        
        // Bind View Project Details button - navigate to project detail page
        const viewProjectDetailsBtn = document.getElementById('view-project-details-btn');
        if (viewProjectDetailsBtn) {
            viewProjectDetailsBtn.addEventListener('click', (e) => {
                const projectId = e.target.getAttribute('data-project-id');
                window.location.href = `project-detail.html?id=${projectId}&category=bespoke`;
            });
        }
        
        // Bind project category buttons - navigate to category pages
        const categoryBtns = document.querySelectorAll('.project-category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                switch (category) {
                    case 'marine':
                        window.location.href = 'marine-projects.html';
                        break;
                    case 'property':
                        window.location.href = 'property-projects.html';
                        break;
                    case 'bespoke':
                        window.location.href = 'bespoke-projects.html';
                        break;
                }
            });
        });

        // Initialize scroll animations
        this.initScrollAnimations();
    }

    initVideoPlayer() {
        const trigger   = document.getElementById('featured-video-player');
        const modal     = document.getElementById('videoModal');
        const closeBtn  = document.getElementById('closeModal');
        const modalVid  = document.getElementById('modalVideo');
        const modalSrc  = modalVid.querySelector('source');
      
        if (!trigger || !modal || !closeBtn || !modalVid) return;
      
        trigger.addEventListener('click', () => {
          // now this.featuredProject is defined
          modalSrc.src = this.featuredProject.videoUrl;
          modalVid.load();
      
          modal.classList.add('flex');
          modal.classList.remove('hidden');
          modalVid.currentTime = 0;
          modalVid.play();
        });
      
        const doClose = () => {
          modalVid.pause();
          modalVid.currentTime = 0;
          modal.classList.remove('flex');
          modal.classList.add('hidden');
        };
      
        closeBtn.addEventListener('click', doClose);
        modal.addEventListener('click', e => {
          if (e.target === modal) doClose();
        });
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
                    
                    // Special handling for projects line
                    const projectsLine = entry.target.querySelector('.projects-line');
                    if (projectsLine) {
                        setTimeout(() => {
                            projectsLine.style.width = '4rem';
                            projectsLine.style.transition = 'width 0.8s ease-out';
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