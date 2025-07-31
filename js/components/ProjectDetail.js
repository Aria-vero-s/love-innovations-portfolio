function createProjectDetail(projectId) {
    const project = getProjectById(projectId);
    
    if (!project) {
        return `
            <div class="min-h-screen bg-background pt-24 flex items-center justify-center">
                <div class="text-center">
                    <h1 class="text-2xl text-foreground mb-4">Project Not Found</h1>
                    <button
                        onclick="handleBackToProjects()"
                        class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm tracking-wide transition-all duration-200"
                    >
                        Back to Projects
                    </button>
                </div>
            </div>
        `;
    }

    return `
        <div class="min-h-screen bg-background">
            <div class="pt-24 pb-16">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <!-- Back Button -->
                    <button
                        onclick="handleBackToProjects()"
                        class="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                        <span>Back to Projects</span>
                    </button>

                    <!-- Project Header -->
                    <div class="mb-12">
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-orange-500/10 text-orange-500 px-3 py-1 text-sm rounded-full">
                                ${project.category.toUpperCase()}
                            </span>
                            ${project.featured ? `
                                <span class="bg-primary/10 text-primary px-3 py-1 text-sm rounded-full">
                                    FEATURED
                                </span>
                            ` : ''}
                        </div>
                        
                        <h1 class="text-4xl md:text-5xl text-foreground tracking-tight mb-6">
                            ${project.title}
                        </h1>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground mb-8">
                            <div class="flex items-center space-x-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>${project.duration}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span>${project.location}</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <span class="w-4 h-4 flex items-center justify-center bg-muted rounded-full text-xs">
                                    ${project.year}
                                </span>
                                <span>${project.year}</span>
                            </div>
                            ${project.client ? `
                                <div class="flex items-center space-x-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                    </svg>
                                    <span>${project.client}</span>
                                </div>
                            ` : ''}
                        </div>
                        
                        <p class="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                            ${project.description}
                        </p>
                    </div>

                    <!-- Media Section -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <!-- Main Media -->
                        <div class="space-y-6">
                            ${project.videoUrl ? `
                                <div class="relative bg-black rounded-lg overflow-hidden shadow-2xl">
                                    <video
                                        id="projectVideo"
                                        class="w-full h-64 md:h-80 object-cover cursor-pointer"
                                        poster="${project.videoPoster || project.images[0]}"
                                        onclick="toggleProjectVideoPlay()"
                                    >
                                        <source src="${project.videoUrl}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                    
                                    <!-- Play Button Overlay -->
                                    <div 
                                        id="projectPlayButton"
                                        class="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all duration-300 cursor-pointer"
                                        onclick="toggleProjectVideoPlay()"
                                    >
                                        <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300">
                                            <svg class="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>

                                    <!-- Fullscreen Button -->
                                    <button 
                                        class="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-lg flex items-center justify-center transition-all duration-300"
                                        onclick="toggleProjectVideoFullscreen()"
                                        id="projectFullscreenBtn"
                                    >
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/>
                                        </svg>
                                    </button>
                                </div>
                            ` : `
                                <div class="relative">
                                    <div id="projectImageGallery">
                                        ${createImageWithFallback(
                                            project.images[0],
                                            `${project.title} - Image 1`,
                                            'w-full h-64 md:h-80 object-cover rounded-lg shadow-lg cursor-pointer'
                                        )}
                                    </div>
                                    
                                    ${project.images.length > 1 ? `
                                        <button
                                            onclick="previousProjectImage()"
                                            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
                                        >
                                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                            </svg>
                                        </button>
                                        <button
                                            onclick="nextProjectImage()"
                                            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
                                        >
                                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                            </svg>
                                        </button>
                                    ` : ''}
                                    
                                    <button
                                        onclick="openProjectGalleryFullscreen()"
                                        class="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-lg flex items-center justify-center transition-all duration-300"
                                    >
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/>
                                        </svg>
                                    </button>
                                </div>
                            `}

                            <!-- Image Thumbnails -->
                            ${project.images.length > 1 ? `
                                <div class="flex gap-2 overflow-x-auto pb-2" id="projectThumbnails">
                                    ${project.images.map((image, index) => `
                                        <button
                                            onclick="setProjectImageIndex(${index})"
                                            class="flex-shrink-0 w-16 h-16 rounded border-2 border-border hover:border-orange-500/50 overflow-hidden transition-all duration-200 project-thumbnail ${index === 0 ? 'active' : ''}"
                                            data-index="${index}"
                                        >
                                            ${createImageWithFallback(
                                                image,
                                                `${project.title} thumbnail ${index + 1}`,
                                                'w-full h-full object-cover'
                                            )}
                                        </button>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>

                        <!-- Project Details -->
                        <div class="space-y-8">
                            <!-- Tags -->
                            <div>
                                <h3 class="text-lg font-medium text-foreground mb-4">Skills & Techniques</h3>
                                <div class="flex flex-wrap gap-2">
                                    ${project.tags.map(tag =>
                                        `<span class="bg-secondary text-secondary-foreground px-3 py-1 text-sm rounded-full">${tag}</span>`
                                    ).join('')}
                                </div>
                            </div>

                            <!-- Challenges -->
                            <div>
                                <h3 class="text-lg font-medium text-foreground mb-4">Challenges</h3>
                                <ul class="space-y-2">
                                    ${project.challenges.map(challenge => `
                                        <li class="flex items-start space-x-2">
                                            <span class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span class="text-muted-foreground">${challenge}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <!-- Solutions -->
                            <div>
                                <h3 class="text-lg font-medium text-foreground mb-4">Solutions</h3>
                                <ul class="space-y-2">
                                    ${project.solutions.map(solution => `
                                        <li class="flex items-start space-x-2">
                                            <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span class="text-muted-foreground">${solution}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <!-- Results -->
                            <div>
                                <h3 class="text-lg font-medium text-foreground mb-4">Results</h3>
                                <ul class="space-y-2">
                                    ${project.results.map(result => `
                                        <li class="flex items-start space-x-2">
                                            <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <span class="text-muted-foreground">${result}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Testimonial -->
                    ${project.testimonial ? `
                        <div class="bg-card border border-border rounded-lg p-8 mb-16">
                            <blockquote class="text-lg text-muted-foreground italic mb-4">
                                "${project.testimonial.text}"
                            </blockquote>
                            <footer class="text-foreground">
                                <strong>${project.testimonial.author}</strong>
                                ${project.testimonial.position ? `
                                    <span class="text-muted-foreground ml-2">- ${project.testimonial.position}</span>
                                ` : ''}
                            </footer>
                        </div>
                    ` : ''}

                    <!-- CTA Section -->
                    <div class="text-center bg-card border border-border rounded-lg p-8">
                        <h3 class="text-2xl text-foreground mb-4">
                            Interested in Similar Work?
                        </h3>
                        <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Every project is unique, but the attention to detail and engineering excellence remains constant. 
                            Let's discuss how we can bring your vision to life.
                        </p>
                        <button
                            onclick="handleNavigateToContact()"
                            class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 tracking-wide transition-all duration-300 hover:shadow-lg"
                        >
                            GET YOUR QUOTE
                        </button>
                    </div>
                </div>
            </div>

            <!-- Fullscreen Gallery Modal -->
            <div id="projectGalleryModal" class="fixed inset-0 bg-black z-50 hidden flex items-center justify-center">
                <button
                    onclick="closeProjectGalleryFullscreen()"
                    class="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-lg flex items-center justify-center z-10"
                >
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                
                <div class="relative w-full h-full flex items-center justify-center p-4">
                    <div id="fullscreenImageContainer" class="max-w-full max-h-full">
                        <!-- Image will be inserted here -->
                    </div>
                    
                    ${project.images.length > 1 ? `
                        <button
                            onclick="previousProjectImageFullscreen()"
                            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center"
                        >
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button
                            onclick="nextProjectImageFullscreen()"
                            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center"
                        >
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    ` : ''}
                </div>
                
                <!-- Image Counter -->
                ${project.images.length > 1 ? `
                    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                        <span id="imageCounter">1 / ${project.images.length}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Project-specific image gallery state
let currentProjectImageIndex = 0;
let currentProjectImages = [];
let currentProjectVideoPlaying = false;

// Initialize project detail functionality
function initializeProjectDetail(projectId) {
    const project = getProjectById(projectId);
    if (project) {
        currentProjectImages = project.images;
        currentProjectImageIndex = 0;
        currentProjectVideoPlaying = false;
        
        // Initialize video controls if video exists
        if (project.videoUrl) {
            initializeProjectVideoControls();
        }
    }
}

// Video controls for project detail
function toggleProjectVideoPlay() {
    const video = document.getElementById('projectVideo');
    const playButton = document.getElementById('projectPlayButton');
    
    if (video && playButton) {
        if (video.paused) {
            video.play();
            playButton.style.display = 'none';
            currentProjectVideoPlaying = true;
        } else {
            video.pause();
            playButton.style.display = 'flex';
            currentProjectVideoPlaying = false;
        }
    }
}

function toggleProjectVideoFullscreen() {
    const video = document.getElementById('projectVideo');
    
    if (video) {
        if (!document.fullscreenElement) {
            video.requestFullscreen().then(() => {
                if (video.paused) {
                    video.play();
                    currentProjectVideoPlaying = true;
                }
            }).catch(err => {
                console.log('Error attempting to enable fullscreen:', err);
            });
        } else {
            document.exitFullscreen().catch(err => {
                console.log('Error attempting to exit fullscreen:', err);
            });
        }
    }
}

function initializeProjectVideoControls() {
    const video = document.getElementById('projectVideo');
    const playButton = document.getElementById('projectPlayButton');
    
    if (video && playButton) {
        video.addEventListener('pause', () => {
            playButton.style.display = 'flex';
            currentProjectVideoPlaying = false;
        });
        
        video.addEventListener('ended', () => {
            playButton.style.display = 'flex';
            currentProjectVideoPlaying = false;
        });
        
        video.addEventListener('play', () => {
            playButton.style.display = 'none';
            currentProjectVideoPlaying = true;
        });
    }
}

// Image gallery controls
function setProjectImageIndex(index) {
    currentProjectImageIndex = index;
    updateProjectImageDisplay();
    updateProjectThumbnails();
}

function nextProjectImage() {
    currentProjectImageIndex = (currentProjectImageIndex + 1) % currentProjectImages.length;
    updateProjectImageDisplay();
    updateProjectThumbnails();
}

function previousProjectImage() {
    currentProjectImageIndex = (currentProjectImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateProjectImageDisplay();
    updateProjectThumbnails();
}

function updateProjectImageDisplay() {
    const gallery = document.getElementById('projectImageGallery');
    if (gallery && currentProjectImages.length > 0) {
        gallery.innerHTML = createImageWithFallback(
            currentProjectImages[currentProjectImageIndex],
            `Project Image ${currentProjectImageIndex + 1}`,
            'w-full h-64 md:h-80 object-cover rounded-lg shadow-lg cursor-pointer'
        );
    }
}

function updateProjectThumbnails() {
    const thumbnails = document.querySelectorAll('.project-thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (index === currentProjectImageIndex) {
            thumb.classList.add('active');
            thumb.classList.remove('border-border');
            thumb.classList.add('border-orange-500');
        } else {
            thumb.classList.remove('active');
            thumb.classList.add('border-border');
            thumb.classList.remove('border-orange-500');
        }
    });
}

// Fullscreen gallery
function openProjectGalleryFullscreen() {
    const modal = document.getElementById('projectGalleryModal');
    if (modal) {
        modal.classList.remove('hidden');
        updateFullscreenImage();
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectGalleryFullscreen() {
    const modal = document.getElementById('projectGalleryModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function nextProjectImageFullscreen() {
    currentProjectImageIndex = (currentProjectImageIndex + 1) % currentProjectImages.length;
    updateFullscreenImage();
    updateProjectThumbnails();
}

function previousProjectImageFullscreen() {
    currentProjectImageIndex = (currentProjectImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateFullscreenImage();
    updateProjectThumbnails();
}

function updateFullscreenImage() {
    const container = document.getElementById('fullscreenImageContainer');
    const counter = document.getElementById('imageCounter');
    
    if (container && currentProjectImages.length > 0) {
        container.innerHTML = createImageWithFallback(
            currentProjectImages[currentProjectImageIndex],
            `Project Image ${currentProjectImageIndex + 1}`,
            'max-w-full max-h-full object-contain'
        );
    }
    
    if (counter) {
        counter.textContent = `${currentProjectImageIndex + 1} / ${currentProjectImages.length}`;
    }
}

// Export functions
window.createProjectDetail = createProjectDetail;
window.initializeProjectDetail = initializeProjectDetail;
window.toggleProjectVideoPlay = toggleProjectVideoPlay;
window.toggleProjectVideoFullscreen = toggleProjectVideoFullscreen;
window.setProjectImageIndex = setProjectImageIndex;
window.nextProjectImage = nextProjectImage;
window.previousProjectImage = previousProjectImage;
window.openProjectGalleryFullscreen = openProjectGalleryFullscreen;
window.closeProjectGalleryFullscreen = closeProjectGalleryFullscreen;
window.nextProjectImageFullscreen = nextProjectImageFullscreen;
window.previousProjectImageFullscreen = previousProjectImageFullscreen;