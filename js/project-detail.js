// Project detail page functionality
class ProjectDetailPage {
    constructor() {
        this.project = null;
        this.projectId = '';
        this.category = '';
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        // Get project ID and category from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        this.projectId = urlParams.get('id');
        this.category = urlParams.get('category');

        if (this.projectId) {
            this.loadAndRenderProject();
        } else {
            this.renderNotFound();
        }

        // Setup back button
        this.setupBackButton();
    }

    setupBackButton() {
        const backBtn = document.getElementById('back-to-projects-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.handleBackToProjects();
            });
        }
    }

    async loadAndRenderProject() {
        await this.loadProject();
        this.renderProject();
    }

    async loadProject() {
        // Comprehensive project database with multiple images for gallery
        const allProjects = {
            // Featured project - piano-chest
            'piano-chest': {
                id: 'piano-chest',
                title: 'Piano to Chest Transformation',
                category: 'Bespoke Woodwork',
                description: 'When a client brought in her friend\'s childhood piano, Ben transformed it into a handcrafted storage chest using its original pieces. This emotional project showcases the connection between craftsmanship and memory, preserving the piano\'s history while creating something beautiful and functional.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159723/IMG-20241207-WA0012_oqxzte.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159726/IMG-20241206-WA0009_pgpb68.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159710/IMG-20241207-WA0008_zto7ja.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159709/IMG-20241206-WA0007_rqngt2.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159703/IMG-20241207-WA0010_frmzgd.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159690/IMG-20241207-WA0002_rcxkwk.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159688/IMG-20241206-WA0011_maevtk.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159688/IMG-20241207-WA0006_rxefrj.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159684/IMG-20241206-WA0005_ll3unq.jpg'

                ]
            },
            // Marine projects
            'wheelhouse': {
                id: 'wheelhouse',
                title: 'Houseboat Wheelhouse',
                category: 'Houseboat Project',
                description: 'Houseboat Wheelhouse.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159939/IMG-20250705-WA0146_wvv072.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159941/IMG-20250705-WA0082_jpduu3.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159944/IMG-20250705-WA0102_vhiugk.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159964/IMG-20250705-WA0096_byl2cp.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159956/IMG-20250705-WA0104_ebhltq.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159981/IMG-20250705-WA0025_snrim2.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159998/IMG-20250705-WA0056_pmc1de.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159927/IMG-20250705-WA0124_ff4cby.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159925/IMG-20250705-WA0142_bx2tec.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159927/IMG-20250705-WA0078_cspv6g.jpg'
                ]
            },
            'top-deck': {
                id: 'top-deck',
                title: 'Houseboat Roof Deck',
                category: 'Houseboat Project',
                description: 'Houseboat Roof Deck.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160203/IMG-20250705-WA0306_p33hme.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160238/IMG-20250706-WA0003_crurwd.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160456/IMG-20250705-WA0315_pfj5yo.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160557/IMG-20250705-WA0309_vjldho.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161356/IMG-20250705-WA0311_xpmo0t.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160079/IMG-20250705-WA0305_ckjpav.jpg'
                ]
            },
            'boat-countertop-sink': {
                id: 'boat-countertop-sink',
                title: 'Boat Countertop & Sink',
                category: 'Houseboat Project',
                description: 'countertop and sink.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159709/IMG-20250516-WA0009_cvzwhw.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159725/IMG-20250508-WA0004_fdldz0.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159725/IMG-20250508-WA0006_dtv84z.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159712/IMG-20250507-WA0001_uvp1ze.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159713/IMG-20250508-WA0002_zew6bz.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159727/IMG-20250516-WA0006_gmja2f.jpg'
                ]
            },
            'boat-move-service': {
                id: 'boat-move-service',
                title: 'Boat Move Service',
                category: 'Houseboat Project',
                description: 'Move Service.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159727/IMG-20250208-WA0002_ma4jil.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159724/IMG-20250208-WA0001_hefi6i.jpg'
                ]
            },
            'boat-roof': {
                id: 'boat-roof',
                title: 'Boat Roof',
                category: 'Houseboat Project',
                description: 'Roof.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161789/IMG-20250711-WA0224_fbu1lk.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161582/IMG-20250711-WA0206_zojz6i.jpg'
                ]
            },
            'boat-skylight': {
                id: 'boat-skylight',
                title: 'Boat Skylight',
                category: 'Houseboat Project',
                description: 'skylight.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160013/IMG-20250705-WA0016_we8emh.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159941/IMG-20250705-WA0074_njsvpg.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754159929/IMG-20250705-WA0076_abm5sg.jpg'
                ]
            },
            'boat-hull-repair': {
                id: 'boat-hull-repair',
                title: 'Boat Hull Repair',
                category: 'Houseboat Project',
                description: 'hull-repair.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161558/IMG-20250711-WA0196_gi0gfm.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161527/IMG-20250711-WA0209_nv4plw.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161510/IMG-20250711-WA0208_oe1per.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161563/IMG-20250711-WA0200_kki80s.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754162095/IMG-20250711-WA0225_mknyza.jpg'
                ]
            },
            'boat-exterior': {
                id: 'boat-exterior',
                title: 'High-Performance Engine Rebuild',
                category: 'Houseboat Project',
                description: 'Boat Exterior.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161516/IMG-20250711-WA0222_ryehqe.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754162090/IMG-20250711-WA0233_vxjcdo.jpg'
                ]
            },
            'boat-interior-refit': {
                id: 'boat-interior-refit',
                title: 'Boat Interior Refit',
                category: 'Houseboat Project',
                description: 'Boat Interior Refit.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160251/IMG-20250705-WA0321_vhnio4.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160237/IMG-20250705-WA0323_jbsybu.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161259/IMG-20250705-WA0318_oxgstt.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160579/IMG-20250705-WA0319_nzgncy.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754160464/IMG-20250705-WA0327_rsooha.jpg'
                ]
            },
            'boat-bench': {
                id: 'boat-bench',
                title: 'Boat Bench',
                category: 'Houseboat Project',
                description: 'Boat Bench.',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161586/IMG-20250711-WA0140_s3ybky.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161586/IMG-20250711-WA0140_s3ybky.jpg'
                ]
            },
            'boat-oven-fit': {
                id: 'boat-oven-fit',
                title: 'Boat oven fit',
                category: 'Houseboat Project',
                description: 'Boat oven',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/project0001.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/project0001.jpg',
                ]
            },
            'boat-toilet-build': {
                id: 'boat-toilet-build',
                title: 'Boat Toilet Build',
                category: 'Houseboat Project',
                description: 'Boat toilet',
                images: [
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161564/IMG-20250711-WA0158_esmqd3.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161531/IMG-20250711-WA0153_hi95vp.jpg',
                    'https://res.cloudinary.com/dbb4fkwfx/image/upload/v1754161526/IMG-20250711-WA0164_ykadkc.jpg'
                ]
            },
            // Property projects
            'property-victorian-renovation': {
                id: 'property-victorian-renovation',
                title: 'Victorian House Restoration',
                category: 'Property Excellence',
                description: 'Complete restoration maintaining period character while adding modern functionality.',
                images: [
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop'
                ]
            },
            'property-kitchen-extension': {
                id: 'property-kitchen-extension',
                title: 'Modern Kitchen Extension',
                category: 'Property Excellence',
                description: 'Contemporary kitchen extension with premium finishes and integrated appliances.',
                images: [
                    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop'
                ]
            },
            'property-bathroom-renovation': {
                id: 'property-bathroom-renovation',
                title: 'Luxury Bathroom Renovation',
                category: 'Property Excellence',
                description: 'High-end bathroom renovation with marble finishes, underfloor heating, and custom fixtures.',
                images: [
                    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop'
                ]
            },
            'property-loft-conversion': {
                id: 'property-loft-conversion',
                title: 'Contemporary Loft Conversion',
                category: 'Property Excellence',
                description: 'Complete loft conversion creating a master suite with ensuite and dressing area.',
                images: [
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop'
                ]
            },
            'property-garden-office': {
                id: 'property-garden-office',
                title: 'Executive Garden Office',
                category: 'Property Excellence',
                description: 'Bespoke garden office with full insulation, electrical systems, and high-speed connectivity.',
                images: [
                    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop'
                ]
            },
            'property-basement-conversion': {
                id: 'property-basement-conversion',
                title: 'Luxury Basement Conversion',
                category: 'Property Excellence',
                description: 'Complete basement transformation into entertainment space with cinema room and wine cellar.',
                images: [
                    'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop'
                ]
            },
            // Bespoke projects
            'bespoke-dining-table': {
                id: 'bespoke-dining-table',
                title: 'Handcrafted Dining Table',
                category: 'Bespoke Craftsmanship',
                description: 'Custom dining table crafted from premium English oak with traditional mortise and tenon joinery.',
                images: [
                    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=800&fit=crop'
                ]
            },
            'bespoke-library-shelving': {
                id: 'bespoke-library-shelving',
                title: 'Built-in Library Shelving',
                category: 'Bespoke Craftsmanship',
                description: 'Floor-to-ceiling library shelving system with integrated lighting and hidden storage.',
                images: [
                    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop'
                ]
            },
            'bespoke-wardrobe-system': {
                id: 'bespoke-wardrobe-system',
                title: 'Custom Wardrobe System',
                category: 'Bespoke Craftsmanship',
                description: 'Bespoke wardrobe with cedar-lined compartments, soft-close drawers, and integrated LED lighting.',
                images: [
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop'
                ]
            },
            'bespoke-kitchen-island': {
                id: 'bespoke-kitchen-island',
                title: 'Artisan Kitchen Island',
                category: 'Bespoke Craftsmanship',
                description: 'Solid wood kitchen island with integrated wine storage, spice racks, and marble work surface.',
                images: [
                    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop'
                ]
            },
            'bespoke-floating-shelves': {
                id: 'bespoke-floating-shelves',
                title: 'Floating Display Shelves',
                category: 'Bespoke Craftsmanship',
                description: 'Minimalist floating shelves with invisible brackets and integrated cable management.',
                images: [
                    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop'
                ]
            },
            'bespoke-antique-restoration': {
                id: 'bespoke-antique-restoration',
                title: 'Antique Chest Restoration',
                category: 'Bespoke Craftsmanship',
                description: 'Meticulous restoration of 18th-century chest using period-appropriate techniques and materials.',
                images: [
                    'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
                    'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&h=800&fit=crop'
                ]
            }
        };

        // Look up the project
        this.project = allProjects[this.projectId] || null;

        // If not found, try to load from external file
        if (!this.project) {
            try {
                const response = await fetch(`/data/projects/${this.category}/${this.projectId.replace(`${this.category}-`, '')}.json`);
                if (response.ok) {
                    const loadedProject = await response.json();
                    // Ensure we have a default image if none provided
                    if (!loadedProject.images || loadedProject.images.length === 0) {
                        loadedProject.images = [loadedProject.mainImage || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop'];
                    }
                    this.project = loadedProject;
                }
            } catch (error) {
                console.log('Could not load external project data');
            }
        }
    }
    // Determine projects listing URL based on category
    getProjectsPageUrl() {
        switch (this.category) {
            case 'marine':
                return 'marine-projects.html';
            case 'property':
                return 'property-projects.html';
            case 'bespoke':
                return 'bespoke-projects.html';
            default:
                return '/';
        }
    }

    renderProject() {
        const container = document.getElementById('project-content');
        if (!container) return;

        if (!this.project) {
            this.renderNotFound();
            return;
        }

        // Reset current image index
        this.currentImageIndex = 0;

        container.innerHTML = `
            <!-- Project Header -->
            <div class="text-center mb-16 animate-on-scroll">
                <div class="space-y-6">
                    <div class="text-sm text-orange-500 tracking-wide uppercase">${this.project.category}</div>
                    <h1 class="text-4xl md:text-5xl text-foreground tracking-tight">
                        ${this.project.title}
                    </h1>
                    <p class="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        ${this.project.description}
                    </p>
                </div>
            </div>

            <!-- Image Gallery -->
            <div class="max-w-5xl mx-auto">
                <!-- Main Image -->
                <div class="animate-on-scroll delay-300 mb-6">
                    <div class="aspect-video overflow-hidden bg-muted">
                        <img 
                            id="main-image"
                            src="${this.project.images[0]}" 
                            alt="${this.project.title}"
                            class="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            onclick="this.requestFullscreen()"
                        />
                    </div>
                </div>

                <!-- Thumbnail Gallery -->
                ${this.project.images.length > 1 ? `
                    <div class="animate-on-scroll delay-500">
                        <div class="flex space-x-4 overflow-x-auto pb-4">
                            ${this.project.images.map((image, index) => `
                                <button 
                                    class="thumbnail flex-shrink-0 aspect-video w-24 md:w-32 overflow-hidden bg-muted border-2 transition-all duration-300 ${index === 0 ? 'border-orange-500' : 'border-border hover:border-orange-300'}"
                                    data-index="${index}"
                                    onclick="window.projectDetailPage.changeMainImage(${index})"
                                >
                                    <img 
                                        src="${image}" 
                                        alt="${this.project.title} - Image ${index + 1}"
                                        class="w-full h-full object-cover"
                                    />
                                </button>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Call to Action -->
            <div class="text-center mt-16 animate-on-scroll delay-1100">
                <div class="space-y-6">
                    <h3 class="text-2xl text-foreground tracking-tight">Interested in Similar Work?</h3>
                    <p class="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Every project is unique, crafted with precision and attention to detail. Get in touch to discuss your vision.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onclick="window.location.href='/#contact'"
                            class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 tracking-wide transition-all duration-300 hover:scale-105"
                        >
                            Start Your Project
                        </button>
                        <button 
                            onclick="window.location.href='${this.getProjectsPageUrl()}'"
                            class="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 text-lg tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            View More Projects
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Initialize scroll animations
        this.initScrollAnimations();

        // Reinitialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    changeMainImage(index) {
        if (!this.project || !this.project.images || index >= this.project.images.length) return;

        this.currentImageIndex = index;

        // Update main image
        const mainImage = document.getElementById('main-image');
        if (mainImage) {
            mainImage.src = this.project.images[index];
        }

        // Update thumbnail borders
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.remove('border-border', 'hover:border-orange-300');
                thumb.classList.add('border-orange-500');
            } else {
                thumb.classList.remove('border-orange-500');
                thumb.classList.add('border-border', 'hover:border-orange-300');
            }
        });
    }

    renderNotFound() {
        const container = document.getElementById('project-content');
        if (!container) return;

        container.innerHTML = `
            <div class="text-center">
                <h1 class="text-4xl mb-4">Project Not Found</h1>
                <p class="text-muted-foreground mb-8">The requested project could not be loaded.</p>
                <button onclick="window.history.back()" class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 tracking-wide transition-all duration-300">
                    Go Back
                </button>
            </div>
        `;
    }

    handleBackToProjects() {
        // For the featured project "piano-chest", return to bespoke projects page since it's a bespoke project
        if (this.projectId === 'piano-chest') {
            window.location.href = 'bespoke-projects.html';
            return;
        }

        // Use browser history if available, otherwise navigate to appropriate category page
        if (window.history.length > 1) {
            window.history.back();
        } else {
            switch (this.category) {
                case 'marine':
                    window.location.href = 'marine-projects.html';
                    break;
                case 'property':
                    window.location.href = 'property-projects.html';
                    break;
                case 'bespoke':
                    window.location.href = 'bespoke-projects.html';
                    break;
                default:
                    window.location.href = '/';
            }
        }
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
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Initialize project detail page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.projectDetailPage = new ProjectDetailPage();
});

// Handle browser back button
window.addEventListener('popstate', (event) => {
    // Refresh the page to handle back navigation properly
    window.location.reload();
});